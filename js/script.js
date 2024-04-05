var meuBotao = document.querySelectorAll('.opcao');
var meuMenu = document.querySelectorAll('.botao');
var MeuSobre = document.querySelectorAll('.referencia');
var meuAudio = document.getElementById('audioOpcoes');
var myAudio = document.getElementById('myAudio');


meuBotao.forEach(function(botao){
    botao.addEventListener('mouseenter', function(){
       meuAudio.currentTime = 0;
       meuAudio.play();
    })
})

meuMenu.forEach(function(myMenu){
    myMenu.addEventListener('mouseenter', function(){
       myAudio.currentTime = 0;
       myAudio.play();
    })
})


function tocar(){
    var audio = document.getElementById("audio");
    audio.play(); 
}

var primeiroItem = document.querySelector('.botao:first-child');
var segundoItem = document.querySelector('.botao:last-child');
var itens = document.querySelectorAll('.botao');

itens.forEach(function(iten) {
    iten.addEventListener('click', function() {
        switch(iten) {
            case primeiroItem:
                setTimeout(function(){
                     window.location.href = "iniciar.html"
                },2000);
                break;
            case segundoItem:
                setTimeout(function(){
                    window.location.href = "sobre.html"
                },2000);
                break;
            default:
                alert('Classe desconhecida');
        }
    });
});

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
        opcoes:[
            ["Naruto , Sasuke e Sakura"],
            ["Neji , Tenten e Rock Lee"],
            ["Hinata , Shino e Kiba"],
            ["Shikamaru, Ino E Choji"],
        ],
        resposta: "Hinata , Shino e Kiba"
    },
    
    {
        pergunta: "Quais sao os 3 classes de nivel basico de um ninja?",
        opcoes:[
            ["Gennin, Chunnin e Jonnin"],
            ["Ambu, jonnin e Sannin"],
            ["Chunnin, kage e mizukage"],
            ["Gennin, Jonnin e kazekage"],
    ],
        resposta: "Gennin, Chunnin e Jonnin"
    },
    
    {
        pergunta: "Quais os viloes principais na saga da 'ponte da nevoa'?",
        opcoes:[
            ["Gaara e temari"],
            ["Haku e Zabuza"],
            ["Mizuki e Rokusho"],
            ["Irmaos Demonios"],
    ],
        resposta: "Haku e Zabuza"
    },
    {
        pergunta: "No primeiro episodio de naruto classico, quem e o vilão que aparece?",
        opcoes:[
            ["Rasa"],
            ["Itachi"],
            ["Mizuki"],
            ["Kimimaru"],
        ],
        resposta: "Mizuki"
    },
    {
        pergunta: "Qual o personagem que atacou sasuke durante o exame chunnin na 'Floresta da morte'?",
        opcoes:[
            ["Gaara"],
            ["Orochimaru"],
            ["Kabuto"],
            ["Itachi"],
        ],
        resposta: "Orochimaru"
    },
    {   
        pergunta: "Quem conseguiu pegas os guinzos durante o treinamento do kakashi ao time 7?",
        opcoes:[
            ["Sakura e Naruto"],
            ["Naruto e Sasuke"],
            ["Sakura e Sasuke"],
            ["Naruto"],
        ],
        resposta: "Sakura e Sasuke"
    },
    {
        pergunta: "Qual foi o primeiro jutsu que o naruto conseguiu aprender?",
        opcoes:[
            ["Rasengan"],
            ["Futon Rasen Shuriken"],
            ["Jutsu Sexy"],
            ["Shadow clone jutsu"],
        ],
        resposta: "Shadow clone jutsu"
    },
    {
        pergunta: "Qual o desejo principal do naruto?",
        opcoes:[
            ["Virar programador"],
            ["Ser o hokage"],
            ["Seguir o sasuke"],
            ["Namorar a sakura"],
        ],
        resposta: "Ser o hokage" 
    },
    {
        pergunta: "Com quem foi o primeiro beijo do naruto?",
        opcoes:[
            ["Sasuke"],
            ["Sakura"],
            ["Hinata"],
            ["Tenten"],
        ],
        resposta: "Sasuke"
    },
    {
        pergunta: "No final do exame chunnin, quem consegue evoluir de nivel para chunnin?",
        opcoes:[
            ["Sasuke"],
            ["Naruto"],
            ["Neji"],
            ["Shikamaru"],
        ],
        resposta: "Shikamaru"
    },
    {
        pergunta: "Na missão 'Recupere o sasuke' quem sao os ninjas que vao para a missao?",
        opcoes:[
            ["Sakura, Ino, tenten , konan , kurenai e hinata"],
            ["Naruto , Kiba , Shino , Neji , Choji e Shikamaru"],
            ["Pain , Kisame , Itachi , Kakuzu, Hidan e Sasori"],
            ["Kakashi , Guy , Asuma , hiruzen , iruka e Jiraia"],
        ],
        resposta: "Naruto , Kiba , Shino , Neji , Choji e Shikamaru"
    },
    {
        pergunta: "Quem ensinou ao naruto a tecnica 'rasengan' e qual foi o primeiro a receber esse golpe?",
        opcoes:[
            ["Kakashi e Sasuke"],
            ["Iruka e Zabuza"],
            ["Jiraia e Kabuto"],
            ["Minato e Pain"],
        ],
        resposta: "Jiraia e Kabuto"
    },
    {
        pergunta: "Na luta do exame chunnin, Gaara vs Rock lee, qual seria a melhor trilha sonora?",
        opcoes:[
            ["Slipknot"],
            ["Iron Maiden"],
            ["Baroes da pisadinha"],
            ["Linkin park"],
        ],
        resposta: "Linkin park"
    },
    {
        pergunta: "Qual o nome da raposa de 9 caudas?",
        opcoes:[
            ["Kurama"],
            ["Son Goku"],
            ["Shukaku"],
            ["Gyuuki"],
        ],
        resposta: "Kurama"
    }
];  

