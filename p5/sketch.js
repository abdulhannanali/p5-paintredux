import {circle, rectangle, square, selectColor} from "../actions"

export default function reduxSketch (store) {
  return function (p) {
    var canvas;
    var color = store.getState().color

    p.setup = () => {
      canvas = p.createCanvas(640, 480)
      let colorPicker = document.getElementById("colorPicker")

      canvas.mouseMoved(function (mouseEvent) {
        event.preventDefault();

        let {
          clientX,
          clientY
        } = mouseEvent

        store.dispatch(circle(clientX, clientY, 10, color))
        console.log(store.getState())
      })


      colorPicker.onchange =  function (event) {
          store.dispatch(selectColor(event.target.value))
          console.log("Color changed to " + event.target.value)
      })

    }

    p.draw = () => {
      var paintItems = store.getState().paintItems

      paintItems.forEach(function (item, index, array) {
        if (item.color) {
          p.fill(item.color)
          p.stroke(item.color)
        }
        else {
          p.fill(0)
          p.stroke(0)
        }

        switch (item.type) {
          case "circle":
            p.ellipse(item.x, item.y, item.radius)
          default:
            break;
        }
      })
    }
  }
}
