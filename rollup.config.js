import nodeResolve from 'rollup-plugin-node-resolve';
import {terser} from "rollup-plugin-terser";

export default {
    input: './index.js',
    output: {
        file: './app/xeokit-bim-viewer.es.js',
        format: 'es',
        name: 'bundle',
        sourcemap: 'inline',
    },
    plugins: [
        nodeResolve(),
         terser()
    ]
}