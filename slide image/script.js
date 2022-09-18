const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');
container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:6000, fill:'forwards'});


let counter = 0;

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);


function nextSlide () {

    if (counter === 8) {
        counter = 0;
    }
    let was = counter++;

    container.style.backgroundImage = `url(img/beg${was}.jpg)`;
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:6000, fill:'forwards'});

}

function prevSlide () {
    let was = counter--;

    if (counter === -1) {
        counter = 7;
    }

    container.style.backgroundImage = `url(img/beg${was}.jpg)`;
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:6000, fill:'forwards'});

}