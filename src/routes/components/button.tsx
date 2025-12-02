import { createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react";
import { WidgetFarmProvider } from "../../WidgetFarmProvider.tsx";
import { Badge } from "../../components/Badge/Badge.tsx";
import {
  Button,
  type ButtonColor,
  type ButtonVariant,
} from "../../components/Button/Button.tsx";
import styles from "./styles.module.css";

export const Route = createFileRoute("/components/button")({
  component: RouteComponent,
});

function RouteComponent() {
  const COLORS: Array<ButtonColor> = ["default", "red", "green"];
  const VARIANTS: Array<ButtonVariant> = ["default", "outline"];

  return (
    <WidgetFarmProvider>
      <div className={styles.List}>
        {COLORS.map((color) => {
          return (
            <section key={color} className={styles.Section}>
              {VARIANTS.map((variant) => {
                return (
                  <Fragment key={`${color}-${variant}`}>
                    <div className={styles.Showcase}>
                      <div className={styles.Component}>
                        <Button
                          key={`${color}-${variant}`}
                          color={color}
                          variant={variant}
                        >
                          Button
                        </Button>
                      </div>
                      <div className={styles.Properties}>
                        <div>
                          Color: <Badge>{color}</Badge>
                        </div>
                        <div>
                          Variant: <Badge>{variant}</Badge>
                        </div>
                        <div>
                          Disabled: <Badge>false</Badge>
                        </div>
                      </div>
                    </div>

                    <div className={styles.Showcase}>
                      <div className={styles.Component}>
                        <Button
                          key={`${color}-${variant}-disabled`}
                          color={color}
                          variant={variant}
                          disabled
                        >
                          Button
                        </Button>
                      </div>
                      <div className={styles.Properties}>
                        <div>
                          <span>Color:</span> <Badge>{color}</Badge>
                        </div>
                        <div>
                          Variant: <Badge>{variant}</Badge>
                        </div>
                        <div>
                          Disabled: <Badge>true</Badge>
                        </div>
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            </section>
          );
        })}
      </div>
    </WidgetFarmProvider>
  );
}
