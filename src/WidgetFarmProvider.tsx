import type { PropsWithChildren } from "react";
import type { Theme } from "./Theme.ts";
import { WidgetFarmContext } from "./WidgetFarmContext.ts";
import { PageBody } from "./components/PageBody/PageBody.tsx";
import { WidgetFarmLightTheme } from "./themes/WidgetFarmTheme.tsx";

export interface WidgetFarmProviderProps extends PropsWithChildren {
  theme?: Theme;
}

export function WidgetFarmProvider(props: WidgetFarmProviderProps) {
  const { children } = props;

  const value = {
    theme: props.theme ?? WidgetFarmLightTheme,
  };

  return (
    <WidgetFarmContext.Provider value={value}>
      <PageBody />

      {children}
    </WidgetFarmContext.Provider>
  );
}
