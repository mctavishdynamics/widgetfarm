import type { Meta, StoryObj } from "@storybook/react-vite";

import { ButtonProvider } from "../Button/ButtonProvider";
import buttonStyles from "../Button/styles/kinda-retro.module.css";
import textInputStyles from "../TextInput/styles/kinda-retro.module.css";
import { TextInputProvider } from "../TextInput/TextInputProvider";
import { DatePicker } from "./DatePicker";
import { DatePickerProvider } from "./DatePickerProvider";
import styles from "./styles/kinda-retro.module.css";

const meta = {
  title: "DatePicker",
  component: DatePicker,
  decorators: [
    (Story) => (
      <ButtonProvider className={buttonStyles.Button}>
        <TextInputProvider className={textInputStyles.TextInput}>
          <DatePickerProvider className={styles.DatePicker}>
            <Story />
          </DatePickerProvider>
        </TextInputProvider>
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
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // play: async ({ canvas, args }) => {
  //   const button = canvas.getByRole("button");
  //   await userEvent.click(button);
  //   await expect(args.onClick).toHaveBeenCalled();
  // },
};

export const WithLabel: Story = {
  args: {
    label: "DatePicker Label",
  },
};

export const WithError: Story = {
  args: {
    label: "DatePicker Label",
    error: "Problem",
  },
};
