import configureStore from "./configureStore"
import {circle, rectangle, square, clearPaint} from "./actions"
import p5 from "p5"
import reduxSketch from "./p5/sketch"

let {
  store,
  persistor
} = configureStore()


let purgeStoreBtn = document.getElementById("purgeStore")
let emptyStoreBtn = document.getElementById("emptyStore")

emptyStoreBtn.addEventListener("click", (event) => {
  event.preventDefault()
  console.log(clearPaint())
  console.log("clear")
  store.dispatch(clearPaint())
})

purgeStoreBtn.addEventListener("click", (event) => {
  event.preventDefault();
  persistor.purge()
  console.log("Purged!")
})

var myp5 = new p5(reduxSketch(store))
