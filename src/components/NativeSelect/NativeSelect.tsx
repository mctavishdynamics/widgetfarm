import { clsx } from "clsx";
import { forwardRef, type PropsWithChildren, type SelectHTMLAttributes } from "react";
import type { LabelType } from "../../LabelType";
import { useNativeSelectContext } from "./useNativeSelectContext";

export interface NativeSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement>,
    PropsWithChildren {
  label?: LabelType;
}

export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  (props, ref) => {
    const { className, children, ...rest } = props;

    const context = useNativeSelectContext();

    return (
      <select
        ref={ref}
        data-scope="native-select"
        data-part="select"
        className={clsx(context.className, className)}
        {...rest}
      >
        {children}
      </select>
    );
  },
);
