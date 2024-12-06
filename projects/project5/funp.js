const music1 = document.querySelector('trackalbum1');
const div1 = document.getElementById('div1');
const div2 = document.querySelector('.headerprimium');
const searchbrowser = document.querySelector('.searchbrowser');
const notification = document.querySelector('.notification');
const centrenotification = document.querySelector('.centrenotification');

const songsplaylist = [
  { album1songname: "S.O.S", filepath: "D:/projects/project5/music-folder/Indila - S.O.S.mp3" },
  { album6songname: "Joker", filepath: "D:/projects/project5/music-folder/Indila - Dernière Danse (Clip-- Officiel).mp3" }
]

localStorage.setItem("songsplaylist", JSON.stringify(songsplaylist));


music1.addEventListener('click', () => {
  const musicplaylist = JSON.parse(localStorage.getItem('songsplaylist'));
  console.log(musicplaylist);
})

notification.addEventListener('click', () => {
  if (centrenotification.style.display === 'none') {
    centrenotification.style.display = 'block';
  }
  else {
    centrenotification.style.display = 'none';
  }
});


files.addEventListener('click', () => {
  if (searchbrowser.style.display === 'none') {
    searchbrowser.style.display = 'block';
  }
  else {
    searchbrowser.style.display = 'none';
  }
});


div1.addEventListener('click', () => {
  if (div2.style.display === 'none') {
    div2.style.display = 'block';
  }
  else {
    div2.style.display = 'none';
  }
});