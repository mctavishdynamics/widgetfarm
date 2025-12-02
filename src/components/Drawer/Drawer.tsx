import { Dialog as ArkDialog, Portal as ArkPortal } from "@ark-ui/react";
import { IconX } from "@tabler/icons-react";
import type { JSX } from "react";
import styles from "./Drawer.module.css";

interface DrawerProps extends ArkDialog.RootProps {
  title?: string;
  description?: string;

  triggerChildren?: JSX.Element;
  footerChildren?: JSX.Element;
}

const DATA_SCOPE = "dialog";

export function Drawer(props: DrawerProps) {
  const {
    title,
    description,
    children,
    triggerChildren,
    footerChildren,
    ...rest
  } = props;

  return (
    <ArkDialog.Root {...rest}>
      <ArkDialog.Trigger asChild={true}>{triggerChildren}</ArkDialog.Trigger>
      <ArkPortal>
        <ArkDialog.Backdrop className={styles.Drawer} />
        <ArkDialog.Positioner className={styles.Drawer}>
          <ArkDialog.Content className={styles.Drawer}>
            <ArkDialog.Title className={styles.Drawer}>{title}</ArkDialog.Title>
            <ArkDialog.Description className={styles.Drawer}>
              {description}
            </ArkDialog.Description>
            <ArkDialog.CloseTrigger className={styles.Drawer}>
              <IconX />
            </ArkDialog.CloseTrigger>
            <div
              data-scope={DATA_SCOPE}
              data-part={"children"}
              className={styles.Drawer}
            >
              {children}
            </div>

            {footerChildren ? (
              <div
                data-scope={DATA_SCOPE}
                data-part={"footer"}
                className={styles.Drawer}
              >
                {footerChildren}
              </div>
            ) : null}
          </ArkDialog.Content>
        </ArkDialog.Positioner>
      </ArkPortal>
    </ArkDialog.Root>
  );
}
