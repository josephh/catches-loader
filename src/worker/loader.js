'use strict'

var random = require('../data').random
var template = require('../json').template
var replacer = require('../json').replacer

function buildRandomValues() {
  var newRandom = {
    species: random.randomSpecies(),
    angler: random.randomAngler(),
    location: random.randomLocation(),
    date: random.randomDate()
  }
  // random.randomImg(function (err, data){
  //   if(err) console.log("Error fetching random image file name")
  //   newRandom.imgFile = data
  // })
  random.randomImg()
  return newRandom
}

function createJsonPayload(data) {
  return JSON.stringify(template, replacer)
}

module.exports = {
  load: (n) =>  {
    for(var i = 0; i < n; i++) {
      var payload = createJsonPayload(buildRandomValues())
      console.log('json? ' + payload)
      // issueRequest(payload);
    }
  }
}
