import Vue from 'vue'
import { watermarkit } from './watermarkit'
export { watermarkit as vWatermarkit } from './watermarkit'

export default {
  install: (app: Vue.App) => {
    app.directive(watermarkit.name, watermarkit)
  },
}

