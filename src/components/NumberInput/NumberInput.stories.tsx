import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { ButtonProvider } from "../Button/ButtonProvider.tsx";
import buttonStyles from "../Button/styles/kinda-retro.module.css";
import textInputStyles from "../TextInput/styles/kinda-retro.module.css";
import { TextInputProvider } from "../TextInput/TextInputProvider.tsx";
import { NumberInput } from "./NumberInput.tsx";
import { NumberInputProvider } from "./NumberInputProvider.tsx";
import styles from "./styles/kinda-retro.module.css";

const meta = {
  title: "NumberInput",
  component: NumberInput,
  decorators: [
    (Story) => (
      <TextInputProvider className={textInputStyles.TextInput}>
        <ButtonProvider className={buttonStyles.Button}>
          <NumberInputProvider className={styles.NumberInput}>
            <Story />
          </NumberInputProvider>
        </ButtonProvider>
      </TextInputProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  args: {
    disabled: false,
    onValueChange: fn(),
    name: "Hello",
  },
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Value: Story = {
  args: {
    value: 123,
  },
};

export const DefaultValue: Story = {
  args: {
    defaultValue: 123,
  },
};

export const MinAndMax: Story = {
  args: {
    min: 0,
    max: 5,
  },
};

export const WithLabel: Story = {
  args: {
    label: "NumberInput Label",
  },
};

export const WithError: Story = {
  args: {
    label: "NumberInput Label",
    error: "Problem",
  },
};
