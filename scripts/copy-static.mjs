// Copies the built landing page into the api-server bundle directory so a
// single Node service can serve both the static front-end and the /api routes.
// Run after both `filo-diretto-landing` and `api-server` have been built.
import { cp, rm, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(
  repoRoot,
  "artifacts/filo-diretto-landing/dist/public",
);
const dest = path.join(repoRoot, "artifacts/api-server/dist/public");

try {
  await access(source);
} catch {
  console.error(
    `[copy-static] Landing build not found at ${source}.\n` +
      "Build the landing first: pnpm --filter @workspace/filo-diretto-landing run build",
  );
  process.exit(1);
}

await rm(dest, { recursive: true, force: true });
await cp(source, dest, { recursive: true });
console.log(`[copy-static] Copied landing build -> ${dest}`);
