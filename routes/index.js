var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sistemas de Informacion' });
});

router.get('/apartados', function(req, res, next) {
  res.render('apartados', { title: 'Apartados' });
});

router.get('/alumnos', function(req, res, next){
	res.render('alumnos', {title: 'Alumnos' });
});

/* Imprime un mensaje en la pagina inicial */
/*
define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});
 define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});*/

module.exports = router;
