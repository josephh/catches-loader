'strict mode'

var worker = require('./worker')

if (!process.argv[2]) {
  console.log(`Please supply an argument specifying the number of catch records to create.`)
  process.exit(0)
}
worker.loader.load(process.argv[2])
