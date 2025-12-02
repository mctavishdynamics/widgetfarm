import { clsx } from "clsx";
import { type HTMLAttributes, useContext } from "react";
import { WidgetFarmContext } from "../../WidgetFarmContext.ts";
import type { WidgetBaseProps } from "../types/WidgetBaseProps.ts";

type BadgeGroupProps = WidgetBaseProps & HTMLAttributes<HTMLDivElement>;

export const BadgeGroup = (props: BadgeGroupProps) => {
  const { theme, className, ...rest } = props;

  const context = useContext(WidgetFarmContext);
  const activeTheme = theme ?? context.theme;

  return (
    <div
      data-scope={"badge-group"}
      data-part={"content"}
      className={clsx(activeTheme.BadgeGroup, className)}
      {...rest}
    />
  );
};
