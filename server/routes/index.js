var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //Render Invoca al Templete Engine (HBS)
  //Se le proporcionan 2 argumentos
  //res.render(<vista>, <view-model>)
  //res.render(plantilla, datos)
  res.render('index', { 
    title: 'ALVARO CARDENAS ',
    welcomeMessage: 'Bienvenidos a mi sitio personal'
  });
});

module.exports = router;
