function writeCards(guests, gift) {
    const cards = []

    for (let i = 0; i < guests.length; i++) {
        cards.push(`Thank you, ${guests[i]}, for the wonderful ${gift} gift!`)
    }

    return cards 
}

function countDown(n) {
    let count = n
    while (count >= 0) {
        console.log(count--)
    }
}