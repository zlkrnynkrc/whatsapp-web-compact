const fs = require("fs");
const path = require("path");

const filesToCopy = ["manifest.json", "icon48.png", "icon128.png"];
const distDir = path.resolve(__dirname, "../dist");

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

filesToCopy.forEach((file) => {
  const srcPath = path.resolve(__dirname, "../", file);
  const destPath = path.resolve(distDir, file);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file} to dist/`);
  } else {
    console.error(`File ${file} not found!`);
  }
});
