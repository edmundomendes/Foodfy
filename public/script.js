const cards = document.querySelectorAll('.card-recipes');

cards.forEach(function(card,index) {
    card.addEventListener("click", function(){
        window.location.href = `/recipes/${index}`;        
    });
});

const hide = document.querySelectorAll('.hide')
const buttons = document.querySelectorAll('.button')

for(let i = 0; i < buttons.length; i++ ){
    buttons[i].addEventListener('click',function(){
        if(buttons[i].innerHTML == 'Esconder'){
            hide[i].classList.remove('active')
            buttons[i].innerHTML = 'Mostrar'
        }else{
            hide[i].classList.add('active')
            buttons[i].innerHTML = 'Esconder'
        }
    })
}

/* Admin */

function addIngredient(){
    const ingredients = document.querySelector("#ingredients")
    const fieldContainer = document.querySelectorAll('.ingredient')
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true)
    
    if(newField.children[0].value == '') return false
    
    newField.children[0].value = ''
    ingredients.appendChild(newField)
}

document.querySelector('.add-ingredient')
document.addEventListener('click',addIngredient)

function addStep(){
    const preparation = document.querySelector("#preparation")
    const fieldContainer = document.querySelectorAll('.preparation')
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true)
    
    if(newField.children[0].value == '') return false
    
    newField.children[0].value = ''
    preparation.appendChild(newField)
}

document.querySelector('.add-preparation')
document.addEventListener('click',addStep)
