import { createFileRoute } from "@tanstack/react-router";
import { clsx } from "clsx";
import { Checkbox } from "../../../components/Checkbox/Checkbox.tsx";
import { CheckboxProvider } from "../../../components/Checkbox/CheckboxProvider.tsx";
import base from "../../../components/Checkbox/themes/kinda-retro-base.module.css";

export const Route = createFileRoute("/components/checkbox/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <CheckboxProvider className={clsx(base.Checkbox)}>
      <div style={{ width: "50vw", padding: "16px" }}>
        <Checkbox label={"Checkbox"} />
      </div>
    </CheckboxProvider>
  );
}
