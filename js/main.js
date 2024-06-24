document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');
    const playAudio = () => {
        audio.play().catch(error => {
            console.log('Playback prevented:', error);
        });
    };

    document.body.addEventListener('click', playAudio);
    document.body.addEventListener('touchstart', playAudio);
});