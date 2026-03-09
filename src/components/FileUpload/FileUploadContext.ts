import { createContext } from "react";

export interface IFileUploadContext {
  className: string;
}

export const FileUploadContext = createContext<IFileUploadContext | undefined>(
  undefined,
);
