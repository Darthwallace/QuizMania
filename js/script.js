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
const questoes = [
    {
        pergunta: "Quais sao os integrantes do time 9?",
        opcao1: ["Opcao A"],
        opcao2: ["Opcao B"],
        opcao3: ["Opcao C"],
        opcao4: ["Opcao D"],
        resposta: ["Opcao B"]
    },
    {
        pergunta: "Quais sao os integrantes do time 10?",
        opcao1: ["Opcao A"],
        opcao2: ["Opcao B"],
        opcao3: ["Opcao C"],
        opcao4: ["Opcao D"],
        resposta: ["Opcao C"]
    }
];


//Colocar as opções em uma classe para refatorar o codigo
let currentQuestion = 0;
const perguntaElemento = document.getElementById('pergunta');
const opcao1Elemento = document.getElementById('opcao1');
const opcao2Elemento = document.getElementById('opcao2');
const opcao3Elemento = document.getElementById('opcao3');
const opcao4Elemento = document.getElementById('opcao4');
const resultadoElemento = document.getElementById('resultado');

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

    currentQuestionData.opcao3.forEach((option, index)=>{
        const option3Element = document.createElement('div');
        option3Element.textContent = option;
        option3Element.classList.add('option');
        option3Element.addEventListener('click' , () => selectOption(option));
        opcao3Elemento.appendChild(option3Element);
    });

    currentQuestionData.opcao4.forEach((option, index)=>{
        const option4Element = document.createElement('div');
        option4Element.textContent = option;
        option4Element.classList.add('option');
        option4Element.addEventListener('click' , () => selectOption(option));
        opcao4Elemento.appendChild(option4Element);
    });
}

//Colocar a condição que caso o usuário erre a pergunta , faça que repita novamente até acertar
function selectOption(option){
    const currentQuestionData = questoes[currentQuestion];
    if (option === currentQuestionData.resposta) {
        //Corrigir a parte visual das mensagem via CSS
        resultadoElemento.textContent = 'Resposta correta';
    } else {
        resultadoElemento.textContent = 'Errou a pergunta';
    }
    currentQuestion++;
    if (currentQuestion < questoes.length){
        carregarQuestao();
    } else {
        perguntaElemento.textContent = '';
        opcao1Elemento.textContent = '';
        opcao2Elemento.textContent = '';
        opcao3Elemento.textContent = '';
        opcao4Elemento.textContent = '';
    }
}

carregarQuestao();


