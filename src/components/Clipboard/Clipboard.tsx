import * as clipboard from "@zag-js/clipboard";
import { normalizeProps, useMachine } from "@zag-js/react";
import { pickProps } from "../../_generated/ZagClipboard.ts";
import { usePropsWithId } from "../../hooks/usePropsWithId.ts";
import type { Optional } from "../../types/Optional.ts";
import { useClipboardContext } from "./useClipboardContext.ts";

type ClipboardProps = Optional<clipboard.Props, "id">;

export function Clipboard(props: ClipboardProps) {
  const context = useClipboardContext();

  const machineProps = usePropsWithId(pickProps(props as clipboard.Props));
  const service = useMachine(clipboard.machine, machineProps);
  const api = clipboard.connect(service, normalizeProps);

  return (
    <div {...api.getRootProps()} className={context.className}>
      <label {...api.getLabelProps()}>Copy This Shit</label>
      <div {...api.getControlProps()}>
        <input {...api.getInputProps()} />
        <button {...api.getTriggerProps()}>Copy</button>
        <div {...api.getIndicatorProps({ copied: api.copied })}>INDICATOR</div>
      </div>
    </div>
  );
}
