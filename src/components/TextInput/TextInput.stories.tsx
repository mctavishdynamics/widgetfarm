import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent } from "storybook/test";

import styles from "./styles/kinda-retro.module.css";
import { TextInput } from "./TextInput";
import { TextInputProvider } from "./TextInputProvider";

const meta = {
  title: "TextInput",
  component: TextInput,
  decorators: [
    (Story) => (
      <TextInputProvider className={styles.TextInput}>
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
    name: "Hello"
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Default",
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const WithLabel: Story = {
  args: {
    label: "TextInput Label",
  },
};

export const WithError: Story = {
  args: {
    label: "TextInput Label",
    error: "Problem",
  },
};
