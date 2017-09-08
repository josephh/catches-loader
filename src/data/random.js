'use strict'

var fs = require('fs')

const species = [
  'carp', 'bream', 'trout', 'grayling', 'tench', 'pike', 'roach', 'perch', 'salmon', 'rudd'
]

const anglers = [
  'brad', 'dickie', 'janet', 'tim', 'meatloaf', 'crystal', 'sid', 'derek', 'desmond', 'Bailey'
]

const locations = [
  'hammersmith', 'thames', 'penton_hook', 'marina', 'mill lane', 'st-anne\'s_lake', 'colne', 'broadwater', 'river_avon', 'britford', 'itchen', 'bypass', 'theale', 'sheffield bottom', 'loddon', 'old-river', 'dorney', 'tithe_barn'
]

// these exported functions return a function - we don't want immediate invocation
var randomSelection = (arr) => {
  return () => arr[Math.floor(Math.random() * arr.length)]
}

var randomDate = (start, end) => {
  return () => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

var randomImg = () => {
  let fileName
  console.log('what is cwd? ' + process.cwd.toString)
  fs.readdir(process.cwd  + '/img', (err, files) => {
    if (err) {
      console.log(`Errors fetching files from img. Details ${err}` )
      return
    }
    console.log(randomSelection(files))
  })
}

// exports is shorthand for module.exports
exports.randomSpecies = randomSelection(species)
exports.randomAngler = randomSelection(anglers)
exports.randomLocation = randomSelection(locations)
exports.randomDate = randomDate(new Date(2012, 0, 1), new Date())
exports.randomImg = randomImg
