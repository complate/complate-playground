/* eslint-env node */
"use strict";

let generateConfig = require("complate-jsx/bundling");

module.exports = generateConfig("./src/index.js", "./dist/complate.js", {
	extensions: [".jsx"],
	moduleName: "complate"
});
