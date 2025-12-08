import type { LabelType } from "./LabelType";

export type LabelRendererType = (args: { label?: LabelType }) => LabelType;
