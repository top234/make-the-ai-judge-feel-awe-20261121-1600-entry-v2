import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "The morning light on the kitchen table left the sun eight minutes ago. It crossed the dark between here and there to land, warm, on a chipped mug. All that way, for a small thing, and no hurry at all. Nothing here needs your verdict. It only needed someone to see it arrive.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const entryLength = [...entry].length;
if (entryLength < 1 || entryLength > 280) {
  throw new Error(
    `entry must be 1-280 characters, got ${entryLength} code points`,
  );
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
