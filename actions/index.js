/*
 * Actions for painting
 */

 import drawingTypes from "./drawingTypes"

const {
  DRAW_SQUARE,
  DRAW_CIRCLE,
  DRAW_RECTANGLE,
  CLEAR_PAINT
} = drawingTypes

export function circle (x, y, radius, color="black") {
  return {
    type: DRAW_CIRCLE,
    x,
    y,
    radius,
    color
  }
}

export function rectangle (x, y, length, width, color="black") {
  return {
    type: DRAW_RECTANGLE,
    x,
    y,
    length,
    width
  }
}

export function square (x, y, length, color="black") {
  return {
    type: DRAW_SQUARE,
    x,
    y,
    length
  }
}

export function selectColor (color="#00FF00") {
  return {
    type: "SELECT_COLOR",
    color
  }
}

export function clearPaint () {
  return {
    type: CLEAR_PAINT
  }
}
