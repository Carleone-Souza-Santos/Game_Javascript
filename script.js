
//jogadores.
let jog_1 = "Jogador 1";  //variavel jog1.
let jog_2 = "Jogador 2";  //variavel jog2.
let jog_3 = "Jogador 3";  //variavel jog3.

//pontos.
let valor1= 10;            //Pontos d jog 1.
let valor2= 10;            //Pontos d jog 2.
let valor3= 10;            //Pontos d jog 3.

// sons do Game.
 
function music(){         /*function Sons inicial*/ 
let Music =document.querySelector('.Music_inic');  
let audioArr=document.getElementsByTagName('audio');
console.log(audioArr);//array Som
audioArr[0].play()// som do MC Ronald 
}
function music_dados(){   /*function Som dados*/ 
let Music =document.querySelector('.Music_inic');  
let audioArr=document.getElementsByTagName('audio');
audioArr[1].play()// som jogando dados 
}
function music_ganhou(){  /*function Som vitoria*/ 
let Music =document.querySelector('.Music_inic');  
let audioArr=document.getElementsByTagName('audio');
audioArr[3].play()// som da vitoria. 
}
function music_Empat(){   /*function Som Empate*/ 
let Music =document.querySelector('.Music_inic');  
let audioArr=document.getElementsByTagName('audio');
audioArr[4].play()// som da vitoria. 
}
function music_perdeu(){  /*function Som derrota*/ 
    let Music =document.querySelector('.Music_inic');  
    let audioArr=document.getElementsByTagName('audio');
    audioArr[2].play()// som da derrota. 
}



function Nomes() {  // Digitar o nome para o prompt.

    jog_1 = prompt("Nome do 1 Jogador"); // variavel jogador 1.
    jog_2 = prompt("Nome do 2 Jogador"); // variavel jogador 2.
    jog_3 = prompt("Nome do 3 Jogador"); // variavel jogador 3.
    
    music(); // mc Rhonald.
   

    if ( jog_1.length < 3 || jog_2.length < 3 || jog_3.length < 3 ) { //validando pra pelo menos 3 caracter no prompt.
        alert('Por favor coloque o nome Valido!'); //se não colocar nada ficara neste loop.
        return;
    }
    document.querySelector("p.Jogador1") // coloca o nome do jogador 1 na tela.
        .innerHTML =  jog_1; //jogador 1.

    document.querySelector("p.Jogador2")// coloca o nome do jogador 2 na tela.
        .innerHTML =  jog_2;//jogador 2.

    document.querySelector("p.Jogador3")// coloca o nome do jogador 2 na tela.
    .innerHTML =  jog_3;   //jogador 2.
}


// pontos na tela.

let pontosjog1=document.querySelector("#ptns1") // pontos para apresentar na pag valor do player 1
let pontosjog2=document.querySelector("#ptns2") // pontos para apresentar na pag valor do player 2
let pontosjog3=document.querySelector("#ptns3") // pontos para apresentar na pag valor do player 3

pontosjog1.innerHTML=`${valor1}` // valores jog 1.
pontosjog2.innerHTML=`${valor2}` // valores jog 2.
pontosjog3.innerHTML=`${valor3}` // valores jog 3.


// jogar os dados.

