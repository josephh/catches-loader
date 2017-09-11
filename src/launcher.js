'strict mode'

var loader = require('./worker').loader

if (!process.argv[2]) {
  console.log(`Please supply an argument specifying the number of catch records to create.`)
  process.exit(0)
}
loader.load(process.argv[2])
