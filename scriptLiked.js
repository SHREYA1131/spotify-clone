console.log("Liked Songs");

//initialise
let songindex = 0;
let audioElement = new Audio('songs/1tereliye.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myprogressbar');
let gif= document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitem'));

let likedSongs = [
    {songname: "tere liye - Veer Zara", filePath: "songs/1tereliye.mp3", coverPath: "cover/1.jpg" , id:1},
    {songname: "Maahi Ve - Highway", filePath: "songs/2maahiVe.mp3", coverPath: "cover/2.jpg", id:2},
    {songname: "Pakeezah - Ungli", filePath: "songs/3Pakeezah.mp3", coverPath: "cover/3.jpg" , id:3},
    {songname: "Mere Haath Mein - Fanaa", filePath: "songs/4MereHaathMein.mp3", coverPath: "cover/4.jpg" , id:4},
    {songname: "Sahiba - Phillauri", filePath: "songs/5Sahiba.mp3", coverPath: "cover/5.jpg",id:5},
    {songname: "Tum Ho - Rockstar", filePath: "songs/6TumHo.mp3", coverPath: "cover/6.jpg",id:6},
    {songname: "Latoo - Ghajini", filePath: "songs/7Latoo.mp3", coverPath: "cover/7.jpg",id:7},
    {songname: "Kaise Mujhe - Ghajini", filePath: "songs/8KaiseMujhe.mp3", coverPath: "cover/8.jpg",id:8},
    {songname: "Chup Chup Ke - Rush", filePath: "songs/9ChupChupKe.mp3", coverPath: "cover/9.jpg",id:9},
    {songname: "Baarish Ka Asar - Twin Strings", filePath: "songs/10BaarishKaAsar.mp3", coverPath: "cover/10.jpg", id:10}
]
//audioElement.play();


let divl = document.getElementsByClassName('songList');
likedSongs.forEach((element, i)=>{
    let newDiv = document.createElement("div");
    divl[0].appendChild(newDiv);
    newDiv.classList.add('songitem');
    
    let img = document.createElement("img");
    img.classList.add('coverimg');
    img.src=element.coverPath;
    newDiv.appendChild(img);
    
    let s1=document.createElement('span');
    s1.classList.add('songname');
    s1.innerText=element.songname;
    newDiv.appendChild(s1);
    let temp = document.createElement('div');
    temp.classList.add('temp');
    let s2=document.createElement('span');
    s2.classList.add('songlistplay');
    let id=element.id;
    s2.innerHTML = `<span class="timestamp"><i class="fas songitemplay fa-play-circle" id="${id}"></i> 05:10</span><div class="dropdown-container" tabindex="-1">
    <div class="three-dots"></div>
    <div class="dropdown">
      <div class="list">
        <div class="dropdownPlaylist">
          <button class="dropbtn">Add to Liked songs</button>
        </div>
        <div class="dropdownPlaylist">
          <button class="dropbtn">Add to My Playlist</button>
          <div class="dropdownPlaylist-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
    </div>
    </div>
  </div>`;
    temp.appendChild(s2);
    newDiv.appendChild(temp);
  console.log(temp);
  newDiv.appendChild(temp);

})

//play/pause
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        //gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        //gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
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

const searchAudio = (str)=>{
    likedSongs.forEach((element, i)=>{
        if(element.id == str)
        {
            try {
                audioElement = new Audio(element.filePath);
                audioElement.load();
                audioElement.play();
                // Update player section song details
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
                let currentImg = document.getElementsByClassName('bottomCoverimg');
                currentImg[0].src = element.coverPath;
                let currentName = document.getElementsByClassName('bottomSongname');
                currentName[0].innerText = element.songname;

                //updateseekbar
                audioElement.addEventListener('timeupdate', ()=>{
                    //console.log('timeupdate');
                     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
                     myProgressBar.value = progress;
                });
            }
            catch(err) {
                console.log(err);
            }
        }
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    let id=element.id;
    element.addEventListener('click', (e)=>{
        console.log(element.id);
        makeallplays();
        audioElement.pause();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle'); 
        searchAudio(id);
    })
})


