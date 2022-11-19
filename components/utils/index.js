/*
    Implementação O(n) do Fisher-Yates Shuffle sem bias.
    https://bost.ocks.org/mike/shuffle
*/
export function shuffleArrayElements(array) {
    const cards = [...array];
    let m = cards.length,
        t,
        i;

    while (m) {
        i = Math.floor(Math.random() * m--);

        t = cards[m];
        cards[m] = cards[i];
        cards[i] = t;
    }

    return cards;
}
