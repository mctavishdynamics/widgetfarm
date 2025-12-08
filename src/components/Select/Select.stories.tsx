import type { Meta, StoryObj } from "@storybook/react-vite";
// import { expect, userEvent } from "storybook/test";

import { fn } from "storybook/test";
import { ButtonProvider } from "../Button/ButtonProvider.tsx";
import buttonStyles from "../Button/styles/kinda-retro.module.css";
import { Select } from "./Select";
import { SelectProvider } from "./SelectProvider";
import styles from "./styles/kinda-retro.module.css";

const meta = {
  title: "Select",
  component: Select,
  decorators: [
    (Story) => (
      <ButtonProvider className={buttonStyles.Button}>
        <SelectProvider className={styles.Select}>
          <Story />
        </SelectProvider>
      </ButtonProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  args: {
    items: [
      { label: "Option A", value: "a" },
      { label: "Option B", value: "b" },
      { label: "Option C", value: "c" },
      { label: "Option D", value: "d" },
    ],
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSelect: () => fn(),
  },
};

export const WithLabel: Story = {
  args: {
    onSelect: () => fn(),
    label: "Select Label",
  },
};
