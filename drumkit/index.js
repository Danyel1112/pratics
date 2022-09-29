'use strict';

const sound = {
    'A' : 'boom.wav',
    'S' : 'clap.wav',
    'D' : 'hithat.wav',
    'F' : 'kick.wav',
    'G' : 'openhat.wav',
    'H' : 'ride.wav',
    'J' : 'snare.wav',
    'K' : 'tink.wav',
    'L' : 'tom.wav'
}

const createDiv = (text) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = text;
    div.id = text;
    document.getElementById('container').appendChild(div);
}

const display = (sound) => Object.keys(sound).forEach(createDiv);

const playSound = (word) => {
    const audio = new Audio(`./sound/${sound[word]}`);
    audio.play();
}

const activeDiv = (event) => {
    const word = event.target.id;
    const allowWord = sound.hasOwnProperty(word);
    if (allowWord) {
        playSound(word)
    }
}

display(sound);

document.getElementById('container')
    .addEventListener('click', activeDiv);