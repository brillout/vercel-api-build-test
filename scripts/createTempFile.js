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

const distPath = path.join(__dirname, "..", "dist");
const distClientPath = path.join(__dirname, "..", "dist", "client");

mkdirp(distPath).then(async () => {
  await mkdirp(distClientPath);
  fs.writeFile(
    path.join(distClientPath, "index.html"),
    `Some static HTML 2!!!!`,
    (err) => {
      if (err) throw err;
      console.log("Build time static files created successfully!");
    }
  );
});
