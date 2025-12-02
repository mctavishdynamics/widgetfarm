import { createFileRoute } from "@tanstack/react-router";
import { clsx } from "clsx";
import { TbEye } from "react-icons/tb";
import {
  Button,
  type ButtonColor,
  type ButtonVariant,
} from "../../components/Button/Button.tsx";
import { ButtonProvider } from "../../components/Button/ButtonProvider.tsx";
import base from "../../components/Button/themes/kinda-retro-base.module.css";
import light from "../../components/Button/themes/kinda-retro-light.module.css";
import styles from "./button.module.css";

export const Route = createFileRoute("/components/button")({
  component: RouteComponent,
});

function RouteComponent() {
  const COLORS: Array<ButtonColor> = [
    "default",
    "red",
    "green",
    "pink",
    "purple",
  ];
  const VARIANTS: Array<ButtonVariant> = ["default", "outline"];
  const DISABLED: Array<boolean> = [false, true];
  const ICONS = [null, <TbEye />];

  return (
    <ButtonProvider className={clsx(base.Button, light.Button)}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "8px",
        }}
      >
        {COLORS.map((color) => {
          return VARIANTS.map((variant) => {
            return DISABLED.map((disabled) => {
              return ICONS.map((icon, i) => {
                return (
                  <div
                    key={`${color}-${variant}-${disabled}-${i}`}
                    className={styles.ButtonWrapper}
                  >
                    <Button color={color} variant={variant} disabled={disabled}>
                      {icon}
                      Button
                    </Button>
                  </div>
                );
              });
            });
          });
        })}
      </div>
    </ButtonProvider>
  );
}
