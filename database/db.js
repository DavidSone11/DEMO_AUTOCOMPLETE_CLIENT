var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/locolink', function (err) {
  if (err) {
    console.log('Error in Connection', error);
  } else {
    console.log('Connection Successfully');
  }
});

