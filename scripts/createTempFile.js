const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");

const buildNumber = 5;

const distPath = path.join(__dirname, "..", "dist");
const distServerPath = path.join(distPath, "server");
const distClientPath = path.join(distPath, "client");
const assetsPath = path.join(distClientPath, 'assets');

(async () => {
  await mkdirp(distPath);
  await mkdirp(distClientPath);
  fs.writeFileSync(
    path.join(distClientPath, "index.html"),
    `<html><body>Some static HTML [${buildNumber}]. <script src="/assets/someFile.js"></script></body></html>`
  );
  await mkdirp(assetsPath);
  fs.writeFileSync(
    path.join(assetsPath, "someFile.js"),
    `console.log("Yep [${buildNumber}]")`
  );

  await mkdirp(distServerPath);
  fs.writeFileSync(
    path.join(distServerPath, "custom-function.js"),
    `module.exports = (msg)=>{return \`hello \${String(msg)} [${buildNumber}].\`}`
  );
})();
