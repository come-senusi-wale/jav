const feedBack = document.querySelector('.alert');
const itemForm = document.getElementById('inputForm');
const itemInput = document.querySelector('.input');
const itemList = document.querySelector('.items');
const clearItem = document.querySelector('.clear-btn');

//let itemData = [];

let itemData = JSON.parse(localStorage.getItem("lists")) || [];

if(itemData.length > 0){
    itemData.forEach(function(single) {

        itemList.insertAdjacentHTML('beforeend', `
        <div class="item-list">
            <p class="item-content">${single}</p>
            <p class="item-complete">@@</p>
            <p class="item-edit">%%</p>
            <p class="item-delete">&&</p>
        </div>
        `);

        handleItems(single);

    })
}

itemForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let textInput = itemInput.value;

    //console.log(textInput);

    if (textInput === '') {
        feedBack.classList.add('alert-danger');
        feedBack.innerHTML = '<p>please enter valid data<p/>'
        setTimeout(function(){
            feedBack.classList.remove('alert-danger');
        }, 3000)
    }
    else{
        addItem(textInput);
        itemInput.value = '';

        feedBack.classList.add('alert-sucess');
        feedBack.innerHTML = '<p>one item added<p/>'
        setTimeout(function(){
            feedBack.classList.remove('alert-sucess');
        }, 3000)

        // add to arrey

        itemData.push(textInput);
       // console.log(itemData);


       //add to local storaage

       localStorage.setItem("lists", JSON.stringify(itemData));



       // add event listener to input

       handleItems(textInput);

    }
});


/*function showFeedback(text, value) {
    feedBack.classList.add('alert-${value}');
    feedBack.innerHTML = `<p>${text}</p>`
}*/

function addItem (value) {
    const div = document.createElement('div');
    div.classList.add('item-list');

    div.innerHTML = `<p class="item-content">${value}</p>
                     <p class="item-complete">@@</p>
                     <p class="item-edit">%%</p>
                     <p class="item-delete">&&</p>`;

    itemList.appendChild(div);
};

function handleItems (textInput) {
    const listItem = itemList.querySelectorAll('.item-list');
    //console.log(listItem);

    listItem.forEach(function(list) {
        if(list.querySelector('.item-content').textContent === textInput) {

            list.querySelector('.item-complete').addEventListener('click', function () {

                list.querySelector('.item-content').classList.toggle('completed');
                //console.log(this);
                this.classList.toggle('text-dec');
            })

            list.querySelector('.item-edit').addEventListener('click', function() {

                itemInput.value = textInput;
                itemList.removeChild(list);

                //console.log(itemData);

                itemData = itemData.filter(function(item) {
                    return item !== textInput;
                })

                //console.log(itemData);

                //local storage
                localStorage.setItem("lists", JSON.stringify(itemData));

            })

            list.querySelector('.item-delete').addEventListener('click', function() {

                itemList.removeChild(list);

                //console.log(itemData);

                itemData = itemData.filter(function(item) {
                    return item !== textInput;
                })

                //console.log(itemData);

                //local storage
                localStorage.setItem("lists", JSON.stringify(itemData));


                feedBack.classList.add('alert-danger');
                feedBack.innerHTML = '<p>one item deleted<p/>'
                setTimeout(function(){
                feedBack.classList.remove('alert-danger');
                }, 3000)
            })
        }
    })
};


clearItem.addEventListener('click', function(){
    itemData = [];

    //local storage
    localStorage.removeItem("lists");

    const items = itemList.querySelectorAll('.item-list');
    if(items.length > 0) {
        items.forEach(function(item) {
            itemList.removeChild(item);
        })
    }

    //console.log(itemData);

    feedBack.classList.add('alert-danger');
    feedBack.innerHTML = '<p>All items remove<p/>'
    setTimeout(function(){
    feedBack.classList.remove('alert-danger');
    }, 3000)

    


})