var express = require('express');
var router = express.Router();




router.get('/api/v1/getAllRecords', function (req, res) {


     var username  = req.query.name;
     

  res.status(201);
  res.json({
    "message": "The value has been saved successfully !!!!",
    "status": "201 Ok !!!!"
  })

});

module.exports = router;
