import test from "./Observable";

const cjs = require("../index.cjs");
describe("CommonJS modules", () => test(cjs.Observable));

import * as esm from "../module";
describe("ECMAScript modules", () => test(esm.Observable));
