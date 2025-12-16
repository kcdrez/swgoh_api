import { readdir, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const folder = path.join(__dirname, "members");

async function generateIndex() {
  const files = (await readdir(folder))
    .filter((f) => f.endsWith(".js"))
    .filter((f) => f !== "index.js");

  const imports = files
    .map((file, i) => `import m${i} from "./${file}";`)
    .join("\n");

  const exports = `export default [${files
    .map((_, i) => `m${i}`)
    .join(", ")}];`;

  const content = `${imports}\n\n${exports}\n`;

  await writeFile(path.join(folder, "index.js"), content, "utf8");

  console.log(`Generated index.js with ${files.length} members`);
}

generateIndex().catch(console.error);
