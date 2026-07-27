const words = [

    "Software Developer",

    "Java Developer",

    "AI/ML Enthusiast",

    "Frontend Developer"

];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect(){

    if(!typingText) return;

    const currentWord = words[wordIndex];

    if(isDeleting){

        typingText.textContent =
            currentWord.substring(0,charIndex--);

    }else{

        typingText.textContent =
            currentWord.substring(0,charIndex++);

    }

    let speed = isDeleting ? 60 : 120;

    if(!isDeleting && charIndex === currentWord.length + 1){

        speed = 1800;

        isDeleting = true;

    }

    if(isDeleting && charIndex === 0){

        isDeleting = false;

        wordIndex++;

        if(wordIndex === words.length){

            wordIndex = 0;

        }

    }

    setTimeout(typeEffect,speed);

}

window.onload = typeEffect;