function solve(array, sortingCriteria) {
    class Ticket{
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let tickets = [];
    for (let destination of array) {
        let [destinationName, price, status] = destination.split('|');
        //price = +price;
        let ticket = new Ticket(destinationName, price, status);
        tickets.push(ticket);
    }
    if (sortingCriteria === 'destination') {
        return tickets.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (sortingCriteria === 'price') {
        return tickets.sort((a, b) => a.price - b.price);
    } else if (sortingCriteria === 'status') {
        return tickets.sort((a, b) => a.status.localeCompare(b.status));
    }
    
    
}
solve(['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'destination')