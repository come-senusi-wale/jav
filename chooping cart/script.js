const module = document.querySelector('.module');
const imgContainer = document.querySelector('.img-container');
const images = document.querySelectorAll('.photo');
const close = document.querySelector('.close');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let imageList = [];
let counter = 0;


images.forEach(function(img) {
    imageList.push(img.src);
});

//console.log(imageList);

images.forEach(function(img) {
    img.addEventListener('click', function(event) {
        module.classList.add('show');

        let srcon = event.target.src;
        //console.log(src);

        counter = imageList.indexOf(srcon);
        //console.log(counter);
        imgContainer.style.background = `url(${srcon})`;
        imgContainer.style.backgroundPosition = 'center';
        imgContainer.style.backgroundSize = 'cover';
        imgContainer.style.backRepeat = 'noRepeat';
    })
})



close.addEventListener('click', function() {
    module.classList.remove('show');
})


leftBtn.addEventListener('click', function(){
    counter--;

    if(counter < 0){
        counter = imageList.length - 1;
    }

    imgContainer.style.background = `url(${imageList[counter]})`;
    imgContainer.style.backgroundPosition = 'center';
    imgContainer.style.backgroundSize = 'cover';
    imgContainer.style.backRepeat = 'noRepeat';
    //console.log(counter);
})

rightBtn.addEventListener('click', function(){
    counter++;

    if(counter > imageList.length - 1){
        counter = 0;
    }

    imgContainer.style.background = `url(${imageList[counter]})`;
    imgContainer.style.backgroundPosition = 'center';
    imgContainer.style.backgroundSize = 'cover';
    imgContainer.style.backRepeat = 'noRepeat';
    //console.log(counter);
})