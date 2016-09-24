/*
 * crashReportMiddleware.js
 * A simple parent crash reporter for catching any type of errors
 */


const crashReporter = store => next => action => {
  try {
    next(action)
  }
  catch (error) {
    if (error) {
      console.error("Error occured!")
      console.warn("You caught this error thanks to this crash reporter middleware")
      console.error(error)
    }
  }
}


export default crashReporter
