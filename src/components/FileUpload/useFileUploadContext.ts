import { useContext } from "react";
import { FileUploadContext } from "./FileUploadContext";

export function useFileUploadContext() {
  const context = useContext(FileUploadContext);

  if (context === undefined) {
    throw new Error(
      "useFileUploadContext must be used within a FileUploadProvider",
    );
  }

  return context;
}
