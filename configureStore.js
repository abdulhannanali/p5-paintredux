import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from "./reducers"
import thunkMiddleware from 'redux-thunk'
import paintMiddleware from "./middlewares/loggerMiddleware"
import { persistStore, autoRehydrate } from 'redux-persist'

export default function configureStore(preloadedState={}) {
  const middlewares = [
    paintMiddleware,
    thunkMiddleware
  ]

  console.log(...middlewares)


  // let store = compose(
  //   applyMiddleware(
  //     ...middlewares
  //   ),
  //   autoRehydrate()
  // )(createStore)(rootReducer)

  let store = createStore(rootReducer, undefined, autoRehydrate(), applyMiddleware(...middlewares))

  let persistor = persistStore(store, {}, () => {
    console.log("Storage persistance!")
  })

  return {store, persistor}
}
