import nodeResolve from "rollup-plugin-node-resolve";
// import { terser } from "rollup-plugin-terser";
import { babel } from '@rollup/plugin-babel';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  input: "./index.js",
  output: {
    file: "./app/xeokit-bim-viewer.es.js",
    format: "es",
    name: "bundle",
    sourcemap: true,
  },
  plugins: [
    sourcemaps(),
    nodeResolve(),
    // terser(),
    babel({
      inputSourceMap: false,
      babelrc: true,
      // babelHelpers: 'bundled',
      presets: [["@babel/env", { modules: false }]],
    }),
  ],
};
