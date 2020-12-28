// rollup.config.js
import { nodeResolve } from "@rollup/plugin-node-resolve";
import del from "rollup-plugin-delete";

export default {
  input: "src/index.js",
  output: [
    {
      dir: "dist",
      format: "esm",
    },
  ],
  plugins: [del({ targets: "dist/*" }), nodeResolve()],
  preserveModules: true,
};
