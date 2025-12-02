import { Popover as BasePopover, type PopoverRootProps } from "@ark-ui/react";
import type { JSX } from "react";
import styles from "./Popover.module.css";

export interface PopoverProps extends PopoverRootProps {
  triggerChildren: JSX.Element;
  title?: string;
}

export function Popover(props: PopoverProps) {
  const { children, title, triggerChildren, ...rest } = props;

  return (
    <BasePopover.Root {...rest}>
      <BasePopover.Trigger asChild>
        {triggerChildren}
        {/*<BasePopover.Indicator>*/}
        {/*  <IconChevronLeft />*/}
        {/*</BasePopover.Indicator>*/}
      </BasePopover.Trigger>
      <BasePopover.Positioner>
        <BasePopover.Content className={styles.Popover}>
          {title ? <BasePopover.Title>{title}</BasePopover.Title> : null}
          <BasePopover.Description>{children}</BasePopover.Description>
        </BasePopover.Content>
      </BasePopover.Positioner>
    </BasePopover.Root>
  );
}
