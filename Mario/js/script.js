const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const cloud = document.querySelector('.cloud')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 700)
}

const loop = setInterval(() => {   
    
    // mario.style.opacity = 1;
    // mario.style.opacity = 0;

    const pipePosition = pipe.offsetLeft;
    const cloudPosition = cloud.offsetLeft;
    const marioBottomPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const marioWidth = +window.getComputedStyle(mario).width.replace('px', '');

    if (pipePosition <= marioWidth && pipePosition > 0 && marioBottomPosition <= pipe.scrollHeight) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`;
        
        mario.style.bottom = `${marioBottomPosition}px`;
        
        mario.src='./images/game-over.png';
        mario.classList.add('game-over');

        clearInterval(loop);
    }
    
},10)





document.addEventListener('keydown', jump)
