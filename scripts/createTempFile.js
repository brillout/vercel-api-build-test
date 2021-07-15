const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");

const helpersPath = path.join(__dirname, "..", "api_helpers");

mkdirp(helpersPath).then(() => {
  fs.writeFile(
    path.join(helpersPath, "custom-function.js"),
    `module.exports = (msg)=>{return \`hello \${String(msg)}\`}`,
    (err) => {
      if (err) throw err;
      console.log("Build time file created successfully!");
    }
  );
});
