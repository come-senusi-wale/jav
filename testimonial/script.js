const img = document.querySelector('.img');
const btn = document.querySelectorAll('button');
const name = document.querySelector('.name');
const text =document.querySelector('.text');


let customers = [{
    name:"akinwale",
    img:"url(img/ele.jpg)",
    text:"life is all a bout choice so nobody should disturb  me and every man on earth should mind there business in life like my mother say no one should hot other in this life ok that is true about me so am glad to have you as amother"
},
{
    name:"saheed omoakin",
    img:"url(img/fiv.jpg)",
    text:"conjhsh xgi uiuwui iwuiw njufvuh  jvujwe jiwj auiu aboury uhvvh usfvbbv ujhaaui uhaeiiu njsnun jifjfj jfuifu iduj uidfvjisdf i9sdfi iws9 odjkvn nfjfjfjklslkjnhdfjkdfjkv"
},
{
    name:"sadiq abubakar",
    img:"url(img/six.jpg)",
    text:"life is all a bout choice so nobody should disturb me and every vvh usfvbbv ujhaaui uhaeiiu njsnun  me and every man on earth should mind there business in life like my mother say no one should hot other in this life ok that is true about me so am glad to have you as amother "
},
{
    name:"ajao aburo",
    img:"url(img/one.jpg)",
    text:"conjhsh xgi uiuwui iwuiw njufvuh  jvujwe jiwj auiu aboury uhvvh usfvbbv ujhaaui uhaeiiu nlife is all a bout choice so nobody should disturb me and every man on earth should mind there business in life like my mother say no o"
}];

//console.log(customers[0].img);

index = 0;



btn.forEach(function(item) {
    item.addEventListener('click',function(event) {
        event.preventDefault();
       // console.log(event.target); 
       if (event.target.classList.contains('left-btn')){

        if (index === 0){
            index = customers.length 
        }
           index--;
          // console.log(customers[index].img);

           name.textContent = customers[index].name;
           img.style.background = customers[index].img;
           img.style.backgroundPosition = 'center';
           img.style.backgroundSize = 'cover';
           text.textContent = customers[index].text;
       }


       if (event.target.classList.contains('right-btn')){

        if (index === customers.length - 1){
            index = -1; 
        }
           index++;
          // console.log(customers[index].img);

           name.textContent = customers[index].name;
           img.style.background = customers[index].img;
           img.style.backgroundPosition = 'center';
           img.style.backgroundSize = 'cover';
           text.textContent = customers[index].text;
       }
    })
})