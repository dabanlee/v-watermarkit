import { updateCSS, createWatermark } from './common'

let settings: WATER_MARK.ISettings = {
  text: ``,
  color: `#999`,
  fontSize: 12,
  rotate: 15,
  gap: 50,
  opacity: .1,
  zIndex: 9999,
}

const cssStyle: WATER_MARK.IStyle = {
  position: `fixed`,
  top: 0,
  left: 0,
  width: `100vw`,
  height: `100vh`,
  pointerEvents: `none`,
  opacity: settings.opacity,
  zIndex: settings.zIndex,
}

export function watermarkit(el: HTMLElement, { value }: { value: any }) {
  if (typeof value === `object`) {
    settings = Object.assign({}, settings, value)
    cssStyle.opacity = value.opacity
    cssStyle.zIndex = value.zIndex
  } else {
    settings.text = value
  }

  cssStyle.backgroundImage = `url(${createWatermark(settings)})`
  updateCSS(el, cssStyle)
}
