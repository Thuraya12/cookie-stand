'user strict';

let workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

let seattle = {
    minCustomers: 23,
    maxCustomers: 65,
    avgCookiePerCustomer: 6.3,
    custNumber: 0,

    getCustomersPerHour: function () {
        this.custNumber = randomCustNumber(23, 65) + 'customers'

        console.log(this.custNumber);
    }
}  

seattle.getCustomersPerHour();
function randomCustNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let parent = document.getElementById('seattle');
console.log(parent);
let unorderedList = document.createElement('ul');
parent.appendChild(unorderedList);
console.log(unorderedList);



for (let i = 0; i < workHours.length; i++) {
    let listItem = document.createElement('li');
    unorderedList.appendChild(listItem);
    listItem.textContent = workHours[i] + ',' + seattle.getCustomersPerHour();

}

seattle.getCustomersPerHour();