function Jogar_Dados() {
    
    music_dados(); // musica d inicio depois d nome....

    let Valor_Dado1= document.querySelector(".img1");//  variavel om imagem. 
    let Valor_Dado2 = document.querySelector(".img2");// variavel om imagem.
    let Valor_Dado3 = document.querySelector(".img3");// variavel om imagem.

    Valor_Dado1.setAttribute("src", "diceroll.gif") // img atribuindo um gif na jogada na tela pelo src.
    Valor_Dado2.setAttribute("src", "diceroll.gif") // img atribuindo um gif na jogada na tela pelo src.
    Valor_Dado3.setAttribute("src", "diceroll.gif") // img atribuindo um gif na jogada na tela pelo src.


    let result = document.querySelector('h1') // apresenta o resultado na tela.
    result.innerHTML = ""  // recebe Se perdeu venceu ou empatou...

    setTimeout(() => { //sorteio da jogada dos dados aplicando um tempo de execução.
      

        let jogada_dados1 = Math.floor(Math.random() * 6) + 1; // faz o sorteio do 1 dado.
        let jogada_dados2 = Math.floor(Math.random() * 6) + 1; // faz o sorteio do 2 dado.
        let jogada_dados3 = Math.floor(Math.random() * 6) + 1; // faz o sorteio do 3 dado.
  
        Valor_Dado1.setAttribute('src', 'dice' + jogada_dados1 + '.png'); // pegando as 1 img png.
        Valor_Dado2.setAttribute('src', 'dice' + jogada_dados2 + '.png'); // pegando as 2 img png.
        Valor_Dado3.setAttribute('src', 'dice' + jogada_dados3 + '.png'); // pegando as 3 img png.

        // determina o resultado
       if (jogada_dados1 === jogada_dados2 || jogada_dados1  ===  jogada_dados3 || jogada_dados2 === jogada_dados3 ) {  // se for igual empate...
            result.innerHTML = "Empate!"   
            
            music_Empat()// music empate.
            
            valor1--; // empate perdem 1 ponto.
            valor2--; // empate perdem 1 ponto.
            valor3--; // empate perdem 1 ponto.

            pontosjog1.innerHTML=`${valor1}` // apresenta valores jog 1.
            pontosjog2.innerHTML=`${valor2}` // apresenta valores jog 2.
            pontosjog3.innerHTML=`${valor3}` // apresenta valores jog 2.


            if (valor1 <= 0){ // determina o fim jog 2... 
                result.innerHTML =`Fim do jogo pra vc ${jog_1} `;
                console.log('fim play2');
            }else if (valor2 <= 0){ // determina o fim jog 2... 
                result.innerHTML =`Fim do jogo pra vc ${jog_2} `;
                console.log('fim play2');
            }else if(valor3 <= 0){ // determina o fim jog 2... 
                result.innerHTML =`Fim do jogo pra vc ${jog_3} `;
                console.log('fim play3');
            }
        
    }else if (jogada_dados1 > jogada_dados2 && jogada_dados1 > jogada_dados3 ) { // se jogador 1 for menor que jogador 2
        result.innerHTML = ( jog_1 + " Ganhou!");//jogador 1 ganha!...
       
        music_perdeu(); // music derrota.

        valor2--; // retira ponto jog 2.
        valor3--; // retira ponto jog 3.

        pontosjog1.innerHTML=`${valor1}` // valores jog 1.
        pontosjog2.innerHTML=`${valor2}` // valores jog 2.
        pontosjog3.innerHTML=`${valor3}` // valores jog 3.
        
        
        if (valor1 <= 0){ // determina o fim jog 2... 
            result.innerHTML =`Fim do jogo pra vc ${jog_1} `;
            console.log('fim play2');
        }else if (valor2 <= 0){ // determina o fim jog 2... 
            result.innerHTML =`Fim do jogo pra vc ${jog_2} `;
            console.log('fim play2');
        }else if(valor3 <= 0){ // determina o fim jog 2... 
            result.innerHTML =`Fim do jogo pra vc ${jog_3} `;
            console.log('fim play3');
        }

    }   else if (jogada_dados1 < jogada_dados2 && jogada_dados2 > jogada_dados3 ) { // se jogador 1 for menor que jogador 2 e jog2 for maior que jog3
            result.innerHTML = ( jog_2 + " Ganhou!");//jogador 2 ganha!...
           
            music_perdeu(); // music derrota.

            valor1--; // retira ponto jog 1.
            valor3--; // retira ponto jog 1.

            pontosjog1.innerHTML=`${valor1}` // valores jog 1.
            pontosjog2.innerHTML=`${valor2}` // valores jog 2.
            pontosjog3.innerHTML=`${valor3}` // valores jog 3.
    

        if (valor1 <= 0){ // determina o fim jog 2... 
            result.innerHTML =`Fim do jogo pra vc ${jog_1} `;
            console.log('fim play2');
        }else if (valor2 <= 0){ // determina o fim jog 2... 
            result.innerHTML =`Fim do jogo pra vc ${jog_2} `;
            console.log('fim play2');
        }else if(valor3 <= 0){ // determina o fim jog 2... 
            result.innerHTML =`Fim do jogo pra vc ${jog_3} `;
            console.log('fim play3');
        }
        }else if (jogada_dados3 > jogada_dados1 && jogada_dados3 > jogada_dados2 ) { // se jogador 1 for menor que jogador 2
            result.innerHTML = ( jog_3 + " Ganhou!");//jogador 3 ganha!...
           
            music_perdeu(); // music derrota.

            valor1--; // retira ponto jog 1.
            valor2--; // retira ponto jog 2.

            pontosjog1.innerHTML=`${valor1}` // valores jog 1.
            pontosjog2.innerHTML=`${valor2}` // valores jog 2.
            pontosjog3.innerHTML=`${valor3}` // valores jog 3.
            
            if (valor1 <= 0){ // determina o fim jog 2... 
                result.innerHTML =`Fim do jogo pra vc ${jog_1} `;
                console.log('fim play2');
            }else if (valor2 <= 0){ // determina o fim jog 2... 
                result.innerHTML =`Fim do jogo pra vc ${jog_2} `;
                console.log('fim play2');
            }else if(valor3 <= 0){ // determina o fim jog 3... 
                result.innerHTML =`Fim do jogo pra vc ${jog_3} `;
                console.log('fim play3');
            }
        
        } 
        
        
        else if (jogada_dados1 > jogada_dados2 && jogada_dados1 > jogada_dados3 ) { // se jogador 1 for menor que jogador 2
            result.innerHTML = ( jog_1 + " Ganhou!");//jogador 2 ganha!...
           
            music_perdeu(); // music derrota.

            valor2--; // retira ponto jog 1.
            valor3--; // retira ponto jog 1.

            pontosjog1.innerHTML=`${valor1}` // valores jog 1.
            pontosjog2.innerHTML=`${valor2}` // valores jog 2.
            pontosjog3.innerHTML=`${valor3}` // valores jog 3.


            if (valor2 <= 0){ // determina o fim jog 2... 
                result.innerHTML =`Fim do jogo pra vc  ${jog_2} `;
                console.log('fim play2');
            }
         
           
        }
    }, 3900); // tempo aplicado 3 segund e 9 milesimos .

}
// documento criado por Carlleone@2023





    
  




