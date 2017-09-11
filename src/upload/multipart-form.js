'use strict'

var fs = require('fs')
var request = require('request');

function buildForm(data, file) {
  var formData = {
    data: data,
    image: fs.createReadStream(file),
  }
  return formData
}

var upload = function(data, file) {
  request.post({url:'http://localhost:8000/api/catches', formData: buildForm(data, file)},
    function optionalCallback(err, httpResponse, body) {
      if (err)  return console.error('upload failed:', err)
      console.log('Upload successful!  Server responded with:', body)
    }
  );
}

exports.upload = upload
