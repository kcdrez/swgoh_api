#!/usr/bin/env node
import { readdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Recreate __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const membersDir = path.join(__dirname, "members");

async function trimFiles() {
  try {
    const files = await readdir(membersDir);

    const jsonFiles = files.filter((f) => f.endsWith(".json"));

    for (const file of jsonFiles) {
      const fullPath = path.join(membersDir, file);

      const raw = await readFile(fullPath, "utf8");
      const json = JSON.parse(raw);

      // Keep only data and units
      const trimmed = {
        data: json.data,
        units: json.units,
      };

      // Overwrite the file
      await writeFile(fullPath, JSON.stringify(trimmed, null, 2));
      console.log(`Trimmed: ${file}`);
    }

    console.log("All files trimmed successfully!");
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
  }
}

trimFiles();
