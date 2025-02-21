const sounds = {
    sound1: new Audio('sounds/sound1.mp3'),
    sound2: new Audio('sounds/sound2.mp3'),
    sound3: new Audio('sounds/sound3.mp3')
};

document.querySelectorAll('.sound-button').forEach(button => {
    button.addEventListener('click', () => {
        const sound = sounds[button.dataset.sound];
        if (sound) {
            sound.currentTime = 0;
            sound.play();
        }
    });
});
