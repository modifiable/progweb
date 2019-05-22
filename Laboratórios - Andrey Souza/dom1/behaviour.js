
function teste(){
var raio = String(document.getElementsByName("raiouser")[0].value);
console.log(raio);
document.getElementsByName("area")[0].value = 3.14*(raio*raio);
document.getElementsByName("circ")[0].value = 3.14*raio*2;
}
