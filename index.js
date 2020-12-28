let button = document.querySelectorAll('.drum');

//detecting button click
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function() {
        let buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        makeAnimation(buttonInnerHTML);
    });
}

//detecting key press
document.addEventListener('keypress', function(event) {
    playSound(event.key);
    makeAnimation(event.key);
})

function playSound(key) {
    switch (key) {
        case 'w':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case 'a':
            let tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            let tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            let tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            let crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case 'k':
            let kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        case 'l':
            let snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        default:
            alert('You clicked wrong key or button');
    }
}


function makeAnimation(currentKey) {
    let activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function() {
        activeButton.classList.remove('pressed');
    }, 100);
}