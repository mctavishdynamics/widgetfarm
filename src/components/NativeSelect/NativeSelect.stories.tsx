import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { NativeSelect } from "./NativeSelect";
import { NativeSelectProvider } from "./NativeSelectProvider";
import styles from "./styles/kinda-retro.module.css";

const meta = {
  title: "NativeSelect",
  component: NativeSelect,
  decorators: [
    (Story) => (
      <NativeSelectProvider className={styles.NativeSelect}>
        <Story />
      </NativeSelectProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  args: {
    children: (
      <>
        <option value="a">Option A</option>
        <option value="b">Option B</option>
        <option value="c">Option C</option>
      </>
    ),
  },
} satisfies Meta<typeof NativeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSelect: () => fn(),
  },
};
