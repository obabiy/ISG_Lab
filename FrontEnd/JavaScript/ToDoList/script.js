let input = document.querySelector('.block__form-input')
let btn = document.querySelector('.block__form-btn')
let blockList = document.querySelector(".block__list")

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(!(input.value === '')){
        createElements(input.value)
        input.value = ''     
    }
})

function createElements(text){
    let newElem = document.createElement('p')
    
    newElem.className = 'block__list-elem'
    newElem.textContent = text;
    
    let deleteSpan = document.createElement('span')
    deleteSpan.className = 'block__list-delete'
    deleteSpan.textContent = 'DELETE'
    deleteSpan.addEventListener('click', () => {
        blockList.removeChild(newElem);
    })
    
    newElem.appendChild(deleteSpan)
    blockList.appendChild(newElem)
}
