import nodeResolve from "@rollup/plugin-node-resolve";

export default {
  input: "./dist/tests/index.js",
  output: {
    file: "./dist/tests/bundle.cjs",
    format: "cjs",
  },
  plugins: [
    nodeResolve(),
  ],
};
