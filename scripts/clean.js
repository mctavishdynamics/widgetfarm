import { rmSync } from "fs";

try {
  rmSync("dist", { recursive: true, force: true });
  console.log("🗑️ Cleaned dist/\n");
} catch {
  // Ignore errors if dist doesn't exist
}
