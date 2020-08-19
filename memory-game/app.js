document.addEventListener('DOMContentLoaded', ()=>{
    //card options
    const cardArray =[
        {
            name: 'fries',
            img: 'images/image.png'
        },
        {
            name: 'fries',
            img: 'images/image.png'
        },
        {
            name: 'fries',
            img: 'images/image.png'
        },
        {
            name: 'fries',
            img: 'images/image.png'
        },
        {
            name: 'fries',
            img: 'images/image.png'
        },
        {
            name: 'fries',
            img: 'images/image.png'
        },
        {
            name: 'fries',
            img: 'images/image.png'
        },
        {
            name: 'fries',
            img: 'images/image.png'
        },
        {
            name: 'fries',
            img: 'images/image.png'
        },
        {
            name: 'fries',
            img: 'images/image.png'
        },
        {
            name: 'fries',
            img: 'images/image.png'
        },
        {
            name: 'fries',
            img: 'images/image.png'
        }
    ]

    const grid = document.querySelector('.grid')
    var cardsChosen = []
    var cardsChosenId = 


    function createboard(){
        for (let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            // card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    function flipcard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute
    }
    createboard();
})
