console.log("Welcome to spotify");

//initialise
let songindex = 0;
let audioElement = new Audio('songs/1tereliye.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myprogressbar');
let gif= document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songname: "tere liye - Veer Zara", filePath: "songs/1tereliye.mp3", coverPath: "cover/1.jpg"},
    {songname: "Maahi Ve - Highway", filePath: "songs/2maahiVe.mp3", coverPath: "cover/2.jpg"},
    {songname: "Pakeezah - Ungli", filePath: "songs/3Pakeezah.mp3", coverPath: "cover/3.jpg"},
    {songname: "Mere Haath Mein - Fanaa", filePath: "songs/4MereHaathMein.mp3", coverPath: "cover/4.jpg"},
    {songname: "Sahiba - Phillauri", filePath: "songs/5Sahiba.mp3", coverPath: "cover/5.jpg"},
    {songname: "Tum Ho - Rockstar", filePath: "songs/6TumHo.mp3", coverPath: "cover/6.jpg"},
    {songname: "Latoo - Ghajini", filePath: "songs/7Latoo.mp3", coverPath: "cover/7.jpg"},
    {songname: "Kaise Mujhe - Ghajini", filePath: "songs/8KaiseMujhe.mp3", coverPath: "cover/8.jpg"},
    {songname: "Chup Chup Ke - Rush", filePath: "songs/9ChupChupKe.mp3", coverPath: "cover/9.jpg"},
    {songname: "Baarish Ka Asar - Twin Strings", filePath: "songs/10BaarishKaAsar.mp3", coverPath: "cover/10.jpg"}
]
//audioElement.play();

songitems.forEach((element, i)=>{
    //console.log(element, i);
    element.getElementsByClassName("coverimg")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
    //console.log(typeof element);
})
/*
let div = document.querySelector('.container');
songs.forEach((element, i)=>{
    let newDiv = document.createElement("div")
    newDiv.class = "songitem";
    div.appendChild(newDiv);

})

<div class="songitem">
    <img class="coverimg" alt="1">
    <span class="songname"> tere liye </span>
    <span class="songlistplay"><spaclass="timestamp"> <iclass="fas songitemplafa-play-circle"></i> 05:10 </span><span>
</div>
*/

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

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })

}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeallplays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle'); 
    })
})


