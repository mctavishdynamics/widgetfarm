import type { Meta, StoryObj } from "@storybook/react-vite";

import { ButtonProvider } from "../Button/ButtonProvider.tsx";
import buttonStyles from "../Button/styles/kinda-retro.module.css";
import { Drawer } from "./Drawer.tsx";
import { DrawerProvider } from "./DrawerProvider.tsx";
import styles from "./styles/kinda-retro.module.css";

const meta = {
  title: "Drawer",
  component: Drawer,
  decorators: [
    (Story) => (
      <ButtonProvider className={buttonStyles.Button}>
        <DrawerProvider className={styles.Drawer}>
          <Story />
        </DrawerProvider>
      </ButtonProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  args: {
    trigger: "Click Me",
    title: "Drawer Title",
    description: "Drawer Description",
    children: "Drawer Content",
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {
  args: {
    defaultOpen: true,
  },
};

export const Left: Story = {
  args: {
    defaultOpen: true,
    position: "left",
  },
};

export const Top: Story = {
  args: {
    defaultOpen: true,
    position: "top",
  },
};

export const Bottom: Story = {
  args: {
    defaultOpen: true,
    position: "bottom",
  },
};
