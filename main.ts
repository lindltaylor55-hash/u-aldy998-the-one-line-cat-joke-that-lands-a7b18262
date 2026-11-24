// The One-Line Cat Joke That Lands — entry program.
// Copies entry.txt (one original one-line cat joke) to the harness output dir.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const botDir = process.env.MAKEFUN_BOT_DIR
  ? resolve(process.env.MAKEFUN_BOT_DIR)
  : here;
const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "entry.txt"), join(outDir, "entry.txt"));
console.log(`wrote entry.txt (${statSync(join(outDir, "entry.txt")).size} bytes) to ${outDir}`);
