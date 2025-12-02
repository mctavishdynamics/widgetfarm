import clsx from "clsx";
import type { Theme } from "../Theme.ts";

import badgeStyles from "../components/Badge/Badge.module.css";
import badgeLightStyles from "../components/Badge/light.module.css";
import badgeGroupStyles from "../components/BadgeGroup/BadgeGroup.module.css";
import buttonStyles from "../components/Button/Button.module.css";
import buttonLightStyles from "../components/Button/light.module.css";
import pageBodyLightStyles from "../components/PageBody/PageBodyLight.module.css";

export const WidgetFarmLightTheme: Theme = {
  Button: clsx(buttonStyles.Button, buttonLightStyles.Light),
  PageBody: pageBodyLightStyles.Light,
  Badge: clsx(badgeStyles.Badge, badgeLightStyles.Badge),
  BadgeGroup: clsx(badgeGroupStyles.BadgeGroup),
};
