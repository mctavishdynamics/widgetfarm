import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent } from "storybook/test";

import { TbEye } from "react-icons/tb";
import type { PartialStoryFn } from "storybook/internal/csf";
import { mixin5050 as baseMixin5050 } from "../../../storybook/mixin5050.ts";
import { mixinDark as baseMixinDark } from "../../../storybook/mixinDark.ts";
import { mixinLight as baseMixinLight } from "../../../storybook/mixinLight.ts";
import { Button } from "./Button";
import { ButtonProvider } from "./ButtonProvider";
import { theme as theme5050 } from "./styles/osmia-5050.css.ts";
import { theme as themeDark } from "./styles/osmia-dark.css.ts";
import { theme as themeLight } from "./styles/osmia-light.css.ts";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    disabled: false,
    isInvalid: false,
    isDirty: false,
    isTouched: false,
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const mixinLight = {
  ...baseMixinLight,
  decorators: [
    (Story: PartialStoryFn) => (
      <ButtonProvider className={themeLight}>
        <Story />
      </ButtonProvider>
    ),
  ],
  args: {},
};

const mixinDark = {
  ...baseMixinDark,
  decorators: [
    (Story: PartialStoryFn) => (
      <ButtonProvider className={themeDark}>
        <Story />
      </ButtonProvider>
    ),
  ],
  args: {},
};

const mixin5050 = {
  ...baseMixin5050,
  decorators: [
    (Story: PartialStoryFn) => (
      <ButtonProvider className={theme5050}>
        <Story />
      </ButtonProvider>
    ),
  ],
  args: {},
};

export const Default: Story = {
  ...mixinLight,
  args: {
    children: "Primary Button",
  },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const DefaultDark: Story = {
  ...mixinDark,
  args: {
    children: "Primary Button",
  },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const Default5050: Story = {
  ...mixin5050,
  args: {
    children: "Primary Button",
  },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const WithIcon: Story = {
  ...mixinLight,
  render: (args) => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Button {...args}>
        <TbEye />
        Primary Button
      </Button>
      <Button {...args}>
        <TbEye />
      </Button>
    </div>
  ),
  play: async ({ canvas, args }) => {
    const buttons = canvas.getAllByRole("button");
    await userEvent.click(buttons[0]);
    await userEvent.click(buttons[1]);
    await expect(args.onClick).toHaveBeenCalledTimes(2);
  },
};
