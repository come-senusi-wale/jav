const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageInput');
const messsageOut = document.querySelector('#messageOut');



sendBtn.addEventListener('click', sendMessage);

function sendMessage () {
    let content = messageIn.value;

    if (content === ''){
        alert('please enter valid value')
    }
    else{
        messsageOut.innerHTML = content;
        messageIn.value = '';
    }
    
}