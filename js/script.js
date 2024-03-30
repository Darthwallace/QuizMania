var meuBotao = document.querySelectorAll('.opcao');
var meuAudio = document.getElementById('audioOpcoes');

meuBotao.forEach(function(botao){
    botao.addEventListener('mouseenter', function(){
        meuAudio.currentTime = 0;
        meuAudio.play();
    })
})

function tocar2(){
    var audio2 = document.getElementsByClassName("audio2");
    audio2.play();
}

function tocar(){
    var audio = document.getElementById("audio");
    audio.play();

    setTimeout(function(){
        window.location.href = "iniciar.html"
    },2000);
}

function play(){
    var play = document.getElementById("play")
    play.play();

    setTimeout(function(){
        window.location.href = "sobre.html"
    },3000);
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const questoes = [
    {
        pergunta: "Quais sao os integrantes do time 8?",
        opcao1: ["Naruto , Sasuke e Sakura"],
        opcao2: ["Neji , Tenten e Rock Lee"],
        opcao3: ["Hinata , Shino e Kiba"],
        opcao4: ["Shikamaru, Ino E Choji"],
        resposta: "Hinata , Shino e Kiba"
    },
    {
        pergunta: "Quais sao os 3 classes de nivel basico de um ninja?",
        opcao1: ["Gennin, Chunnin e Jonnin"],
        opcao2: ["Ambu, jonnin e Sannin"],
        opcao3: ["Chunnin, kage e mizukage"],
        opcao4: ["Gennin, Jonnin e kazekage"],
        resposta: "Gennin, Chunnin e Jonnin"
    },
    {
        pergunta: "Quais os viloes principais na saga da 'ponte da nevoa'?",
        opcao1: ["Gaara e temari"],
        opcao2: ["Haku e Zabuza"],
        opcao3: ["Mizuki e Rokusho"],
        opcao4: ["Irmaos Demonios"],
        resposta: "Haku e Zabuza"
    },
    {
        pergunta: "No primeiro episodio de naruto classico, quem e o vilão que aparece?",
        opcao1: ["Rasa"],
        opcao2: ["Itachi"],
        opcao3: ["Mizuki"],
        opcao4: ["Kimimaru"],
        resposta: "Mizuki"
    },
    {
        pergunta: "Qual o personagem que atacou sasuke durante o exame chunnin na 'Floresta da morte'?",
        opcao1: ["Gaara"],
        opcao2: ["Orochimaru"],
        opcao3: ["Kabuto"],
        opcao4: ["Itachi"],
        resposta: "Orochimaru"
    },
    {   
        pergunta: "Quem conseguiu pegas os guinzos durante o treinamento do kakashi ao time 7?",
        opcao1: ["Sakura e Naruto"],
        opcao2: ["Naruto e Sasuke"],
        opcao3: ["Sakura e Sasuke"],
        opcao4: ["Naruto"],
        resposta: "Sakura e Sasuke"
    },
    {
        pergunta: "Qual foi o primeiro jutsu que o naruto conseguiu aprender?",
        opcao1: ["Rasengan"],
        opcao2: ["Futon Rasen Shuriken"],
        opcao3: ["Jutsu Sexy"],
        opcao4: ["Shadow clone jutsu"],
        resposta: "Shadow clone jutsu"
    },
    {
        pergunta: "Qual o desejo principal do naruto?",
        opcao1: ["Virar programador"],
        opcao2: ["Ser o hokage da vila"],
        opcao3: ["Seguir o sasuke"],
        opcao4: ["Namorar a sakura"],
        resposta: "Ser o hokage da vila" 
    },
    {
        pergunta: "Com quem foi o primeiro beijo do naruto?",
        opcao1: ["Sasuke"],
        opcao2: ["Sakura"],
        opcao3: ["Hinata"],
        opcao4: ["Tenten"],
        resposta: "Sasuke"
    },
    {
        pergunta: "No final do exame chunnin, quem consegue evoluir de nivel para chunnin?",
        opcao1: ["Sasuke"],
        opcao2: ["Naruto"],
        opcao3: ["Neji"],
        opcao4: ["Shikamaru"],
        resposta: "Shikamaru"
    },
    {
        pergunta: "Na missão 'Recupere o sasuke' quem sao os ninjas que vao para a missao?",
        opcao1: ["Sakura, Ino, tenten , konan , kurenai e hinata"],
        opcao2: ["Naruto , Kiba , Shino , Neji , Choji e Shikamaru"],
        opcao3: ["Pain , Kisame , Itachi , Kakuzu, Hidan e Sasori"],
        opcao4: ["Kakashi , Guy , Asuma , hiruzen , iruka e Jiraia"],
        resposta: "Naruto , Kiba , Shino , Neji , Choji e Shikamaru"
    },
    {
        pergunta: "Quem ensinou ao naruto a tecnica 'rasengan' e qual foi o primeiro a receber esse golpe?",
        opcao1: ["Kakashi e Sasuke"],
        opcao2: ["Iruka e Zabuza"],
        opcao3: ["Jiraia e Kabuto"],
        opcao4: ["Minato e Pain"],
        resposta: "Jiraia e Kabuto"
    },
    {
        pergunta: "Na luta do exame chunnin, Gaara vs Rock lee, qual seria a melhor trilha sonora?",
        opcao1: ["Slipknot"],
        opcao2: ["Iron Maiden"],
        opcao3: ["Baroes da pisadinha"],
        opcao4: ["Linkin park"],
        resposta: "Linkin park"
    },
    {
        pergunta: "Qual o nome da raposa de 9 caudas?",
        opcao1: ["Kurama"],
        opcao2: ["Son Goku"],
        opcao3: ["Shukaku"],
        opcao4: ["Gyuuki"],
        resposta: "Kurama"
    }
];  

const questoesEmbaralhadas = shuffleArray(questoes);

//Colocar as opções em uma classe para refatorar o codigo
let currentQuestion = 0;
let pontuacao = 0;
const perguntaElemento = document.getElementById('pergunta');
const opcao1Elemento = document.getElementById('opcao1');
const opcao2Elemento = document.getElementById('opcao2');
const opcao3Elemento = document.getElementById('opcao3');
const opcao4Elemento = document.getElementById('opcao4');
const resultadoElemento = document.getElementById('resultado');
const pontuacaoElemento = document.getElementById('pontuacao');
const mensagemElemento = document.getElementById('mensagem');


function carregarQuestao(){
    const currentQuestionData = questoes[currentQuestion];
    perguntaElemento.textContent = currentQuestionData.pergunta;
    opcao1Elemento.innerHTML = '';
    opcao2Elemento.innerHTML = '';
    opcao3Elemento.innerHTML = '';
    opcao4Elemento.innerHTML = '';

    currentQuestionData.opcao1.forEach((option1, index)=>{
        const option1Element = document.createElement('div');
        option1Element.textContent = option1;
        option1Element.classList.add('option1');
        option1Element.addEventListener('click' , () => selectOption(option1));
        opcao1Elemento.appendChild(option1Element);
    });

    currentQuestionData.opcao2.forEach((option2, index)=>{
        const option2Element = document.createElement('div');
        option2Element.textContent = option2;
        option2Element.classList.add('option2');
        option2Element.addEventListener('click' , () => selectOption(option2));
        opcao2Elemento.appendChild(option2Element);
    });
    
    currentQuestionData.opcao3.forEach((option3, index)=>{
        const option3Element = document.createElement('div');
        option3Element.textContent = option3;
        option3Element.classList.add('option3');
        option3Element.addEventListener('click' , () => selectOption(option3));
        opcao3Elemento.appendChild(option3Element);
    });

    currentQuestionData.opcao4.forEach((option4, index)=>{
        const option4Element = document.createElement('div');
        option4Element.textContent = option4;
        option4Element.classList.add('option4');
        option4Element.addEventListener('click' , () => selectOption(option4));
        opcao4Elemento.appendChild(option4Element);
    });
}

function selectOption(option){
    const currentQuestionData = questoes[currentQuestion];
    if (option === currentQuestionData.resposta) {
        //Corrigir a parte visual das mensagem via CSS
        pontuacao++;
        resultadoElemento.style.display = 'inline-block';
        resultadoElemento.textContent = 'Resposta correta!! :D'
        setTimeout(function(){
            resultadoElemento.textContent = '';
        },3000); 
    } else {
        resultadoElemento.style.display = 'inline-block';
        resultadoElemento.textContent = 'Errou a pergunta :(';
        setTimeout(function(){
            resultadoElemento.textContent = '';
        },3000)
    }
    currentQuestion++;
    if (currentQuestion < questoes.length){
        setTimeout(function(){
            carregarQuestao(resultadoElemento.style.display = 'none');
        },3000);
    } else {
        setTimeout(function(){
            resultadoElemento.style.display = 'none';
            mensagemElemento.style.display = 'block';
            pontuacaoElemento.style.display = 'block';
            pontuacaoElemento.textContent = `Voce acertou ${pontuacao}`
            mensagemElemento.textContent = 'GAME OVER. THANKS FOR PLAYNG ^^';
        },3000)
        setTimeout(function(){
            window.location.href = "index.html"
        },7000);
    }
}

carregarQuestao();


