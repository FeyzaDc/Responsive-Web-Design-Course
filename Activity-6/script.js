var myButton = document.getElementById("myButton");
var delay = 600;
var clickCount = 0;
var level = 1;

setTimeout(function loop() {
    changePosition();
    setTimeout(loop, delay);
}, 600)

function changePosition() {
    const randomX = Math.floor(Math.random() * window.innerWidth / 1.2);
    const randomY = Math.floor(Math.random() * window.innerHeight / 1.2);

    myButton.style.top = `${randomY}px`;
    myButton.style.left = `${randomX}px`;
}

function onClick() {
    clickCount += 1;

    if (clickCount % 3 == 0) {
        level += 1;
        alert(`Level ${level}`);
        delay /= 2;
    }

    if (level == 7) {
        alert(`You won the game !!!`);
        delay = 600;
        level = 1;
    }
}