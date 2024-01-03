// script.js

const text = document.querySelector(".sec-text");

const Load = () => {
    setTimeout(() => {
        text.textContent = "Web Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Youtuber";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 8000);
}

Load();

setInterval(() => {
    Load();
}, 12000);
