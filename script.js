const button = document.getElementById('play-audio');
const audio = document.getElementById('audio');

button.addEventListener('click', () => {
    audio.play();
});
