let passarinho = document.getElementById("passarinho");

function moveUp() {
    let top = parseInt(window.getComputedStyle(passarinho).getPropertyValue("top"));
    top -= 25;
    // Esse valor é apenas o tanto X que ele vai subir
    passarinho.style.top = top + "px";
}

// function moveDown() {
//     let top = parseInt(window.getComputedStyle(passarinho).getPropertyValue("top"));
//     top += 50;
//     // Esse valoe é apenas o tanto X que ele vai descer
//     passarinho.style.top = top + "px";
// }


document.addEventListener("keydown", event => {
    if (event.key === "ArrowUp") {
        moveUp();
    }
    
});

