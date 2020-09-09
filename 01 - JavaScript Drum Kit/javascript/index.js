 const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return; // stop function from running if not valid audio key

    audio.currentTime = 0; //this will rewind audio to the start
    audio.play();
    key.classList.add('playing');
  };

  const removeTransition = (e) => {
    if (e.propertyName !== 'transform') return; // skip if it is not a transform
    e.target.classList.remove('playing');
  }


  document.addEventListener('keydown', playSound);
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
