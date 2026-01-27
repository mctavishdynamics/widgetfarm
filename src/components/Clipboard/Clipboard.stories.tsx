import type { Meta, StoryObj } from "@storybook/react-vite";

import { ButtonProvider } from "../Button/ButtonProvider.tsx";
import buttonStyles from "../Button/styles/kinda-retro.module.css";
import { Clipboard } from "./Clipboard.tsx";
import { ClipboardProvider } from "./ClipboardProvider.tsx";
import styles from "./styles/kinda-retro.module.css";

const meta = {
  title: "Clipboard",
  component: Clipboard,
  decorators: [
    (Story) => (
      <ButtonProvider className={buttonStyles.Button}>
        <ClipboardProvider className={styles.Clipboard}>
          <Story />
        </ClipboardProvider>
      </ButtonProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof Clipboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
