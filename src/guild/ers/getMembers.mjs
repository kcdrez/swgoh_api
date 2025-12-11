#!/usr/bin/env node
import { readFile, writeFile } from "fs/promises";

async function main() {
  const [, , inputPath, outputPath] = process.argv;

  if (!inputPath || !outputPath) {
    console.error(
      "Usage: extract-guild-members <guildData.json> <output.json>"
    );
    process.exit(1);
  }

  try {
    // Load input JSON file
    const raw = await readFile(inputPath, "utf8");
    const json = JSON.parse(raw);

    if (!json.data || !Array.isArray(json.data.members)) {
      throw new Error("Invalid guildData.json: missing data.members");
    }

    // Extract only what you want
    let result = json.data.members.map((m) => ({
      ally_code: m.ally_code,
      player_name: m.player_name,
    }));

    // Sort alphabetically by player_name
    result = result.sort((a, b) => a.player_name.localeCompare(b.player_name));

    // Write output JSON
    await writeFile(outputPath, JSON.stringify(result, null, 2));

    console.log(
      `Extracted and sorted ${result.length} members → ${outputPath}`
    );
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
  }
}

main();
