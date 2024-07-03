const dolar = 1405;     
const real = 106.35;   
const euro = 990.65;  
function convertirAPesos(monto, moneda) {
  if (moneda === "dolar") {
    return monto * dolar;
  } 
  else if (moneda === "real") {
     return monto * real;
  } 
  else if (moneda === "euro") {
        return monto * euro;
  }   
  else {
      return "Moneda no disponible";
  }
}


let seguir = true;

  while (seguir) {
      let monto = parseFloat(prompt("¿Cual es el monto de la moneda que queres convertir"));
      let moneda = prompt("¿Que moneda queres convertir? (dolar, real, euro):").toLowerCase();
      let resultado = convertirAPesos(monto, moneda);

    alert(`${monto} ${moneda}(s) equivale(n) a ${resultado} pesos.`);
    let respuesta = prompt("¿Queres hacer otra conversin? Escribi `si` para continuar, `no` para finalizar. (si/no)").toLowerCase();
  
    if (respuesta !== "si") {
      seguir = false;
    }
  
}

alert("Gracias por usar el conversor de monedas.");
