var express = require('express');
var router = express.Router();

/* Solicitud de ingreso al anillo 
 * 
 * Parametros de entrada:
 * req.body.id -> Id de la sucursal que quiere ingresar.
 * 
 * Parametros de salida:
 * El anillo armado con la sucursal incluida.
 * 
*/
router.post('/ingresar', function(req, res, next) {
    
    console.log(req.body.id);
    
    res.render('index', { title: 'Bella la sopla vela' });

});



module.exports = router;