questoes.forEach(function(questao) {
    questao.opcoes = shuffleArray(questao.opcoes);
});

const questoesEmbaralhadas = shuffleArray(questoes);

let currentQuestion = 0;
let pontuacao = 0;
const perguntaElemento = document.querySelector('#pergunta');
const opcao1Elemento = document.querySelector('.opcao:first-child');
const opcao2Elemento = document.querySelector('.opcao:nth-child(2)');
const opcao3Elemento = document.querySelector('.opcao:nth-child(3)');
const opcao4Elemento = document.querySelector('.opcao:last-child');
const resultadoElemento = document.querySelector('#resultado');
const pontuacaoElemento = document.querySelector('.encerramento:first-child');
const mensagemElemento = document.querySelector('.encerramento:last-child')
const palavraElemento = document.querySelectorAll('.palavra');
const imagemElemento = document.querySelector('#imagem');
const criarImagem = document.createElement('img');
const quizElemento = document.querySelectorAll('.quiz');

criarImagem.src = '../img/iruka idle.png';
imagemElemento.appendChild(criarImagem);

function carregarQuestao(){
    const currentQuestionData = questoes[currentQuestion];
    perguntaElemento.textContent = currentQuestionData.pergunta;
    opcao1Elemento.textContent = currentQuestionData.opcoes[0];
    opcao2Elemento.textContent = currentQuestionData.opcoes[1];
    opcao3Elemento.textContent = currentQuestionData.opcoes[2];
    opcao4Elemento.textContent = currentQuestionData.opcoes[3];
    opcao1Elemento.innerHTML = ''
    opcao2Elemento.innerHTML = ''
    opcao3Elemento.innerHTML = ''
    opcao4Elemento.innerHTML = ''

    currentQuestionData.opcoes[0].forEach((option1)=>{
        const option1Element = document.createElement('div');
        option1Element.textContent = (option1);
        option1Element.classList.add('option1');
        option1Element.addEventListener('click' , () => selectOption(option1));
        opcao1Elemento.appendChild(option1Element);
    });
    currentQuestionData.opcoes[1].forEach((option2)=>{
        const option2Element = document.createElement('div');
        option2Element.textContent = (option2);
        option2Element.classList.add('option2');
        option2Element.addEventListener('click' , () => selectOption(option2));
        opcao2Elemento.appendChild(option2Element);
    });
    currentQuestionData.opcoes[2].forEach((option3)=>{
        const option3Element = document.createElement('div');
        option3Element.textContent = (option3);
        option3Element.classList.add('option3');
        option3Element.addEventListener('click' , () => selectOption(option3))
        opcao3Elemento.appendChild(option3Element);
    });
    currentQuestionData.opcoes[3].forEach((option4)=>{
        const option4Element = document.createElement('div');
        option4Element.textContent = (option4);
        option4Element.classList.add('option4');
        option4Element.addEventListener('click' , () => selectOption(option4));
        opcao4Elemento.appendChild(option4Element);
    });
}

