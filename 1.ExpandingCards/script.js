const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener('click' , () => {
        removeActiveClasses();  //firstly remove the active class from all the cards
        card.classList.add("active")
    })
})


function removeActiveClasses() {
    cards.forEach(card => {
        card.classList.remove("active")
    })
}