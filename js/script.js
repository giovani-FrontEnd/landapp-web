let links = document.querySelectorAll(".nav-link");

links.forEach(link => {
    link.addEventListener('click', (e) => {
        links.forEach(link => {
            link.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
    })
})

let loadingPage = document.querySelector(".loading-page");

window.addEventListener('DOMContentLoaded', () => {
    loadingPage.classList.add("active");

    setTimeout(() => {
        loadingPage.classList.remove("active");
    }, 1000)
})

let navbar = document.querySelector(".navbar");

window.onscroll = () => {
    if(window.scrollY > 0) {
        navbar.classList.add("active");
    } else{
        navbar.classList.remove("active");
    }
}

let play = document.querySelector(".landing .play");
let overlay = document.querySelector(".overlay");
let closeVideo = document.querySelector(".overlay .close-video");

play.addEventListener('click', () => {
    overlay.classList.add("active");
});

closeVideo.addEventListener('click', () => {
    overlay.classList.remove("active");
})