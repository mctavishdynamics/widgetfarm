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

  width?: string;
  height?: string;
}

export function Drawer(props: DrawerProps) {
  const context = useDrawerContext();

  const {
    children,
    className,
    description,
    height = "auto",
    position = "right",
    title,
    trigger,
    triggerRenderer,
    width = "auto",
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
            data-variant={"drawer"}
            className={clsx(context.className, className)}
          />
          <div
            {...api.getPositionerProps()}
            data-variant={"drawer"}
            data-position={position}
            className={clsx(context.className, className)}
          >
            <div
              {...api.getContentProps()}
              data-variant={"drawer"}
              style={{
                ...(position === "left" || position === "right"
                  ? { width }
                  : { height }),
              }}
            >
              {title ? (
                <div {...api.getTitleProps()} data-variant={"drawer"}>
                  {title}
                </div>
              ) : null}
              {description ? (
                <div {...api.getDescriptionProps()} data-variant={"drawer"}>
                  {description}
                </div>
              ) : null}
              <div
                data-scope={"dialog"}
                data-part={"body"}
                data-variant={"drawer"}
              >
                {children}
              </div>
              <button {...api.getCloseTriggerProps()} data-variant={"drawer"}>
                <TbX />
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
