import drawingTypes from "../actions/drawingTypes"

const {
  DRAW_CIRCLE,
  DRAW_RECTANGLE,
  DRAW_SQUARE
} = drawingTypes


/*
 * paintItems
 * reducers for the set of items
 */
export default function paintItems (state=[], action) {
  switch (action.type) {
    case DRAW_CIRCLE:
      return [
        ...state,
        {
          type: "circle",
          x: action.x,
          y: action.y,
          radius: action.radius,
          color: action.color
        }
      ]
    case DRAW_RECTANGLE:
      return [
        ...state,
        {
          type: "rectangle",
          x: action.x,
          y: action.y,
          length: action.length,
          width: action.width,
          color: action.color
        }
      ]
    case DRAW_SQUARE:
      return [
        ...state,
        {
          type: "square",
          x: action.x,
          y: action.y,
          length: action.length,
          color: action.color
        }
      ]
    default:
      return state
  }
}
