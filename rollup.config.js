import { promises as fs } from "fs";
import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

const zenBabelPlugins = require("zen-observable/scripts/babel-plugins.js");
const babelPlugins = zenBabelPlugins
  .filter(name => !name.startsWith("@babel/plugin-transform-modules"))
  .map(name => {
    if (
      name.startsWith("@babel/plugin-transform-classes") ||
      name.startsWith("@babel/plugin-transform-for-of")
    ) {
      // These plugins compile to less code (without loss of functionality) if
      // we enable "loose" mode.
      return [name, { loose: true }];
    }
    return name;
  });

export default [
  {
    input: ["./src/module.js"],
    output: {
      file: "module.js",
      format: "esm",
    },
    plugins: [
      nodeResolve(),
      babel({
        plugins: babelPlugins,
        babelHelpers: "inline",
      }),
      {
        name: "copy index.cjs to index.cjs.native.js",
        async writeBundle() {
          await fs.writeFile(
            "index.cjs.native.js",
            await fs.readFile("index.cjs"),
          );
        },
      },
    ],
  },
];
