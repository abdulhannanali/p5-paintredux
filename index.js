import configureStore from "./configureStore"
import {circle, rectangle, square} from "./actions"
import p5 from "p5"
import reduxSketch from "./p5/sketch"

let {
  store,
  persistor
} = configureStore()


var purgeStoreBtn = document.getElementById("purgeStore")
purgeStoreBtn.addEventListener("click", (event) => {
  event.preventDefault();
  persistor.purge()
  console.log("Purged!")
})

var myp5 = new p5(reduxSketch(store))
