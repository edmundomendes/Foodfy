const recipes = document.querySelectorAll('.card-recipes');
const currentPage = location.pathname
const menuItems = document.querySelectorAll('header .links a')

for(item of menuItems){
    if(currentPage.includes(item.getAttribute('href'))){
        item.classList.add('active')
    }
}

for(let recipe of recipes){
    recipe.addEventListener('click',function(){
        const recipeId = recipe.getAttribute('id')
        window.location.href = `/user/recipe/${recipeId}` 
    })
}

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

