import type { Meta, StoryObj } from "@storybook/react-vite";

import { TbCheck, TbMinus } from "react-icons/tb";
import { Checkbox } from "./Checkbox";
import { CheckboxProvider } from "./CheckboxProvider";
import styles from "./styles/kinda-retro.module.css";

const meta = {
  title: "Checkbox",
  component: Checkbox,
  decorators: [
    (Story) => (
      <CheckboxProvider
        className={styles.Checkbox}
        checkedIcon={<TbCheck />}
        indeterminateIcon={<TbMinus />}
      >
        <Story />
      </CheckboxProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {
    ref: { table: { disable: true } },
    inputRef: { table: { disable: true } },
    labelRenderer: { table: { disable: true } },
    onCheckedChange: { table: { disable: true } },
    label: { control: "text" },
    checked: {
      control: "select",
      options: [true, false, "indeterminate"],
    },
    defaultChecked: {
      control: "select",
      options: [true, false, "indeterminate"],
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: "Checkbox Label",
  },
};

export const Indeterminate: Story = {
  args: {
    label: "Checkbox Label",
    defaultChecked: "indeterminate",
  },
};
