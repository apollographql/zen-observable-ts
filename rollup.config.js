import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

const zenBabelPlugins = require("zen-observable/scripts/babel-plugins.js");
const babelPlugins = zenBabelPlugins
  .filter(name => !name.startsWith("@babel/plugin-transform-modules"))
  .map(name => {
    if (name.startsWith("@babel/plugin-transform-classes")) {
      return [name, { loose: true }];
    }
    return name;
  });

export default [
  {
    input: ["./src/module.js"],
    plugins: [
      nodeResolve(),
      babel({
        plugins: babelPlugins,
        babelHelpers: "inline",
      }),
    ],
    output: {
      file: "module.js",
      format: "esm",
    },
  },
];
