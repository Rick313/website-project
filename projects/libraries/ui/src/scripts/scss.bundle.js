const { relative } = require("path");
const { Bundler } = require("scss-bundle");
const { mkdir, writeFile } = require("fs/promises");

/** Bundles all SCSS files into a single file */
async function bundleScss() {
  const {
    found,
    bundledContent,
    imports,
  } = await new Bundler().bundle("./src/lib/theme.scss", [
    "./src/lib/**/*.scss",
  ]);
  if (imports) {
    const cwd = process.cwd();

    const filesNotFound = imports
      .filter((x) => !x.found)
      .map((x) => relative(cwd, x.filePath));

    if (filesNotFound.length) {
      console.error(`SCSS imports failed \n\n${filesNotFound.join("\n - ")}\n`);
      throw new Error("One or more SCSS imports failed");
    }
  }

  if (found) {
    const dist = "../../../dist/libraries/ui/";
    await mkdir(dist + "scss");
    await writeFile(dist + "scss/ui.theme.scss", bundledContent);
  }
}
bundleScss();
