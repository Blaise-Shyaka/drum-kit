window.addEventListener('keydown', e => {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key = "${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

    const keys = document.querySelectorAll('.key');
    
    keys.forEach(key => {
        key.addEventListener('transitionend', e => {
            let pressedKey = e.currentTarget;
            pressedKey.classList.remove('playing');
        });
    });
});