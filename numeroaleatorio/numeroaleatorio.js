function numrandom()
{
    console.log("vou contar 10 numeros aleatorios");
    var contagem=0;
    var numero= 0;

    while(contagem<=10)
{
numero=Math.random();
console.log(numero)
contagem++;
if (contagem>10)
{
    console.log("a contagem terminou");
}
}

}