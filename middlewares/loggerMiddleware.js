
import drawingTypes from  "../actions/drawingTypes"

export default function paintItemLogger ({getState}) {
  return (next) => (action) => {
    if (drawingTypes[action.type]) {
      console.log("Going to draw a thing")
      console.log(`The color is ${action.color}`)
      console.log(`action:`)
      console.log(action)
      next(action)
      console.log("state after drawn")
      console.log(getState())
    }
  }
}
