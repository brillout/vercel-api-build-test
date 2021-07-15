const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");

const helpersPath = path.join(__dirname, "..", "api_helpers");

mkdirp(helpersPath).then(() => {
  fs.writeFile(
    path.join(helpersPath, "custom-function.js"),
    `module.exports = (msg)=>{return \`hello \${String(msg)} !!! it works.\`}`,
    (err) => {
      if (err) throw err;
      console.log("Build time serverless function created successfully!");
    }
  );
});

const distPath = path.join(__dirname, "..", "public");

mkdirp(distPath).then(() => {
  fs.writeFile(
    path.join(distPath, "index.html"),
    `Some static HTML`,
    (err) => {
      if (err) throw err;
      console.log("Build time static files created successfully!");
    }
  );
});
