function numrandom1()
{
    console.log("vou contar 10 numeros aleatorios");
    let contagem1 =prompt("digite qualquer limite");
    var numero= 0;
    var contagem=0;
    while(contagem<=contagem1)
{
numero=Math.random();
console.log(numero)
contagem++;
if (contagem>contagem1)
{
    console.log("a contagem terminou");
}
}

}
numrandom1();