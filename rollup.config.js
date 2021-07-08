import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: ["./src/index.js"],
    plugins: [
      nodeResolve(),
      typescript(),
      commonjs(),
    ],
    output: {
      file: "index.js",
      format: "cjs",
      exports: "named",
    },
  },
  {
    input: ["./src/module.js"],
    plugins: [
      nodeResolve(),
      typescript(),
    ],
    output: {
      file: "module.js",
      format: "es",
    },
  },
];
