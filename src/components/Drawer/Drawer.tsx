import * as dialog from "@zag-js/dialog";
import { normalizeProps, useMachine } from "@zag-js/react";
import { clsx } from "clsx";
import { type HTMLAttributes, type ReactNode, useId } from "react";
import { TbX } from "react-icons/tb";
import * as ZagDialog from "../../_generated/ZagDialog.ts";
import type { Optional } from "../../types/Optional.ts";
import { Button } from "../Button/Button.tsx";
import { normalizeProps as normalizeButtonProps } from "../Button/normalizeProps.ts";
import { useDrawerContext } from "./useDrawerContext.ts";

export type IDrawerPosition = "top" | "right" | "bottom" | "left";

export interface DrawerProps
  extends
    Optional<dialog.Props, "id">,
    Omit<HTMLAttributes<HTMLDivElement>, "dir" | "role" | "title"> {
  // Trigger
  trigger?: ReactNode;
  triggerRenderer?: (
    props: ReturnType<dialog.Api["getTriggerProps"]>,
  ) => ReactNode;

  title?: ReactNode;
  description?: ReactNode;
  position?: IDrawerPosition;
}

export function Drawer(props: DrawerProps) {
  const context = useDrawerContext();

  const {
    children,
    className,
    description,
    position = "right",
    title,
    trigger,
    triggerRenderer,
  } = props;
  const machineProps = ZagDialog.pickProps({
    ...{ id: useId() },
    ...props,
  } as dialog.Props);

  const service = useMachine(dialog.machine, machineProps);
  const api = dialog.connect(service, normalizeProps);

  return (
    <>
      {triggerRenderer ? (
        triggerRenderer(api.getTriggerProps())
      ) : (
        <Button {...normalizeButtonProps(api.getTriggerProps())}>
          {trigger}
        </Button>
      )}
      {api.open ? (
        <>
          <div
            {...api.getBackdropProps()}
            className={clsx(context.className, className)}
          />
          <div
            {...api.getPositionerProps()}
            className={clsx(context.className, className)}
            data-position={position}
          >
            <div {...api.getContentProps()}>
              <div {...api.getTitleProps()}>{title}</div>
              <div {...api.getDescriptionProps()}>{description}</div>
              <div data-scope={"dialog"} data-part={"body"}>
                {children}
              </div>
              <button {...api.getCloseTriggerProps()}>
                <TbX />
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
