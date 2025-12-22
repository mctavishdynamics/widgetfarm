import type { ButtonColor } from "./Button.tsx";

export function normalizeProps(props: Record<string, unknown>) {
  if (props.color) {
    props.color = props.color as ButtonColor;
  }

  return props;
}
