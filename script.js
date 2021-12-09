console.log("Welcome to spotify");

//initialise
let songindex = 0;
let audioElement = new Audio('1tereliye.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myprogressbar');
let gif= document.getElementById('gif');

let songs = [
    {songname: "tere liye", filePath: "songs/1tereliye.mp3", coverPath: "cover/1.jpg"},
    {songname: "tere liye", filePath: "songs/2maahiVe.mp3", coverPath: "cover/2.jpg"},
    {songname: "tere liye", filePath: "songs/3Pakeezah.mp3", coverPath: "cover/3.jpg"},
    {songname: "tere liye", filePath: "songs/4MereHaathMein.mp3", coverPath: "cover/4.jpg"},
    {songname: "tere liye", filePath: "songs/5Sahiba.mp3", coverPath: "cover/5.jpg"},
    {songname: "tere liye", filePath: "songs/6TumHo.mp3", coverPath: "cover/6.jpg"},
    {songname: "tere liye", filePath: "songs/7Latoo.mp3", coverPath: "cover/7.jpg"},
    {songname: "tere liye", filePath: "songs/8KaiseMujhe.mp3", coverPath: "cover/8.jpg"},
    {songname: "tere liye", filePath: "songs/9ChupChupKe.mp3", coverPath: "cover/9.jpg"},
    {songname: "tere liye", filePath: "songs/10BaarishKaAsar.mp3", coverPath: "cover/10.jpg"},
]
//audioElement.play();

//play/pause
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    //console.log('timeupdate');
    //updateseekbar
     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
     //console.log(progress);
     myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})