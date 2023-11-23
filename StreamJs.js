let homeBtn = document.querySelector(".home-btn")
let abtBtn = document.querySelector(".about-btn")
let dldBtn_outer = document.querySelector(".downloadBtn")
let file_name = document.querySelector(".file-name")
let about_nav = document.querySelector(".about-nav")
let links = document.querySelectorAll('.links a')
let abt_chnl = document.querySelector('.abt-chnl')
let timer = 0
// adding under in home btn at first 
homeBtn.classList.add('active');



// when clicking about
abtBtn.addEventListener("click", () => {
    dldBtn_outer.style.display = "none";
    file_name.style.display = "none";
    about_nav.style.display = "block"


})
// when clicking home
homeBtn.addEventListener("click", () => {
    dldBtn_outer.style.display = "flex";
    file_name.style.display = "block";
    window.location.href = "#main";
    about_nav.style.display = "none"

})


// btn animations 
let dldBtn = document.querySelectorAll('.downloadBtn button')

timer = 0
links.forEach((i) => {
    i.style.animation = `linksBtnAn 2s ease ${timer}s infinite `

    timer += 0.3
})
dldBtn.forEach((i) => {
    i.style.animation = `strtLoad 1s ease ${timer}s forwards, linksBtnAn 2s ease ${timer}s infinite `
    timer += 0.3
})
timer = 0

abt_chnl.addEventListener("click", () => {
    console.log(timer, " hii");
    links.forEach((i) => {
        i.style.animation = `linksBtnAn 2s ease ${timer}s infinite , strtLoad 1s ease ${timer}s forwards`

        timer += 0.3
    })
    timer = 0
})



// ################################

function toggleWidth(element) {
    // Remove 'active' class from all links
    var links = document.querySelectorAll('.about-nav a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });

    // Add 'active' class to the clicked link
    element.classList.add('active');
}
function toggleWidthnav(element) {
    // Remove 'active' class from all links
    var links = document.querySelectorAll('.nryt a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });

    // Add 'active' class to the clicked link
    element.classList.add('active');
    var links = document.querySelectorAll('.about-nav a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    let wlcm = document.querySelector(".wlcm")
    wlcm.classList.add('active');
    console.log(sec1);
}


// #####################################

Shery.mouseFollower();
Shery.makeMagnet(".magnet");

// #####################################



// #####################################
// file name showing 
var div = document.getElementById('myDiv');
var text = div.textContent;

if (text.length > 300) {
    div.textContent = text.slice(0, 300) + "....";
}


// video player 
const controls = [
    'play-large',
    'rewind', 'play',
    'fast-forward',
    'progress',
    'current-time',
    'duration',
    'mute',
    'volume',
    'captions',
    'settings',
    'pip',
    'airplay',
    'download',
    'fullscreen'
];
document.addEventListener('DOMContentLoaded', () => {
    const player = Plyr.setup('.player', { controls });
});




// < disabling right click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});
document.addEventListener('keydown', function (e) {
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.key === 'u') ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
    ) {
        e.preventDefault();
    }
});



const videolink = window.location.href;
const lazyLink = videolink.replace("/watch/", "/");

function vlc_player() {
    const openLazyLink = lazyLink;
    const openVlc = `vlc://${openLazyLink}`;
    window.location.href = openVlc;
}

function mx_player() {
    const openLazyLink = lazyLink;
    const openMx = `intent:${openLazyLink}#Intent;package=com.mxtech.videoplayer.ad;end`;
    window.location.href = openMx;
}

function playit_player() {
    const openLazyLink = lazyLink;
    const openPlayit = `playit://playerv2/video?url=${openLazyLink}`;
    window.location.href = openPlayit;
}

function s_player() {
    const openLazyLink = lazyLink;
    const openSplayer = `intent:${openLazyLink}#Intent;action=com.young.simple.player.playback_online;package=com.young.simple.player;end`;
    window.location.href = openSplayer;
}

function km_player() {
    const openLazyLink = lazyLink;
    const openKmplayer = `intent:${openLazyLink}#Intent;package=com.kmplayer;end`;
    window.location.href = openKmplayer;
}

function hd_player() {
    const openLazyLink = lazyLink;
    const openHDplayer = `intent:${openLazyLink}#Intent;package=uplayer.video.player;end`;
    window.location.href = openHDplayer;
}

function lazyDownload() {
    const openLazyLink = lazyLink;
    window.location.href = openLazyLink;
}

