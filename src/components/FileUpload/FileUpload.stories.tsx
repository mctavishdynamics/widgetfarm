import type { Meta, StoryObj } from "@storybook/react-vite";

import { ButtonProvider } from "../Button/ButtonProvider.tsx";
import buttonStyles from "../Button/styles/kinda-retro.module.css";
import { FileUpload } from "./FileUpload";
import { FileUploadProvider } from "./FileUploadProvider";
import styles from "./styles/kinda-retro.module.css";

const meta = {
  title: "FileUpload",
  component: FileUpload,
  decorators: [
    (Story) => (
      <ButtonProvider className={buttonStyles.Button}>
        <FileUploadProvider className={styles.FileUpload}>
          <Story />
        </FileUploadProvider>
      </ButtonProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
