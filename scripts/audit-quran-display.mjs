import fs from "node:fs";
import path from "node:path";

const filesToAudit = [
  "data/topical-duas.ts",
  "data/prophetic-quran-duas.ts",
  "data/rabbana-duas.ts",
  "data/last-ten-nights.ts",
];

const annotationRangePattern = /[\u06D6-\u06ED]/u;
const unsupportedDisplayPattern = /[\u06DF\u06E0\u06E1\u06E2\u06E3\u06E5\u06E6\u06ED]/u;

let totalAnnotatedLines = 0;
let totalUnsupportedLines = 0;

for (const relativeFile of filesToAudit) {
  const absoluteFile = path.resolve(relativeFile);
  const content = fs.readFileSync(absoluteFile, "utf8");
  const lines = content.split("\n");

  const annotatedLines = [];
  const unsupportedLines = [];

  lines.forEach((line, index) => {
    if (annotationRangePattern.test(line)) {
      annotatedLines.push(index + 1);
    }

    if (unsupportedDisplayPattern.test(line)) {
      unsupportedLines.push(index + 1);
    }
  });

  totalAnnotatedLines += annotatedLines.length;
  totalUnsupportedLines += unsupportedLines.length;

  console.log(`\n${relativeFile}`);
  console.log(`  annotation-range lines: ${annotatedLines.length}`);
  if (annotatedLines.length) {
    console.log(`  lines: ${annotatedLines.join(", ")}`);
  }
  console.log(`  display-unsafe lines: ${unsupportedLines.length}`);
  if (unsupportedLines.length) {
    console.log(`  lines: ${unsupportedLines.join(", ")}`);
  }
}

console.log("\nSummary");
console.log(`  total annotation-range lines: ${totalAnnotatedLines}`);
console.log(`  total display-unsafe lines: ${totalUnsupportedLines}`);
