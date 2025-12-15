import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

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
    name: "Hello",
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
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
