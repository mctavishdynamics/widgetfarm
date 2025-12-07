import { kebabCase } from "change-case";
import Table from "cli-table3";
import { copyFileSync, globSync, mkdirSync } from "fs";
import { basename, join, sep } from "path";

const table = new Table({
  head: ["Source", "Destination"],
});

const cssModuleFiles = globSync("src/components/**/*.module.css");
cssModuleFiles.forEach((file) => {
  // Extract component name from path: src/components/Button/styles/file.css -> button
  const parts = file.split(sep);
  const componentIndex = parts.indexOf("components") + 1;
  const componentName = kebabCase(parts[componentIndex]);
  const fileName = basename(file);

  const destDir = join("dist", "styles", componentName);
  mkdirSync(destDir, { recursive: true });

  const destPath = join(destDir, fileName);
  copyFileSync(file, destPath);

  table.push([file, destPath]);
});

console.log("\n" + table.toString());
console.log(`\n✅ Copied ${cssModuleFiles.length} CSS module file(s)\n`);
