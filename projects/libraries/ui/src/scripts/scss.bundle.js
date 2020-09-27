const { relative } = require("path");
const { Bundler } = require("scss-bundle");
const { mkdir, writeFile, stat, rmdir, unlink } = require("fs/promises");

/** Bundles all SCSS files into a single file */
async function bundleScss() {
  const { found, bundledContent, imports } = await new Bundler().bundle(
    "./src/lib/theme.scss",
    ["./src/lib/styles/**/*.scss"],
    ["./src/lib/directives", "./src/lib/styles"]
  );
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
    try {
      const t = await stat(dist + "scss");
      if (t.isDirectory()) {
        await unlink(dist + "scss/ui.theme.scss");
        await rmdir(dist + "scss", { recursive: true });
      }
    } catch (err) {}
    await mkdir(dist + "scss");
    await writeFile(dist + "scss/ui.theme.scss", bundledContent);
  }
}
bundleScss();
