let passarinho = document.getElementById("passarinho");

function moveUp() {
    let up = parseInt(window.getComputedStyle(passarinho).getPropertyValue("up"));
    up += 100;
    // Esse valor é apenas o tanto X que ele vai subir
    passarinho.style.top = up + "px";
}

function movedown() {
    let down = parseInt(window.getComputedStyle(passarinho).getPropertyValue("down"));
    down += 100;
    // Esse valoe é apenas o tanto X que ele vai descer
    passarinho.style.down = down + "px";
}


document.addEventListener("keydown", event => {
    if (event.key === "backspace") {
        moveUp();
    } //aqui vc pode por qualquer TECLA do TECLADO
    return 1;


});

