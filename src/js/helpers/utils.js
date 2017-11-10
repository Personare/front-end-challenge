export const getBreakpoint = () => {
    // get the content property of body:before
    let breakpoint = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');

    return breakpoint;
};

export const computeTotalCols = (currentGridCollumn) => {
    let currentBreakpoint = getBreakpoint();
    let totalCols;

    if (currentBreakpoint === 'tablet') {
        totalCols = 6;
    } else if (currentBreakpoint === 'phone') {
        totalCols = 3;
    } else if (currentBreakpoint === 'smallPhone') {
        totalCols = 2;
    }

    if (totalCols === currentGridCollumn) {
        return false;
    }

    return totalCols;
};

export const manipulateData = (data) => {
    let cards = data.cards.map((card, index)=> {
        card.flipped = false;
        card.position = index;
        return card;
    });

    // returning new object
    return {
        ...data,
        cards: cards
    };
};

export const shuffleCardsPositions = (cards) => {
    let cardsArray = [ ...cards ];

    let currentIndex = cardsArray.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = cardsArray[currentIndex].position;
        cardsArray[currentIndex].position = cardsArray[randomIndex].position;
        cardsArray[randomIndex].position = temporaryValue;
    }

    return cardsArray;
};

export const waitAnimation = (id) => {
    let element = document.querySelector('.CardList');

    return new Promise((resolve, reject) => {
        setTimeout( () => {
            element.addEventListener("transitionend", function animationFinished() {
                element.removeEventListener("transitionend", animationFinished);
                return resolve();
            }, false);
        }, 200);
    });
};

export const fireEvent = (type) => {
    const evt = window.document.createEvent('UIEvents');

    evt.initUIEvent(type, true, false, window, 0);
    window.dispatchEvent(evt);
};
