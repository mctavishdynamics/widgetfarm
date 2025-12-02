import { createContext } from "react";
import type { Theme } from "./Theme.ts";
import { WidgetFarmLightTheme } from "./themes/WidgetFarmTheme.tsx";

interface WidgetFarmContextProps {
  theme: Theme;
}

export const WidgetFarmContext = createContext<WidgetFarmContextProps>({
  theme: WidgetFarmLightTheme,
});
