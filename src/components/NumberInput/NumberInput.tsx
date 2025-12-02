import {
  NumberInput as BaseNumberInput,
  type NumberInputRootProps,
} from "@ark-ui/react";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { clsx } from "clsx";
import type { Ref } from "react";
import { Button } from "../Button/Button.tsx";
import type { Type_CommonFormProps } from "../form/types/Type_CommonFormProps.ts";
import styles from "./NumberInput.module.css";

export interface NumberInputProps
  extends NumberInputRootProps,
    Type_CommonFormProps {
  label?: string;
  error?: string;

  ref?: Ref<HTMLInputElement>;
}

export function NumberInput(props: NumberInputProps) {
  const { label = "", error = false, ...rest } = props;

  return (
    <BaseNumberInput.Root
      className={clsx(styles.NumberInput, {
        [styles.Error]: error,
      })}
      {...rest}
    >
      <BaseNumberInput.Label>{label}</BaseNumberInput.Label>
      <div className={styles.Control}>
        <div className={styles.InputWrapper}>
          <BaseNumberInput.Input />
        </div>
        <BaseNumberInput.Control>
          <BaseNumberInput.IncrementTrigger
            asChild
            className={styles.IncrementTrigger}
          >
            <Button className={styles.IncrementButton}>
              <IconPlus />
            </Button>
          </BaseNumberInput.IncrementTrigger>
          <BaseNumberInput.DecrementTrigger
            asChild
            className={styles.DecrementTrigger}
          >
            <Button className={styles.DecrementButton}>
              <IconMinus />
            </Button>
          </BaseNumberInput.DecrementTrigger>
        </BaseNumberInput.Control>
      </div>
      {error ? (
        <div data-scope={"number-input"} data-part={"error"}>
          {error}
        </div>
      ) : null}
    </BaseNumberInput.Root>
  );
}