function selectOption(option){
    const currentQuestionData = questoes[currentQuestion];

    if (option === currentQuestionData.resposta) {
        pontuacao++;
        resultadoElemento.style.display = 'inline-block';
        criarImagem.src = '../img/iruka feliz.png';
        imagemElemento.appendChild(criarImagem);
        resultadoElemento.textContent = 'Resposta correta!! :D'
        setTimeout(function(){
            resultadoElemento.textContent = '';
            imagemElemento.style.display = 'block';
        },3000); 
    } else {
        criarImagem.src = '../img/iruka-irritado.png';
        imagemElemento.appendChild(criarImagem);
        resultadoElemento.style.display = 'inline-block';
        resultadoElemento.textContent = 'Errou a pergunta :(';
        setTimeout(function(){
            resultadoElemento.textContent = '';
            imagemElemento.style.display = 'block';
        },3000)
    }
    currentQuestion++;
    if (currentQuestion < questoes.length){
        setTimeout(function(){
            imagemElemento.style.display = 'block';
            criarImagem.src = '../img/iruka idle.png';
            imagemElemento.appendChild(criarImagem);
            resultadoElemento.style.display = 'none'
            carregarQuestao();
        },3000);
    } else {
            setTimeout(function(){
                
                resultadoElemento.style.display = 'none';
                perguntaElemento.style.display = 'none';
                opcao1Elemento.style.display = 'none';
                opcao2Elemento.style.display = 'none';
                opcao3Elemento.style.display = 'none';
                opcao4Elemento.style.display = 'none';
            },3000);
            var sim = document.querySelector('.alternativa:first-child');
            var nao = document.querySelector('.alternativa:last-child');
            var texto = document.querySelector('#texto');
            var alternativas = document.querySelectorAll('.alternativa');
            setTimeout(function(){
                texto.style.display = 'block';
                sim.style.display = 'block';
                nao.style.display = 'block';
                criarImagem.src = '../img/iruka_certeza-oficial-ultimate.png'
                imagemElemento.appendChild(criarImagem);
            },3000);
            alternativas.forEach(function(alternativa){
                alternativa.addEventListener('click' , function(){
                    switch(alternativa){
                        case sim:
                            texto.style.display = 'none';
                            sim.style.display = 'none';
                            nao.style.display = 'none';
                            criarImagem.src = '../img/iruka adeus.png'
                            imagemElemento.appendChild(criarImagem);
                            pontuacaoElemento.style.display = 'block';
                            mensagemElemento.style.display = 'block'
                            pontuacaoElemento.textContent = `Voce acertou ${pontuacao} de 15 questoes`;
                            mensagemElemento.textContent = 'GAME OVER. THANKS FOR PLAYNG ^^';
                            setTimeout(function(){
                                window.location.href = "index.html"
                            },7000);
                            break;
                        case nao:
                            criarImagem.src = '../img/iruka adeus.png'
                            imagemElemento.appendChild(criarImagem);
                            texto.style.display = 'none';
                            sim.style.display = 'none';
                            nao.style.display = 'none';
                            mensagemElemento.style.display = 'block';
                            mensagemElemento.textContent = 'GAME OVER. THANKS FOR PLAYNG ^^';
                            setTimeout(function(){
                                window.location.href = "index.html"
                            },7000);
                            break;
                        default:
                            alert('Nao foi entrado nada');
                        }
                })
            })
        }
    }
carregarQuestao();


