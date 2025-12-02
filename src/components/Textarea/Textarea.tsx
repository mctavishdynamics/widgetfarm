import TextareaAutosize, {
  type TextareaAutosizeProps,
} from "react-textarea-autosize";
import styles from "./Textarea.module.css";

type TextareaProps = TextareaAutosizeProps;

export function Textarea(props: TextareaProps) {
  return (
    <div className={styles.Textarea} data-scope={"textarea"} data-part={"root"}>
      <TextareaAutosize {...props} className={styles.Textarea_Textarea} />
    </div>
  );
}
