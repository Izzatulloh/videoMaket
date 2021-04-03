let menu = document.querySelector(".header__menu-item");
let nav  = document.querySelector(".header__nav");
let body = document.querySelector('body')

menu.addEventListener('click', () => {
    menu.classList.toggle("active")
    nav.classList.toggle("active")
    console.log(menu);
    if (menu.classList.length == 2) {
        body.style.overflow = 'hidden'
        
    } else{
        body.style.overflow = 'auto'
    }
})


let video = document.querySelector("video");
let play = document.querySelector(".fa-play");
let stop = document.querySelector('.fa-stop')
let playerIcon = document.querySelector('.video__player-icon')
let forward = document.querySelector('.fa-forward')
let backward = document.querySelector('.fa-backward')
let volume = document.querySelector('.volume')
let progress = document.querySelector('.progress')
let volumeUpDown = document.querySelector('.fa-volume-up')
let time = document.querySelector('.video__time')
let fullScreen = document.querySelector('.fullScreen')

playerIcon.addEventListener('click', ()=>{
    video__time()
    player()
    playerIcon.style.display = 'none'
})
video.addEventListener('click', () => {
    player()
    playerIcon.style.display = 'none'
})
play.addEventListener('click', () => {
    player()
    playerIcon.style.display = 'none'
})
stop.addEventListener('click', ()=>{
    stopVideo()
})
volume.addEventListener('input', ()=>{
    let vol = volume.value;
    video.volume = vol / 100
    save = volume.value
})
video.addEventListener('timeupdate', ()=>{
    progressUpadate()
  
    playerIcon.style.display = 'none'
    
})
backward.addEventListener('click',()=>{
    speedDownVideo()
    playerIcon.style.display = 'none'
   
})
forward.addEventListener('click',()=>{
    speedUpVideo()
})

progress.addEventListener('click',()=>{
    videoRewind()
})
volumeUpDown.addEventListener('click', ()=>{
    
    volumeUp() 
})
fullScreen.addEventListener('click', ()=>{
    video.requestFullscreen()
})
let speed = 1;
function progressUpadate() {
    let d = video.duration
    let c= video.currentTime
    progress.value = 100 * c / d
}

function player(){
    if( play.classList.contains('fa-play') ){
        play.classList.add('fa-pause');
        play.classList.remove('fa-play');
        playVideo();    
    }
    else {
        play.classList.add('fa-play');
        play.classList.remove('fa-pause');
        pauseVideo();
    }  
}
let save = volume.value
let saveVol = video.volume

function volumeUp(){
    let vol = volume.value;
     video.volume = vol /100
    if( volumeUpDown.classList.contains('fa-volume-up')) {
        volumeUpDown.classList.add('fa-volume-mute');
        volumeUpDown.classList.remove('fa-volume-up');
        video.volume = 0
        volume.value = 0
    }
    else {
        volumeUpDown.classList.add('fa-volume-up');
        volumeUpDown.classList.remove('fa-volume-mute');
        video.volume = saveVol
        volume.value = save
    } 
}
function playVideo() {
    video.play();
}
function pauseVideo() {
    video.pause()
}
function stopVideo() {
    video.pause()
    video.currentTime = 0
    play.classList.add('fa-play');
    play.classList.remove('fa-pause');
    playerIcon.style.display = 'flex'
}
function speedDownVideo() {
    video.play()
    video.playbackRate=speed
    speed -= 0.5 
    if (speed <= 0.5) {
        speed = 0.5
    }
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
}
function speedUpVideo() {
    video.play()
    video.playbackRate = speed;
    speed += 0.5;
    if(speed >= 3){
        speed = 3
    }
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
}

function videoRewind() {
    let width = progress.offsetWidth;
    let offset = event.offsetX;
    progress.value = 100 * offset / width
    video.currentTime = video.duration * (offset/width)
    console.log(width);    
}
video.addEventListener('loadedmetadata', ()=>{
    video__time()
})
video.addEventListener('timeupdate', ()=>{
    video__time()
})
function fixed(number) {
    return number < 10 ? `0${number}` : `${number}` 
}

function video__time() {
    const duration = Number(video.duration.toFixed())
    const current = Number(video.currentTime.toFixed())
    let timer = `${fixed(Math.floor(current / 60))}:${fixed(Math.floor(current % 60))}`
    let dur = `${Math.floor(duration / 60)}:${Math.floor(duration % 60)}`
    time.innerHTML = `${timer} / ${dur}`
}
