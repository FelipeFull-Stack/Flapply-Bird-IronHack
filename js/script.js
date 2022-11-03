let passarinho = document.getElementById("passarinho");
let barreira1 = document.getElementById("barreira1");
let barreira2 = document.getElementById("barreira2");
let imgBarreira1 = document.getElementById("imgBarreira1");
let imgBarreira2 = document.getElementById("imgBarreira2");
let jumping = 0;
let score = 0;
let aleatorio = (Math.floor(Math.random(1) * 2) + 1) * 100;
let oscilador1 = 200, oscilador2 = 200;
let contador = Math.floor(Math.random(1) * 2);




function jump() {
    jumping = 1;
    let count = 0;
    let jumpInterval = setInterval(function () {
        let passarinhoTop = parseInt(window.getComputedStyle(passarinho).getPropertyValue("top"));
        if ((passarinhoTop > 6) && (count < 15)) {
            passarinho.style.top = (passarinhoTop - 6) + "px";
        }
        if (count > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            count = 0;
        }
        count++;
    })
}

setInterval(function () {
    let passarinhoTop = parseInt(window.getComputedStyle(passarinho).getPropertyValue("top"));
    if (jumping === 0) {
        passarinho.style.top = (passarinhoTop + 3) + "px";
    }
    if (passarinhoTop > 610) {
        alert("Perdeu: Não soube voar!\nScore: " + score);
        passarinho.style.top = 100 + "px";
        score = 0;
    }

    let colisaoBarreira1 = parseInt(window.getComputedStyle(imgBarreira1).getPropertyValue("right"));
    let colisaoBarreira2 = parseInt(window.getComputedStyle(imgBarreira2).getPropertyValue("right"));
    let colisaoPassarinho = parseInt(window.getComputedStyle(passarinho).getPropertyValue("right"));

    console.log(`ColisaoPassarinho: ${colisaoPassarinho}`)
    console.log(`solisaoBarreira1: ${colisaoBarreira1}`);
    console.log(`solisaoBarreira1: ${colisaoBarreira2}`);

    if (passarinhoTop >= 645 - aleatorio || passarinhoTop <= aleatorio) {

        if ((colisaoPassarinho <= colisaoBarreira1 + 120 && colisaoPassarinho >= colisaoBarreira1) || (colisaoPassarinho <= colisaoBarreira2 + 120 && colisaoPassarinho >= colisaoBarreira2)) {
            alert("Perdeu: Bateu no muro!  Score: " + score);
            passarinho.style.top = 100 + "px";
            score = 0;
        }
    }


}, 10);

document.addEventListener("keydown", event => {
    jump();
});


// let top = parseInt(window.getComputedStyle(passarinho).getPropertyValue("top"));
// top -= 25;|| (passarinho.style.right === imgBarreira1.style.left) || (passarinho.style.right === imgBarreira2.style.left)
// // Esse valor é apenas o tanto X que ele vai subir
// passarinho.style.top = top + "px";

function HeightUpBar() {
    if (contador === 0) {
        oscilador1 += aleatorio;
        imgBarreira1.style.height = oscilador1 + "px";
    }
    if (contador === 1) {
        if (aleatorio > 150) {
            oscilador1 = oscilador1 - (aleatorio - 50);
            imgBarreira1.style.height = oscilador1 + "px";
        }
        if (aleatorio < 150) {
            oscilador1 = oscilador1 - (aleatorio + 50);
            imgBarreira1.style.height = oscilador1 + "px";
        }
    }
}

function HeightDownBar() {
    if (contador === 0) {
        if (aleatorio > 150) {
            oscilador2 = oscilador2 - (aleatorio - 50);
            imgBarreira2.style.height = oscilador2 + "px";
        }
        if (aleatorio < 150) {
            oscilador2 = oscilador2 - (aleatorio + 50);
            imgBarreira2.style.height = oscilador2 + "px";
        }
    }
    if (contador === 1) {
        oscilador2 += aleatorio;
        imgBarreira2.style.height = oscilador2 + "px";
    }

    contador = Math.floor(Math.random(1) * 2);
    aleatorio = (Math.floor(Math.random(1) * 2) + 1) * 100;
    oscilador1 = 200;
    oscilador2 = 200;
}

imgBarreira1.addEventListener("animationiteration", () => {
    HeightUpBar();
    score++;
});
imgBarreira2.addEventListener("animationiteration", () => HeightDownBar());