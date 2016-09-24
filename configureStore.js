import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from "./reducers"

import thunkMiddleware from 'redux-thunk'
import paintMiddleware from "./middlewares/loggerMiddleware"
import crashReporter from "./middlewares/crashReporterMiddleware"

import { persistStore, autoRehydrate } from 'redux-persist'

export default function configureStore(preloadedState={}) {
  const middlewares = [
    paintMiddleware,
    thunkMiddleware,
    crashReporter
  ]

  let storeEnhancers = [
    applyMiddleware(
      ...middlewares
    ),
    autoRehydrate(),
    window.devToolsExtension && window.devToolsExtension()
  ]


  let store = createStore(rootReducer,
        compose(
        ...storeEnhancers
      )
  )

  let persistor = persistStore(store, {}, () => {
    console.log("Storage persistance!")
  })

  return {store, persistor}
}
