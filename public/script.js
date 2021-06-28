const cards = document.querySelectorAll('.card-recipes');

cards.forEach(function(card,index) {
    card.addEventListener("click", function(){
        
        const recipeId = card.getAttribute('id');
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

