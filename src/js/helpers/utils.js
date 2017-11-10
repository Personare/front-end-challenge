export const getBreakpoint = () => {
    // get the content property of body:before
    let breakpoint = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');

    return breakpoint;
};

export const manipulateData = (data) => {
    let cards = data.cards.map((card, index)=> {
        card.flipped = false;
        card.position = index;
        return card;
    });

    return cards;
};

export const shuffleCardsPositions = (cards) => {
    console.log(cards);
    let currentIndex = cards.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = cards[currentIndex].position;
        cards[currentIndex].position = cards[randomIndex].position;
        cards[randomIndex].position = temporaryValue;
    }

    return cards
};

export function waitAnimation(id) {
    let element = document.querySelector('.CardList');

    return new Promise((resolve, reject) => {
        setTimeout( () => {
            element.addEventListener("transitionend", function animationFinished() {
                element.removeEventListener("transitionend", animationFinished);
                return resolve();
            }, false);
        }, 200)
    });
}

export const fireEvent = (type) => {
    console.log("fire event!");

    const evt = window.document.createEvent('UIEvents');
    evt.initUIEvent(type, true, false, window, 0);
    window.dispatchEvent(evt);
};


window.fireEvent = fireEvent;
