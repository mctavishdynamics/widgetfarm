import { normalizeProps, useMachine } from "@zag-js/react";
import * as zagTabs from "@zag-js/tabs";
import { clsx } from "clsx";
import { type ReactNode, useId } from "react";
import { useTabsContext } from "./useTabsContext.ts";

export type TabsState = "default" | "hover" | "active" | "focus";

export interface ITab {
  value: string;
  label: string;
  content?: ReactNode | ((api: zagTabs.Api) => ReactNode);
}

export interface TabsProps {
  tabs: Array<ITab>;
  defaultValue?: string;
  renderOnlyActive?: boolean;
  className?: HTMLElement["className"];

  activationMode?: zagTabs.Props["activationMode"];
}

export const DATA_SCOPE = "tabs";

function renderContent(tab: ITab, api: zagTabs.Api) {
  return (
    <div {...api.getContentProps({ value: tab.value })} key={tab.value}>
      {tab.content instanceof Function ? tab.content(api) : tab.content}
    </div>
  );
}

export function Tabs(props: TabsProps) {
  const usedId = useId();

  const {
    className = "",
    tabs = [],
    defaultValue,
    renderOnlyActive = false,
    activationMode,
  } = props;

  //////////////////////////////////////////////////////////////////////////////
  // Zag Configuration
  const context = useTabsContext();

  const service = useMachine(zagTabs.machine, {
    id: usedId,
    defaultValue,
    activationMode,
  });

  const api = zagTabs.connect(service, normalizeProps);

  return (
    <div {...api.getRootProps()} className={clsx(context.className, className)}>
      <div {...api.getListProps()}>
        {tabs.map((tab, index) => (
          <button
            key={tab.value}
            {...api.getTriggerProps({ value: tab.value })}
            data-position={
              index === 0 ? "first" : index === tabs.length - 1 ? "last" : index
            }
          >
            <span data-scope={DATA_SCOPE} data-part={"label"}>
              {tab.label}
            </span>
          </button>
        ))}
      </div>
      <div data-scope={DATA_SCOPE} data-part={"container"}>
        {tabs.map((tab) => {
          if (renderOnlyActive) {
            if (tab.value === api.value) {
              return renderContent(tab, api);
            } else {
              return null;
            }
          } else {
            return renderContent(tab, api);
          }
        })}
      </div>
    </div>
  );
}
