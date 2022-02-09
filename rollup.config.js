import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2'

const { name } = require('./package.json')

const plugins = [
  typescript({
    experimentalDecorators: true,
    module: `es2015`,
  }),
  css({
    output: `${name}.css`,
  }),
]

const external = ['vue']

export default [{
  input: `src/index.ts`,
  output: [{
    // for TypeScript build
    format: `esm`,
    file: `dist/${name}.es.js`,
    exports: `named`,
  }, {
    // for Broswer build
    name: `Component`,
    format: `umd`,
    file: `dist/${name}.js`,
    exports: `named`,
    globals: {
      vue: `Vue`,
    },
  }],
  plugins: [
    ...plugins,
    vue({
      css: false,
    }),
  ],
  external,
}]
