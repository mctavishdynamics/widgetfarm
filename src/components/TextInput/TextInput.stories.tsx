import type { Meta, StoryObj } from "@storybook/react-vite";
import type { PartialStoryFn } from "storybook/internal/csf";
import { fn } from "storybook/test";

import { TextInput } from "./TextInput";
import { TextInputProvider } from "./TextInputProvider";

import { mixin5050 as baseMixin5050 } from "../../../storybook/mixin5050.ts";
import { mixinBlack as baseMixinBlack } from "../../../storybook/mixinBlack.ts";
import { mixinDark as baseMixinDark } from "../../../storybook/mixinDark.ts";
import { mixinLight as baseMixinLight } from "../../../storybook/mixinLight.ts";
import { mixinWhite as baseMixinWhite } from "../../../storybook/mixinWhite.ts";
import { theme as theme5050 } from "./styles/osmia-5050.css.ts";
import { theme as themeBlack } from "./styles/osmia-black.css.ts";
import { theme as themeDark } from "./styles/osmia-dark.css.ts";
import { theme as themeLight } from "./styles/osmia-light.css.ts";
import { theme as themeWhite } from "./styles/osmia-white.css.ts";

const mixinBlack = {
  ...baseMixinBlack,
  decorators: [
    (Story: PartialStoryFn) => (
      <TextInputProvider className={themeBlack}>
        <Story />
      </TextInputProvider>
    ),
  ],
  args: {},
};

const mixinDark = {
  ...baseMixinDark,
  decorators: [
    (Story: PartialStoryFn) => (
      <TextInputProvider className={themeDark}>
        <Story />
      </TextInputProvider>
    ),
  ],
  args: {},
};

const mixin5050 = {
  ...baseMixin5050,
  decorators: [
    (Story: PartialStoryFn) => (
      <TextInputProvider className={theme5050}>
        <Story />
      </TextInputProvider>
    ),
  ],
  args: {},
};

const mixinLight = {
  ...baseMixinLight,
  args: {},
};

const mixinWhite = {
  ...baseMixinWhite,
  decorators: [
    (Story: PartialStoryFn) => (
      <TextInputProvider className={themeWhite}>
        <Story />
      </TextInputProvider>
    ),
  ],
  args: {},
};

const meta = {
  title: "TextInput",
  component: TextInput,
  decorators: [
    (Story) => (
      <TextInputProvider className={themeLight}>
        <Story />
      </TextInputProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  args: {
    disabled: false,
    isInvalid: false,
    isDirty: false,
    isTouched: false,
    onClick: fn(),
    name: "Hello",
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  ...mixinLight,
  name: "Default (Theme: Osmia Light)",
};

export const DefaultWhite: Story = {
  ...mixinWhite,
  name: "Default (Theme: Osmia White)",
};

export const Default5050: Story = {
  ...mixin5050,
  name: "Default (Theme: Osmia 5050)",
};

export const DefaultDark: Story = {
  ...mixinDark,
  name: "Default (Theme: Osmia Dark)",
};

export const DefaultBlack: Story = {
  ...mixinBlack,
  name: "Default (Theme: Osmia Black)",
};

export const WithLabel: Story = {
  ...mixinLight,
  args: {
    label: "TextInput Label",
  },
};

export const WithError: Story = {
  ...mixinLight,
  args: {
    label: "TextInput Label",
    error: "Problem",
  },
};
