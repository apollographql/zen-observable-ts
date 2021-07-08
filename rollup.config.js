import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";

export default [
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
