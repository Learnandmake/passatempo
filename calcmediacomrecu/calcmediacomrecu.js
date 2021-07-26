function calcmedia()
{
console.log("Vou calcular sua media ");
let n1=prompt("digite a primeira nota");
let n2=prompt("digite a segunda nota");  
let n3=prompt("digite a terceira nota");  
var total= (parseInt(n1)+parseInt(n2)+parseInt(n3))/parseInt(3);
console.log("sua nota final foi"+" "+total);
if (total <5)
{
    console.log("voce ficou de recuperacao");
    let n1recu=prompt("digite sua nota de recuperação");
    var totalf=(parseInt(total)+parseInt(n1recu))/parseInt(2);
    if (totalf>=5)
    {
        console.log("voce passou, sua ota final é"+" "+totalf);
    }
    else
    {
        console.log("desculpe mas você reprovou esse ano");
    }
}
}
calcmedia();