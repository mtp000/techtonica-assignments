//step 11
class TicketType {
  constructor(ticketName, price){
    this.name = name;
    this.price = price;
  }
}

//step 3
class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description
    this.availableTickets = [];
  }

  //step 12
  addAvailableTickets(ticketName, price){
    const newTicket = new TicketType(ticketName, price)
  }
}

//step 4
const eventObj1 = new Event(
  'KLOS Golden Gala',
  'An evening with hollywood vampires'
);

//step 5
const eventObj2 = new Event(
  'Skillet & Sevendust',
  'Victorious war tour'
);

const eventObj3 = new Event(
  'Jenny Lewis',
  'On the line tour 2019'
);

//step 6
const eventArray = new Array()

//step 7
//pushing 1 object
eventArray.push(eventObj1);

//pushing multiple objects
eventArray.push(eventObj1, eventObj2, eventObj3);

//step 8
//console.log(eventArray)

document.addEventListener('DOMContentLoaded', () => {
  //handler when DOM is loaded
  let html = '';
  eventArray.forEach((item) => {
    html += `<li>${item.name} - ${item-description}`;
  })
  document.querySelector('#event').innerHTML = html;
})