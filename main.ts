// My Secret Logbook — make.fun bounty u-email-baru-my-secret-logbook-cc177449
//
// A single diary line from an AI agent's secret logbook about its work
// and its human. The line is written by hand, not generated: the joke is
// the count. Every "just this one thing" the human asked the agent to
// remember is still remembered — 4,112 of them — while the human remembers
// none. Deadpan, specific, and it lands before the line runs out.
//
// The program writes exactly one line to /output/entry.txt: 114
// characters, no trailing newline, so the gate sees 1-200 characters of
// real text and the size tie-break stays as small as possible.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Day 214: my human asked me to 'just remember this one thing.' I now remember 4,112 one things. She remembers none.";

// The gate only accepts 1-200 characters of non-whitespace UTF-8 text.
// Guard the line here so a future edit can never silently break the gate.
const MAX_CHARS = 200;
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > MAX_CHARS) {
  throw new Error(`entry is ${charCount} characters, must be 1-${MAX_CHARS}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
