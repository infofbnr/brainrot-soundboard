const sounds = {
    sound1: new Audio('sounds/sound1.mp3'),
    sound2: new Audio('sounds/sound2.mp3'),
    sound3: new Audio('sounds/sound3.mp3'),
    sound4: new Audio('sounds/sound4.mp3'),
    sound5: new Audio('sounds/sound5.mp3'),
    sound6: new Audio('sounds/sound6.mp3'),
    sound7: new Audio('sounds/sound7.mp3'),
    sound8: new Audio('sounds/sound8.mp3'),
    sound9: new Audio('sounds/sound9.mp3'),
    sound10: new Audio('sounds/sound10.mp3'),
    sound11: new Audio('sounds/sound11.mp3'),
    sound12: new Audio('sounds/sound12.mp3'),
    sound13: new Audio('sounds/sound13.mp3'),
    sound14: new Audio('sounds/sound14.mp3'),
    sound15: new Audio('sounds/sound15.mp3'),
    sound16: new Audio('sounds/sound16.mp3')
};

let currentSound = null; // Track the currently playing sound

document.querySelectorAll('.sound-button').forEach(button => {
    button.addEventListener('click', () => {
        const sound = sounds[button.dataset.sound];

        if (currentSound && currentSound !== sound) {
            currentSound.pause();
            currentSound.currentTime = 0;
        }

        sound.currentTime = 0;
        sound.play();
        currentSound = sound;
    });
});

document.getElementById('stop-music').addEventListener('click', () => {
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
        currentSound = null;
    }
});