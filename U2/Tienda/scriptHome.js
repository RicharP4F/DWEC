var p = new Surtido(productos);
//var miCompra =[productos[0], productos[3]];
p.dibujarSurtido(miCompra);
function recarga(){

}
function verPorPrecioMas(p){
  p.ordenPrecioMas();
  p.dibujarSurtido();
}
