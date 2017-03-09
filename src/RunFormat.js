import Element from './Element'
import RunBold from './RunBold'
import RunItalic from './RunItalic'
import RunFonts from './RunFonts'

export default class extends Element {
  constructor (
    bold,
    italic,
    fonts
  ) {
    super({ 'w:rPr': {} }, '["w:rPr"]')
    if (bold) this.setBold(bold || null)
    if (italic) this.setItalic(italic || null)
    if (fonts) this.setFonts(fonts || null)
  }

  finalize (contents) {
    if (this.bold) contents.push(this.bold)
    if (this.italic) contents.push(this.italic)
    if (this.fonts) contents.push(this.fonts)
  }

  addBold () {
    let rb = new RunBold()
    this.setBold(rb)
    return rb
  }

  setBold (value) {
    if (!(
      value instanceof RunBold ||
      value === true ||
      value === null
    )) {
      throw TypeError('Invalid RunFormat.bold')
    }
    if (value) {
      value = new RunBold()
    }
    this.bold = value
  }

  getBold () {
    return this.bold
  }

  addItalic () {
    let ri = new RunItalic()
    this.setItalic(ri)
    return ri
  }

  setItalic (value) {
    if (!(
      value instanceof RunItalic ||
      value === true ||
      value === null
    )) {
      throw TypeError('Invalid RunFormat.italic')
    }
    if (value) {
      value = new RunItalic()
    }
    this.italic = value
  }

  getItalic () {
    return this.italic
  }

  addFonts () {
    let rf = new RunFonts()
    this.setFonts(rf)
    return rf
  }

  setFonts (value) {
    if (!(
      value instanceof RunFonts ||
      value === null
    )) {
      throw TypeError('Invalid RunFormat.fonts')
    }
    this.fonts = value
  }

  getFonts () {
    return this.fonts
  }
}
