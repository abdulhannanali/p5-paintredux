import configureStore from "./configureStore"
import {circle, rectangle, square} from "./actions"
import p5 from "p5"
import reduxSketch from "./p5/sketch"

let store = configureStore()

var myp5 = new p5(reduxSketch(store))

console.log(store.getState())
