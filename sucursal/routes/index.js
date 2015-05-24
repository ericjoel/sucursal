var express = require('express');


var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
    res.render('index', { title: 'Bella la sopla vela' });

});
router.get('/transporte', function(req, res, next) {
  
  /*  
   * Estructura JSON
   * Transporte = {
   *    "Recorrido": {
   *        "id" : "1",
   *        "origen": "1", // Id de la sucursal de envío
   *        "destino" : "2", //Id de la sucursal de recepción
   *        "paquetes": [
   *            {
   *                "id": "1",
   *                "origen" : "1",
   *                "destino": "2",
   *            },
   *            {
   *                "id": "2",
   *                "origen" : "2",
   *                "destino": "3",
   *            } 
   *        ]
   *    }
   * }
  req ->JSON que lleva todos los datos del transporte
  notificar al servidor central
  io.emit("notificarLLegadaTrasnporte") -> notificar a los clientes de la sucursal
  
  recorrrer la lista que esta llegando verificar si hay algun paquete para recibir
    si es que hay y se puede procesar (si la lista de espera no es mayor a 5) y se notifica cuando se haya terminado de procesar.
    si es que se rechaza se notifica al servidor central que se rechazo
  actualizar la lista de transporte, modificar nuevo recorrido y notificar al servidor.
  verificar la lista de envio
  agregar al transporte si el transporte esta lleno se notifica al servidor 
  notificar salida del transporte
  */
  res.render('index', { title: 'Bella la sopla velassss' });
});



module.exports = router;

/* http.listen(3000, function(){
  console.log('listening on *:3000');
}); */