import { globSync } from "glob";
import fs from "node:fs";
import path from "node:path";

const pkgPath = path.resolve("package.json");
const distThemes = path.resolve("dist/themes");

const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

function getExportPath(filePath) {
  const relative = path.relative("dist", filePath);
  const withoutExtension = relative.replace(/\.module\.css$/, "");

  const fragments = withoutExtension
    .split(path.sep)
    .map((x) => x.toLowerCase())
    .filter((fragment, i) => {
      if (fragment === "themes" && i !== 0) return false;
      return true;
    });

  return `./${fragments.join("/")}.module.css`;
}

function toImportPath(filePath) {
  return "./" + path.relative(".", filePath).replace(/\\/g, "/");
}

function walk(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  let results = [];

  for (const item of items) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) results = results.concat(walk(full));
    else if (item.name.endsWith(".module.css")) results.push(full);
  }

  return results;
}

const themeModules = globSync("dist/themes/**/*.module.css");

// ensure exports exists
pkg.exports = pkg.exports ?? {};

themeModules.forEach((file) => {
  const exportKey = getExportPath(file);
  const importPath = toImportPath(file);

  pkg.exports[exportKey] = {
    import: importPath,
  };
});

// write back updated package.json
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
console.log("✔ exports updated for theme CSS");
