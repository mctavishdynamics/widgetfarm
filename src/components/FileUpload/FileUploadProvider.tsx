import { type PropsWithChildren } from "react";
import {
  FileUploadContext,
  type IFileUploadContext,
} from "./FileUploadContext";

export interface FileUploadProviderProps
  extends IFileUploadContext, PropsWithChildren {}

export function FileUploadProvider({
  children,
  className,
}: FileUploadProviderProps) {
  return (
    <FileUploadContext.Provider value={{ className }}>
      {children}
    </FileUploadContext.Provider>
  );
}
