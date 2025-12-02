import { Clipboard } from "@ark-ui/react";
import { IconCheck, IconClipboard } from "@tabler/icons-react";
import buttonStyles from "../Button/Button.module.css";
import styles from "./ClipboardButton.module.css";

interface ClipboardButtonProps {
  value: string;
}

export function ClipboardButton(props: ClipboardButtonProps) {
  const { value } = props;

  return (
    <Clipboard.Root value={value} className={styles.ClipboardButton}>
      <Clipboard.Trigger className={buttonStyles.Button}>
        <Clipboard.Indicator copied={<IconCheck />}>
          <IconClipboard />
        </Clipboard.Indicator>
      </Clipboard.Trigger>
    </Clipboard.Root>
  );
}
