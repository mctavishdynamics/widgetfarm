import {
  Dialog as ArkDialog,
  Portal,
  type DialogRootProps as ArkDialogRootProps,
} from "@ark-ui/react";
import { IconX } from "@tabler/icons-react";
import { clsx } from "clsx";
import styles from "./Dialog.module.css";

interface DialogProps extends ArkDialogRootProps {
  title: string;
  description?: string;
  opened?: boolean;
  onClose?: () => void;
  centered?: boolean;
  className?: string;
}

export function Dialog(props: DialogProps) {
  const {
    opened = false,
    title = "",
    description = "",
    children,
    onClose = () => {},
    className = "",
  } = props;

  return (
    <div className={styles.Dialog}>
      <ArkDialog.Root
        open={opened}
        onOpenChange={({ open }) => {
          if (!open) {
            onClose();
          }
        }}
      >
        <Portal>
          <ArkDialog.Backdrop className={styles.Dialog} />
          <ArkDialog.Positioner className={clsx(styles.Dialog, className)}>
            <ArkDialog.Content className={clsx(styles.Dialog, className)}>
              <ArkDialog.Title className={styles.Dialog}>
                {title}
              </ArkDialog.Title>
              {description.length ? (
                <ArkDialog.Description className={styles.Dialog}>
                  {description}
                </ArkDialog.Description>
              ) : null}
              <div
                data-scope={"dialog"}
                data-part={"body"}
                className={styles.Dialog}
              >
                {children}
              </div>
              <ArkDialog.CloseTrigger className={styles.Dialog}>
                <IconX />
              </ArkDialog.CloseTrigger>
            </ArkDialog.Content>
          </ArkDialog.Positioner>
        </Portal>
      </ArkDialog.Root>
    </div>
  );
}
