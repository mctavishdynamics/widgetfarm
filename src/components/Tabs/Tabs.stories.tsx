import type { Meta, StoryObj } from "@storybook/react-vite";

import { useEffect, useState } from "react";
import type { PartialStoryFn } from "storybook/internal/csf";
import { mixin5050 as baseMixin5050 } from "../../../storybook/mixin5050.ts";
import { mixinDark as baseMixinDark } from "../../../storybook/mixinDark.ts";
import { mixinLight as baseMixinLight } from "../../../storybook/mixinLight.ts";
import { Tabs } from "./Tabs.tsx";
import { TabsProvider } from "./TabsProvider.tsx";
import { theme as theme5050 } from "./styles/osmia-5050.css.ts";
import { theme as themeDark } from "./styles/osmia-dark.css.ts";
import { theme as themeLight } from "./styles/osmia-light.css.ts";

const meta = {
  title: "Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  args: {
    tabs: [
      { value: "tab-1", label: "Tab 1", content: "Content 1" },
      { value: "tab-2", label: "Tab 2", content: "Content 2" },
      { value: "tab-3", label: "Tab 3", content: "Content 3" },
    ],
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const mixinLight = {
  ...baseMixinLight,
  decorators: [
    (Story: PartialStoryFn) => (
      <TabsProvider className={themeLight}>
        <Story />
      </TabsProvider>
    ),
  ],
  args: {},
};

const mixinDark = {
  ...baseMixinDark,
  decorators: [
    (Story: PartialStoryFn) => (
      <TabsProvider className={themeDark}>
        <Story />
      </TabsProvider>
    ),
  ],
  args: {},
};

const mixin5050 = {
  ...baseMixin5050,
  decorators: [
    (Story: PartialStoryFn) => (
      <TabsProvider className={theme5050}>
        <Story />
      </TabsProvider>
    ),
  ],
  args: {},
};

export const Default: Story = {
  ...mixinLight,
};

export const DefaultWithDefaultTab: Story = {
  ...mixinLight,
  args: {
    defaultValue: "tab-2",
    renderOnlyActive: true,
  },
};

function CountingComponent(props: { label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>
        {props.label}: {count}
      </p>
    </div>
  );
}

export const DefaultWithDynamicContent: Story = {
  ...mixinLight,
  args: {
    defaultValue: "tab-1",
    renderOnlyActive: true,
    activationMode: "manual",
    tabs: [
      {
        value: "tab-1",
        label: "Tab 1",
        content: (api) => <CountingComponent label={api.value as string} />,
      },
      {
        value: "tab-2",
        label: "Tab 2",
        content: (api) => <CountingComponent label={api.value as string} />,
      },
      {
        value: "tab-3",
        label: "Tab 3",
        content: (api) => <CountingComponent label={api.value as string} />,
      },
    ],
  },
};

export const DefaultDark: Story = {
  ...mixinDark,
};

export const Default5050: Story = {
  ...mixin5050,
};
