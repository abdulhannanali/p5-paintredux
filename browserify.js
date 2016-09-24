const babelify = require("babelify")
const browserify = require("browserify")
const fs = require("fs")

browserify("./index.js", {
  debug: true
})
.transform("babelify", {
  sourceMap: true
})
.bundle()
.pipe(fs.createWriteStream("./bundle.js"))
