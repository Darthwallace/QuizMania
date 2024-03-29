function tocar(){
    var audio = document.getElementById("audio");
    audio.play();

    setTimeout(function(){
        window.location.href = "iniciar.html"
    },2000);
}

function tocar2(){
    var audio2 = document.getElementsByClassName("audio2");
    audio2.play();
}

function play(){
    var play = document.getElementById("play")
    play.play();

    setTimeout(function(){
        window.location.href = "sobre.html"
    },3000);
}