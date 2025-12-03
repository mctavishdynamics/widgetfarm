import { globSync } from "glob";
import { mkdirp } from "mkdirp";
import fs from "node:fs";
import path from "node:path";

const pkgPath = path.resolve("package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

const themeModules = globSync("src/components/**/themes/*.module.css");

themeModules.forEach((file) => {
  const relative = path.relative("src/components", file);
  const relativeDestination = relative
    .split(path.sep)
    .map((fragment, i) => (i === 0 ? fragment.toLowerCase() : fragment))
    .join("/");

  pkg.exports = pkg.exports ?? {};

  pkg.exports[[".", relativeDestination].join("/")] = {
    import: [".", "dist", relativeDestination].join("/"),
  };

  mkdirp.sync(path.dirname(path.resolve("dist", relativeDestination)));
  fs.copyFileSync(file, path.resolve("dist", relativeDestination));
});

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
