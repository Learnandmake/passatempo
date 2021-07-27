function quiz()
{
    var p1=("qual o animal mais rapido do mundo?");
    var p2=("qual o maior animal do mundo?");
    var escolha=0;
    var contagem=0;
    var pontuacao=0;
   
    
    while(escolha!=3)
    {
     
     console.log(p1)
       let r = prompt("digite a sua resposta");
        if(r=="leopardo")
         {
         console.log("voce acertou");
         pontuacao++;
         console.log("sua pontuacao é"+" "+pontuacao);
        
         }
         else
         {
         console.log("voce errou");
         pontuacao--;
         console.log("sua pontuacao é"+" "+pontuacao);  
        
         }
     

 
     console.log(p2)
       r = prompt("digite a sua resposta");
        if(r=="elefante")
         {
         console.log("voce acertou");
         pontuacao++;
         console.log("sua pontuacao é"+" "+pontuacao);
         escolha= prompt("1 para continuar 3 para sair");
         }
         else
         {
         console.log("voce errou");
         pontuacao--;
         console.log("sua pontuacao é"+" "+pontuacao);  
         escolha= prompt("1 para continuar 3 para sair"); 
         }
     
    }
   if(escolha==3)
   {console.log("obrigado por jogar");}
}
quiz();