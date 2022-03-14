//3 chcicos de 23 años perfectamente normales entran a una heladeria a comprar un heldo pero hay un problema: los precios no estan al lado de cada estante con su respectivo helado. Ellos quieren comrar el helaod mas caro que puedan con la plata que tienen.//
//Roberto tiene 1.5, Pedro 1.7 y Cofla 3//
//Precios de los helados://
//Palito de helado de agua 0.6//
//Palito de helado de crema 1//
//Bombon helado heladix 1.6//
//Bombon helado heladovich 1.7//
//Bombon helado helardo 1.8//
//Helado con confites 2.9//
//Pote 1/4 2.9//
dineroRoberto = prompt ("cuanto dinero tiene Roberto?"); //Alerta en pantalla que solicita un dato VARIABLE = PROMPT//
dineroPedro = prompt ("cuanto dinero tiene Pedro?");
dineroCofla = prompt ("cuanto dinero tiene Cofla?");

if (dineroRoberto < .6){
    alert ("Roberto no se puede comprar nada");
}
else if (dineroRoberto >= .6 && dineroRoberto < 1) {
    alert ("Roberto tiene que comprar el helado de agua");
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert ("Roberto tiene que comprar el palito de crema");
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert ("Roberto tiene que comprar el heladix");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert ("Roberto tiene que comprar el heladovich");
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert ("Roberto tiene que comprar el Helardo");
}
else if (dineroRoberto >= 2.9) {
    alert ("Roberto tiene que comprar el 1/4 o confites");
}

if (dineroPedro < .6){
    alert ("Pedro no se puede comprar nada");
}
else if (dineroPedro >= .6 && dineroPedro < 1) {
    alert ("Pedrotiene que comprar el helado de agua");
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert ("Pedro tiene que comprar el palito de crema");
}
else if (dineroPedro >= 1.6 && dineroPedro< 1.7) {
    alert ("Pedro tiene que comprar el heladix");
}
else if (dineroPedro>= 1.7 && dineroPedro < 1.8) {
    alert ("Pedro tiene que comprar el heladovich");
}
else if (dineroPedro>= 1.8 && dineroPedro < 2.9) {
    alert ("Pedro tiene que comprar el Helardo");
}
else if (dineroPedro >= 2.9) {
    alert ("Pedro tiene que comprar el 1/4 o confites");
}

if (dineroCofla < .6){
    alert ("Cofla no se puede comprar nada");
}
else if (dineroCofla >= .6 && dineroCofla < 1) {
    alert ("Cofla tiene que comprar el helado de agua");
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert ("Cofla tiene que comprar el palito de crema");
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert ("Cofla tiene que comprar el heladix");
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert ("Cofla tiene que comprar el heladovich");
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert ("Cofla tiene que comprar el Helardo");
}
else if (dineroCofla >= 2.9) {
    alert ("Cofla tiene que comprar el 1/4 o confites");
}


//Solucion correcta//
"use strict"
const definirCompra = (n) => {
   let din = promp(`Dinero de ${n}`);
   if (din >= 0.6  && din < 1) return (`${n}: helado de agua`);
   if (din >= 1  && din < 1) return (`${n}: helado de agua`);
   if (din >= 1.6  && din < 1.7) return (`${n}: helado de agua`);
   if (din >= 1.7  && din < 1.8) return (`${n}: helado de agua`);
   if (din >= 1.8  && din < 2.9) return (`${n}: helado de agua`);
   if (din >= 2.9) return (`${n}: helado de congites o pote de 1/4`);
   else return (`${n}: No alcanza para nada.`);
}
console.log(definirCompra("Roberto"));
console.log(definirCompra("Pedro"));
console.log(definirCompra("Cofla"));
