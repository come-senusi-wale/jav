const colorBtn = document.querySelector('.colorBtn');
const bodyBcg  = document.querySelector('body');


const colors = ['yellow', 'red', 'green', '#3b5998'];



colorBtn.addEventListener('click', changeColor);



function changeColor () {
   // bodyBcg.style.backgroundColor = colors[2];
    let randon = Math.floor(Math.random()*colors.length)
    bodyBcg.style.backgroundColor = colors[randon];
}
