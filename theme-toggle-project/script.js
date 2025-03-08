// first approach
function changeTheme(btnId){
    if(btnId === 'blue-button'){
        document.querySelector('body').style.backgroundColor = 'blue';
    }else if(btnId === 'green-button'){
        document.querySelector('body').style.backgroundColor = 'green';
    }else if(btnId === 'yellow-button'){
        document.querySelector('body').style.backgroundColor = 'yellow';
    }else if(btnId === 'black-button'){
        document.querySelector('body').style.backgroundColor = 'black';
    }else if(btnId === 'white-button'){
        document.querySelector('body').style.backgroundColor = 'white';
    }
}

// second approach
function toggleTheme(btn){
    document.querySelector('body').style.backgroundColor = btn.textContent;
    const pElements = document.querySelectorAll('p');
    pElements.forEach((pElement) => {
        if(btn.textContent === 'black'){
            pElement.style.color = 'white';
        } else pElement.style.color = 'black';
    })
}

// third approach
const buttonElements = document.querySelectorAll('.btns');
const pElements = document.querySelectorAll('p');
buttonElements.forEach((button) => {
    button.addEventListener('mouseover',() => {
        const buttonId = button.getAttribute('id');
        event.target.style.backgroundColor = buttonId;
        buttonId === 'black' ? event.target.style.color = 'white' : event.target.style.color = 'black';
        /*if(buttonId === 'black') event.target.style.color ='white';
            this could also work 
        */
        button.addEventListener('mouseout',() => {
            event.target.style.backgroundColor = '';
            event.target.style.color = '';
            
            button.addEventListener('click', () => {
                document.querySelector('body').style.backgroundColor = buttonId;
                    pElements.forEach((pElement) => {
                     
                        buttonId === 'black' ? pElement.style.color = 'white' : pElement.style.color = 'black';
                        /* if(buttonId === 'black'){
                            pElement.style.color = 'white';
                         }else pElement.style.color = 'black';
                        */
                    })
            })
        })
    })
})