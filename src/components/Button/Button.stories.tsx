import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent } from "storybook/test";

import { TbEye } from "react-icons/tb";
import { Button } from "./Button";
import { ButtonProvider } from "./ButtonProvider";
import styles from "./styles/kinda-retro.module.css";

const meta = {
  title: "Button",
  component: Button,
  decorators: [
    (Story) => (
      <ButtonProvider className={styles.Button}>
        <Story />
      </ButtonProvider>
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
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
