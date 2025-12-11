import { readdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

async function convertJsonToJs() {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const folder = path.join(__dirname, "members");

  const files = (await readdir(folder)).filter((f) => f.endsWith(".json"));

  for (const file of files) {
    const fullPath = path.join(folder, file);
    const jsonContent = await readFile(fullPath, "utf8");
    const parsed = JSON.parse(jsonContent);

    // Write ES module
    const jsModule =
      "export default " + JSON.stringify(parsed, null, 2) + ";\n";

    const newFile = file.replace(".json", ".js");
    const newFullPath = path.join(folder, newFile);

    await writeFile(newFullPath, jsModule, "utf8");

    console.log(`Converted ${file} → ${newFile}`);
  }
}

convertJsonToJs().catch(console.error);
