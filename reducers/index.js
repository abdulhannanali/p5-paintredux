/*
 *
 */
import {combineReducers} from 'redux'
import paintItems from "./paintItems"
import selectedColor from "./selectedColor"

const rootReducer = combineReducers({
  paintItems,
  selectedColor
})


export default rootReducer
