let passarinho = document.getElementById("passarinho");
let barreira1 = document.getElementById("barreira1");
let barreira2 = document.getElementById("barreira2");
let jumping = 0;

function jump() {
    jumping = 1;
    let count = 0;
    let jumpInterval = setInterval(function () {
        let passarinhoTop = parseInt(window.getComputedStyle(passarinho).getPropertyValue("top"));
        if ((passarinhoTop > 6) && (count < 15)) { passarinho.style.top = (passarinhoTop - 5) + "px"; }

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
    if (passarinhoTop > 600) { alert("Game over.") }
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
// function HeightUpBar() {
//     let random = +((Math.random()*100)+100);
//     barreira1.style.top = random + "px";
// }
// function HeightDownBar(){
//     let random = -((Math.random()*100)+100);
//     barreira2.style.bottom = random + "px";
// }
// barreira1.addEventListener("animationiteration", () => HeightUpBar());
// barreira2.addEventListener("animationiteration", () => HeightDownBar());
