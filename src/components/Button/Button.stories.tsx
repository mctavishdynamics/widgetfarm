import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent } from "storybook/test";

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
