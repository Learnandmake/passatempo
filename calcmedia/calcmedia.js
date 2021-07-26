function calcmedia()
{
console.log("Vou calcular sua media ");
let n1=prompt("digite a primeira nota");
let n2=prompt("digite a segunda nota");  
let n3=prompt("digite a terceira nota");  
var total= (parseInt(n1)+parseInt(n2)+parseInt(n3))/parseInt(3);
console.log("sua nota final foi"+" "+total);
}
calcmedia();