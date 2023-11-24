let homeBtn = document.querySelector(".home-btn")
let abtBtn = document.querySelector(".about-btn")
let dldBtn_outer = document.querySelector(".downloadBtn")
let file_name = document.querySelector(".file-name")
let about_nav = document.querySelector(".about-nav")
let bot_btn = document.querySelector('.bot-btn')
let contact_btn = document.querySelector('.contact-btn')
let links = document.querySelectorAll('.links a')
let bot_links = document.querySelectorAll('.bot-link a')
let chnl_link = document.querySelectorAll('.chnl-link a')
let abt_chnl = document.querySelector('.abt-chnl')
let contact = document.querySelectorAll('.contact a')
let timer = 0
// adding under in home btn at first 
homeBtn.classList.add('active');
// when clicking about
abtBtn.addEventListener("click", () => {
    dldBtn_outer.style.display = "none";
    file_name.style.display = "none";
    about_nav.style.display = "block"
    about_nav.style.display = "block"
    about_nav.style.animation = "strtLoad 1s ease 0s forwards"
})
// when clicking home
homeBtn.addEventListener("click", () => {
    dldBtn_outer.style.display = "flex";
    file_name.style.display = "block";
    window.location.href = "#main";
    about_nav.style.animation = "strtLoad 1s ease 0s forwards"
    about_nav.style.display = "none"

})
abt_chnl.addEventListener("click", () => {
    timer = 1
    chnl_link.forEach((i) => {
        i.style.animation = `strtLoad 1s ease ${timer}s forwards, linksBtnAn 2s ease ${timer}s infinite `
        timer += 0.3;
    });
    timer = 0
});

bot_btn.addEventListener("click", () => {
    timer = 1;
    bot_links.forEach((i) => {
        i.style.animation = `linksBtnAn 2s ease ${timer}s infinite ,strtLoad 1s ease ${timer}s forwards`;
        timer += 0.3;
    });

    timer = 0;
})
contact_btn.addEventListener("click", () => {
    timer = 1;
    contact.forEach((i) => {
        i.style.animation = `linksBtnAn 2s ease ${timer}s infinite ,strtLoad 1s ease ${timer}s forwards`;
        timer += 0.3;
    });

    timer = 0;
})

// btn animations 
let dldBtn = document.querySelectorAll('.downloadBtn button')

timer = 0
links.forEach((i) => {
    i.style.animation = `linksBtnAn 2s ease ${timer}s infinite`

    timer += 0.3
})
timer = 0
dldBtn.forEach((i) => {
    i.style.animation = `strtLoad 1s ease ${timer}s forwards, linksBtnAn 2s ease ${timer}s infinite `
    timer += 0.3
})
timer = 0
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
}
// Shery.mouseFollower();
// Shery.makeMagnet(".magnet");
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
    // 'mute',
    // 'volume',
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

// disabling right click
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
const bisallink = videolink.replace("/watch/", "/");

function vlc_player() {
    const openbisallink = bisallink;
    const openVlc = `vlc://${openbisallink}`;
    window.location.href = openVlc;
}

function mx_player() {
    const openbisallink = bisallink;
    const openMx = `intent:${openbisallink}#Intent;package=com.mxtech.videoplayer.ad;end`;
    window.location.href = openMx;
}

function playit_player() {
    const openbisallink = bisallink;
    const openPlayit = `playit://playerv2/video?url=${openbisallink}`;
    window.location.href = openPlayit;
}

function s_player() {
    const openbisallink = bisallink;
    const openSplayer = `intent:${openbisallink}#Intent;action=com.young.simple.player.playback_online;package=com.young.simple.player;end`;
    window.location.href = openSplayer;
}

function km_player() {
    const openbisallink = bisallink;
    const openKmplayer = `intent:${openbisallink}#Intent;package=com.kmplayer;end`;
    window.location.href = openKmplayer;
}

function hd_player() {
    const openbisallink = bisallink;
    const openHDplayer = `intent:${openbisallink}#Intent;package=uplayer.video.player;end`;
    window.location.href = openHDplayer;
}

function lazyDownload() {
    const openbisallink = bisallink;
    window.location.href = openbisallink;
}
