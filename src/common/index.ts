export function updateCSS(el: HTMLElement, style: WATER_MARK.IStyle = {}) {
  // @ts-ignore
  Object.entries(style).forEach(([key, value]) => el.style[key] = value)
}

export function createWatermark({ text, color, fontSize, rotate, gap }: WATER_MARK.ISettings): string {
  rotate = rotate * Math.PI / 180

  const canvas = document.createElement(`canvas`)
  const ctx = canvas.getContext(`2d`)

  // text
  ctx.font = `${fontSize}px`
  const measured = ctx.measureText(text)

  canvas.width = Math.cos(rotate) * measured.width
  canvas.height = Math.sin(rotate) * measured.width
  canvas.width += gap
  canvas.height += gap

  // clear before fill
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  // fill text
  ctx.translate(canvas.width / 2, canvas.height / 2)
  ctx.rotate(-rotate)
  ctx.fillStyle = color
  ctx.fillText(text, -measured.width / 2, measured.actualBoundingBoxAscent / 2)
  ctx.setTransform(1, 0, 0, 1, 0, 0)

  return canvas.toDataURL(`image/png`)
}
