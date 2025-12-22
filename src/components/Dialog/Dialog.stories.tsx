import type { Meta, StoryObj } from "@storybook/react-vite";

import { TbEye } from "react-icons/tb";
import { Button } from "../Button/Button.tsx";
import { ButtonProvider } from "../Button/ButtonProvider.tsx";
import buttonStyles from "../Button/styles/kinda-retro.module.css";
import { Dialog } from "./Dialog.tsx";
import { DialogProvider } from "./DialogProvider.tsx";
import styles from "./styles/kinda-retro.module.css";

const meta = {
  title: "Dialog",
  component: Dialog,
  decorators: [
    (Story) => (
      <ButtonProvider className={buttonStyles.Button}>
        <DialogProvider className={styles.Dialog}>
          <Story />
        </DialogProvider>
      </ButtonProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  args: {
    trigger: "Click Me",
    title: "Dialog Title",
    description: "Dialog Description",
    children: "Dialog Content",
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultOpen: true,
  },
};

export const TriggerRenderer: Story = {
  args: {
    triggerRenderer: (props) => (
      <Button {...props}>
        <TbEye />
        Custom Trigger Renderer
      </Button>
    ),
  },
};
