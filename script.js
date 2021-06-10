const modalOverlay = document.querySelector('.modal-overlay') 
const cards = document.querySelectorAll('.card-recipes')

for(let card of cards){
    card.addEventListener('click',function(){
        const image_class = card.getAttribute('id')
        const title = card.querySelector('.recipes-title').innerText 
        const chef = card.querySelector('.recipes-chef').innerText


        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src =`/assets/${image_class}`
        modalOverlay.querySelector('.title-modal').innerHTML = `${title}`
        modalOverlay.querySelector('.chef-modal').innerHTML = `${chef}`
    })
}

document.querySelector('.close-modal').addEventListener('click',function(){
    modalOverlay.classList.remove('active')
})
