const memes = document.querySelectorAll('.meme');
const bgm = document.getElementById('bgm');

memes.forEach(meme => {
  meme.addEventListener('click', () => {
    const soundSrc = meme.dataset.sound;

    // Extract just the filename for comparison (fixes browser path differences)
    const currentSrc = bgm.src.split('/').pop();
    const newSrc = soundSrc.split('/').pop();

    if (currentSrc === newSrc && !bgm.paused) {
      bgm.pause();
    } else {
      bgm.src = soundSrc;
      bgm.play();
    }
  });
});
