import * as fileUpload from "@zag-js/file-upload";
import { normalizeProps, useMachine } from "@zag-js/react";
import { clsx } from "clsx";
import { type HTMLAttributes, useId } from "react";
import { Button } from "../Button/Button.tsx";
import { useFileUploadContext } from "./useFileUploadContext.ts";

const DATA_SCOPE = "file-upload";

export interface FileUploadProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  onFileAccept?: (details: fileUpload.FileAcceptDetails) => void;
  onFileReject?: (details: fileUpload.FileRejectDetails) => void;
  onFileChange?: (details: fileUpload.FileChangeDetails) => void;
}

export function FileUpload(props: FileUploadProps) {
  const {
    className,
    onFileAccept = (_details) => {},
    onFileReject = (_details) => {},
    onFileChange = (_details) => {},
    ...rest
  } = props;

  const context = useFileUploadContext();

  const service = useMachine(fileUpload.machine, {
    id: useId(),
    onFileAccept,
    onFileReject,
    onFileChange,
  });

  const api = fileUpload.connect(service, normalizeProps);
  const { color: _color, ...triggerProps } = api.getTriggerProps();

  return (
    <div
      {...api.getRootProps()}
      className={clsx(context.className, className)}
      {...rest}
    >
      <div {...api.getDropzoneProps()}>
        <input {...api.getHiddenInputProps()} />
        <span>Drop you files here...</span>
      </div>

      <Button {...triggerProps}>Choose file(s)...</Button>

      {api.acceptedFiles.length > 0 && (
        <ul data-scope={DATA_SCOPE} data-part="item-list">
          {api.acceptedFiles.map((file) => {
            const { color: _color, ...deleteTriggerProps } =
              api.getItemDeleteTriggerProps({ file });

            return (
              <li key={file.name} {...api.getItemProps({ file })}>
                <div {...api.getItemNameProps({ file })}>{file.name}</div>
                <Button {...deleteTriggerProps}>Delete</Button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
