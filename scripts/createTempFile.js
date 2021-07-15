const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");


const distPath = path.join(__dirname, "..", "dist");
const distClientPath = path.join(__dirname, "..", "dist", "client");
const helpersPath = path.join(__dirname, "..", "dist", "server");

mkdirp(distPath).then(async () => {
  await mkdirp(distClientPath);
  fs.writeFile(
    path.join(distClientPath, "index.html"),
    `Some static HTML 333333   33!!!`,
    (err) => {
      if (err) throw err;
      console.log("Build time static files created successfully!");
    }
  );
  mkdirp(helpersPath).then(() => {
    fs.writeFile(
      path.join(helpersPath, "custom-function.js"),
      `module.exports = (msg)=>{return \`hello \${String(msg)} 3333 33!!! it works.\`}`,
      (err) => {
        if (err) throw err;
        console.log("Build time serverless function created successfully!");
      }
    );
  });
});
