function Surtido(productos){
  this.productos = productos;
  this.dibujarSurtido = function(produ){
    cuerpo.innerHTML = "";
    var str = "";
    if (produ == undefined){
      for (var i = 0; i < this.productos.lenght; i++) {
        str += "<div>";
        str += "<img src='" + this.productos[i].foto + "' alt = '";
        str += this.productos[i].nombre + "'>";
        str += "<p>" + this.productos[i].descripcion + "</p>";
        str += "<p><b>" + this.productos[i].precio + "€</b></p>";
        str += "</div>";
      }
      cuerpo.innerHTML = str;
    }else {
      for (var i = 0; i < produ.lenght; i++) {
        str += "<div>";
        str += "<img src='" + produ[i].foto + "' alt = '";
        str += produ[i].nombre + "'>";
        str += "<p>" + produ[i].descripcion + "</p>";
        str += "<p><b>" + produ[i].precio + "€</b></p>";
        str += "</div>";
    }
  }
  cuerpo.innerHTML = str;
}
}
