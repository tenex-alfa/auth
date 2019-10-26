const fs = require("fs");
const yml = require("js-yaml");
const pathToTemplate = "./tx.yml";
const newPath = "./src/tx.json";

if (fs.existsSync(pathToTemplate)) {
    const str = fs.readFileSync(pathToTemplate, "utf-8");

    fs.writeFileSync(newPath, JSON.stringify(yml.safeLoad(str)))
}

console.log(fs.existsSync(pathToTemplate))