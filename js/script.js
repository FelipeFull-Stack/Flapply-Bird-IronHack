let passarinho = document.getElementById("passarinho");
let barreira1 = document.getElementById("barreira1");
let barreira2 = document.getElementById("barreira2");
let imgBarreira1 = document.getElementById("imgBarreira1");
let imgBarreira2 = document.getElementById("imgBarreira2");
let jumping = 0;
let score = 0;
let contador = 0;

if (contador === 7) {
    console.log(contador);
    contador = 0;
}


function jump() {
    jumping = 1;
    let count = 0;
    let jumpInterval = setInterval(function () {
        let passarinhoTop = parseInt(window.getComputedStyle(passarinho).getPropertyValue("top"));
        if ((passarinhoTop > 6) && (count < 15)) {
            passarinho.style.top = (passarinhoTop - 5) + "px";
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
    if (jumping === 0) { passarinho.style.top = (passarinhoTop + 3) + "px"; }
    if (passarinhoTop > 600) {
        alert("Game over. Score: " + score);
        passarinho.style.top = 100 + "px";
        score = 0;
    }
}, 10);

document.addEventListener("keydown", event => {
    if (event.key !== "Enter") {
        jump();
    }


});



// let top = parseInt(window.getComputedStyle(passarinho).getPropertyValue("top"));
// top -= 25;
// // Esse valor é apenas o tanto X que ele vai subir
// passarinho.style.top = top + "px";
function HeightUpBar() {
    if (contador === 7) {
        console.log(contador);
        contador = 0;
    }

    if (contador === 0) {
        let random = -((Math.random() * 100) + 200);
        imgBarreira1.style.height = random + "px";
        console.log(contador);
        return contador++;
    }
    if (contador === 2) {
        let random = +((Math.random() * 100) + 200);
        imgBarreira1.style.height = random + "px";
        console.log(contador);
        return contador++;
    }
    if (contador === 4) {
        let random = -((Math.random() * 100) + 200);
        imgBarreira1.style.height = random + "px";
        console.log(contador);
        return contador++;
    }
    if (contador === 6) {
        let random = +((Math.random() * 100) + 200);
        imgBarreira1.style.height = random + "px";
        console.log(contador);
        return contador++;
    }
}


function HeightDownBar() {
    if (contador === 7) {
        console.log(contador);
        contador = 0;
    }

    if (contador === 1) {
        let random = +((Math.random() * 100) + 200);
        imgBarreira2.style.height = random + "px";
        console.log(contador);
        return contador++;
    }
    if (contador === 3) {
        let random = -((Math.random() * 100) + 200);
        imgBarreira2.style.height = random + "px";
        console.log(contador);
        return contador++;
    }
    if (contador === 5) {
        let random = +((Math.random() * 100) + 200);
        imgBarreira2.style.height = random + "px";
        console.log(contador);
        return contador++;
    }
    if (contador === 7) {
        let random = -((Math.random() * 100) + 200);
        imgBarreira2.style.height = random + "px";
        console.log(contador);
        return contador++;
    }
}

imgBarreira1.addEventListener("animationiteration", () => HeightUpBar());
imgBarreira2.addEventListener("animationiteration", () => HeightDownBar());
if (contador === 7) {
    console.log(contador);
    contador = 0;
}