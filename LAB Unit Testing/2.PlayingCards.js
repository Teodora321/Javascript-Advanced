function makeCard(face, suit) {
    const cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const cardSuits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };
    if (!cardFaces.includes(face)) {
        throw new Error('Error')
    }
    if (!cardSuits.hasOwnProperty(suit)) {
        throw new Error('Error')
    }
    let result = {
        face,
        suit: cardSuits[suit],
        toString: function () {
            return this.face + this.suit;
        }
    };
    return result;
    
}
let card = makeCard('A', 'q');
console.log(card.toString());
