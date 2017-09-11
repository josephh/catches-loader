'use strict'

var random = require('../data').random
var newCatch = require('../json').template
var multipartForm = require('../upload').multipartForm

function buildRandomValues() {
  var newRandom = {
    species: random.randomSpecies(),
    angler: random.randomAngler(),
    location: random.randomLocation(),
    location2: random.randomLocation(),
    date: random.randomDate()
  }
  return newRandom
}

function createJsonPayload(index, data) {
  return JSON.stringify(newCatch, (key, value) => {
    if(key === 'userId') value = index + 1
    if(key === 'species') value = data.species
    if(key == 'tags') {
      value = [
        {
          "type": "angler", "value": data.angler
        },
        {
          "type": "location", "value": data.location
        },
        {
          "type": "location", "value": data.location2
        }
      ]
    }
    if(key === 'date') value = data.date.toString()
    return value
  })
}

function issueRequest(payload, file) {
  multipartForm.upload(payload, file)
}

module.exports = {
  load: (n) =>  {
    for(var i = 0; i < n; i++) {
      var file = random.randomImg(),
        payload = createJsonPayload(i, buildRandomValues())
      issueRequest(payload, file);
    }
  }
}
