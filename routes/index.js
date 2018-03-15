var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { titulo: 'Bienvenido', autor: 'Sergio Garcia' });
});

module.exports = router;
