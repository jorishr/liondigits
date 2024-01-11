import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";

console.log(
  "\n\x1b[36m%s\x1b[0m",
  "Starting the .html replacement process...\n"
);
const distFolderPath = "dist";
const htmlFiles = readdirSync(distFolderPath).filter((file) =>
  file.endsWith(".html")
);

/* 
  This regular expression targets href attributes with .html at the end, see comment at bottom
*/
const regex = /href=["'](\/?[a-zA-Z0-9_-]+)\.html["']/g;

htmlFiles.forEach((htmlFile) => {
  console.log("\n\x1b[33m%s\x1b[0m", `Processing file: ${htmlFile}\n`);

  const filePath = join(distFolderPath, htmlFile);
  const fileContent = readFileSync(filePath, "utf-8");

  const updatedContent = fileContent.replace(regex, (match, group1) => {
    console.log("\x1b[33m%s\x1b[0m", `Found: ${match}`);
    console.log(`Replacing with: href="${group1}"`);

    return `href="${group1}"`; //ensure we get the quotes around the group value
  });

  writeFileSync(filePath, updatedContent, "utf-8");
});

console.log("\n\x1b[32m%s\x1b[0m", "Replacement process completed.\n");

/* 
  const regex = /href=["'](\/?[a-zA-Z0-9_-]+)\.html["']/g;
  - match the href attribute, value starting with " or '
  - the () stores the matching content as a group, and is available as group1
  - continue the matching with .html and the string value should end in " or '
*/
