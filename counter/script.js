let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCountBtn');
const lowerCount = document.querySelector('#lowercountBtn');

let count = 0;


addCount.addEventListener('click', incrementCount);
lowerCount.addEventListener('click', decrementCount);



function incrementCount () {
    count++;
    counter.innerHTML = count;
    
   if (counter.innerHTML > 0){

        counter.style.color = '#4caf50';
    }
    else if (counter.innerHTML == 0){
        counter.style.color = 'white';
    }


    //animation

    counter.animate([{opacity: '0.2'},{opacity: '1.0'}], {duration: 500, fill: 'forwards'});
}


function decrementCount () {
    count--;
    counter.innerHTML = count;

    if (counter.innerHTML < 0){
       
        counter.style.color = 'red';
    }
    else if (counter.innerHTML == 0){
        counter.style.color = 'white';
    }

    counter.animate([{opacity: '0.2'},{opacity: '1.0'}], {duration: 500, fill: 'forwards'});
}