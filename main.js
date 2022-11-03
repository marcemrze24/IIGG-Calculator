//Calculadora de IIGG//



//VARIABLES INICIALES//
let sueldoBruto = parseInt(prompt("Ingrese su sueldo bruto (solo numeros, sin comas ni puntos.) :"));
let deducciones = 101026 + 21047;
let iiggFijo = 0;
let iiggVar = 0;
let iiggTotal = 0;


//FUNCION calcDescuentos//
function calcDescuentos() {
   while (true) {
      if (isNaN(sueldoBruto) == false && sueldoBruto != "" && sueldoBruto != null) {
         const aportesJubilatorios = (sueldoBruto * 11)/ 100;
         const obraSocial = (sueldoBruto * 3)/ 100;
         const pami = (sueldoBruto * 3)/ 100;
         return (aportesJubilatorios + obraSocial + pami)
      } else{
         sueldoBruto = parseInt(prompt("Ingrese su sueldo bruto correctamente (solo numeros, sin comas ni puntos.) :"))
      }
   }
}
//CALCULO DESCUENTOS Y GUARDO EN UNA VARIABLE//
let descuentos = calcDescuentos()


//FUNCION calcNetoDescuentos//
function calcNetoDescuentos() {
   return (sueldoBruto - descuentos);
}
//CALCULO NETO DE DESCUENTOS Y GUARDO EN UNA VARIABLE//
let netoDescuentos = calcNetoDescuentos()



//FUNCION calcDeducciones//
function calcDeducciones() {
   let preguntaA;
   do {
      preguntaA = prompt("Usted tiene conyuge? (Responda SI/NO)");
      if (preguntaA == "SI") {
         deducciones += 19621;
      } else if (preguntaA == "NO") {
         break;
      }
   } while (preguntaA != "SI");

   let preguntaB;
   do {
      preguntaB = prompt("Usted tiene hijos? (Responda SI/NO)")
      if (preguntaB == "SI") {
         deducciones += 9895;
      } else if (preguntaB == "NO") {
         break;
      }
   } while (preguntaB != "SI");

   let preguntaC;
   do {
      preguntaC = prompt("Usted tiene hijos incapacitados? (Responda SI/NO)")
      if (preguntaC == "SI") {
         deducciones += 19790;
      } else if (preguntaC == "NO") {
         break;
      }
   } while (preguntaC != "SI");

   let preguntaD;
   do {
      preguntaD = prompt("Usted tiene personal domestico? (Responda SI/NO)")
      if (preguntaD == "SI") {
         deducciones += 21047;
      } else if (preguntaD == "NO") {
         break;
      }
   } while (preguntaD != "SI");

   let preguntaE;
   do {
      preguntaE = prompt("Usted paga alquiler? (Responda SI/NO)")
      if (preguntaE == "SI") {
         deducciones += 21047;
      } else if (preguntaE == "NO") {
         break;
      }
   } while (preguntaE != "SI");

   let preguntaF;
   do {
      preguntaF = prompt("Usted paga intereses hipotecarios? (Responda SI/NO)")
      if (preguntaF == "SI") {
         deducciones += 1667;
      } else if (preguntaF == "NO") {
         break;
      }
   } while (preguntaF != "SI");

   let preguntaG;
   do {
      preguntaG = prompt("Usted tiene seguro de vida? (Responda SI/NO)")
      if (preguntaG == "SI") {
         deducciones += 2000;
      } else if (preguntaG == "NO") {
         break;
      }
   } while (preguntaG != "SI");

   let preguntaH;
   do {
      preguntaH = prompt("Usted tiene prepaga? (Responda SI/NO)")
      if (preguntaH == "SI") {
         deducciones += ((netoDescuentos * 5) / 100);
      } else if (preguntaH == "NO") {
         break;
      }
   } while (preguntaH != "SI");

   let preguntaI;
   do {
      preguntaI = prompt("Usted paga honorarios medicos? (Responda SI/NO)")
      if (preguntaI == "SI") {
         deducciones += ((netoDescuentos * 5) / 100);
      } else if (preguntaI == "NO") {
         break;
      }
   } while (preguntaI != "SI");
}
//CALCULO DEDUCCIONES//
calcDeducciones()


//FUNCION calcGananciaNeta//
function calcGananciaNeta() {
   return (netoDescuentos - deducciones)
}
//CALCULO GANANCIA NETA Y GUARDO EN UNA VARIABLE//
let gananciaNeta = calcGananciaNeta()


//FUNCION calcIG //
//Esta funcion calcula iigg fijo, iigg variable, iigg total//
function calcIG() {
   let gananciaNetaAnual = gananciaNeta * 13;
   if (gananciaNetaAnual >= 97202 && gananciaNetaAnual < 194404) {
      iiggFijo += 4860;
      iiggVar += ((gananciaNetaAnual - 97202)*0.09)
      iiggTotal = iiggFijo + iiggVar;
   } else if (gananciaNetaAnual >= 194404 && gananciaNetaAnual < 291606) {
      iiggFijo += 13608;
      iiggVar += ((gananciaNetaAnual - 194404)*0.12)
      iiggTotal = iiggFijo + iiggVar;
   } else if (gananciaNetaAnual >= 291606 && gananciaNetaAnual < 388808) {
      iiggFijo += 25273;
      iiggVar += ((gananciaNetaAnual - 291606)*0.15)
      iiggTotal = iiggFijo + iiggVar;
   } else if (gananciaNetaAnual >= 388808 && gananciaNetaAnual < 583212) {
      iiggFijo += 39853;
      iiggVar += ((gananciaNetaAnual - 388808)*0.19)
      iiggTotal = iiggFijo + iiggVar;
   } else if (gananciaNetaAnual >= 583212 && gananciaNetaAnual < 777616) {
      iiggFijo += 76790;
      iiggVar += ((gananciaNetaAnual - 583212)*0.23)
      iiggTotal = iiggFijo + iiggVar;
   } else if (gananciaNetaAnual >= 777616 && gananciaNetaAnual < 1166424) {
      iiggFijo += 121503;
      iiggVar += ((gananciaNetaAnual - 777616)*0.27)
      iiggTotal = iiggFijo + iiggVar;
   } else if (gananciaNetaAnual >= 1166424 && gananciaNetaAnual < 1555232) {
      iiggFijo += 226481;
      iiggVar += ((gananciaNetaAnual - 1166424)*0.31)
      iiggTotal = iiggFijo + iiggVar;
   } else if (gananciaNetaAnual >= 1555232) {
      iiggFijo += 347011;
      iiggVar += ((gananciaNetaAnual - 1555232)*0.35)
      iiggTotal = iiggFijo + iiggVar;
   }
}
//CALCULO IIGGFIJO y IIGGVARIABLE//
calcIG()




console.log("Sueldo bruto: $" + sueldoBruto)
console.log("Descuentos: $" + descuentos)
console.log("Neto de decuentos: $" + netoDescuentos)
console.log("Deducciones: $" + deducciones)
console.log("Ganancia neta: $" + gananciaNeta)
console.log("IIGG Fijo: $" + (iiggFijo / 12))
console.log("IIGG Var: $" + (iiggVar / 12))
console.log("IIGG Total: $" + (iiggTotal/12))
console.log("Sueldo neto: $" + (iiggTotal/12 + gananciaNeta))
