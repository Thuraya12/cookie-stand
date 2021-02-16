'user strict';
const workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];




function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Shops(name, min, max, average) {

    this.locationName = name;
    this.minCustomers = min;
    this.maxCustomers = max;
    this.avgCookiePerCustomer = average;
    this.customersPerHour = [],
        this.cookiesPerHour = [],
        this.total = 0

}

Shops.prototype.calCustomersPerHour = function () {
    for (let i = 0; i < workHours.length; i++) {
        this.customersPerHour.push(random(this.minCustomers, this.maxCustomers))


    }
}

Shops.prototype.calCookiesPerHour = function () {
    for (let i = 0; i < workHours.length; i++) {
        // console.log(this.customersPerHour[i]);
        this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiePerCustomer));

        this.total += this.cookiesPerHour[i]
    }
}



Shops.prototype.render = function () {
    let parent = document.getElementById('cookieshop');
    console.log(parent);


    let tableElement = document.createElement('table');
    parent.appendChild(tableElement);


    let headerRow = document.createElement('tr');
    parent.appendChild(headerRow);


    let th1 = document.createElement('th');
    headerRow.appendChild(th1);
    th1.textContent = this.locationName;



    for (let i = 0; i < workHours.length; i++) {
        let td1 = document.createElement('td');
        headerRow.appendChild(td1);
        td1.textContent = `${workHours[i]}: ${this.cookiesPerHour[i]} cookies`
    }



    let totalItem = document.createElement('td');

    headerRow.appendChild(totalItem);

    totalItem.textContent = `total: ${this.total} cookies`;


}
let seattle = new Shops('Seattle', 23, 65, 6.3);
let tokyo = new Shops('Tokyo', 3, 24, 1.2);
let dubai = new Shops('Dubai', 11, 38, 3.7);
let paris = new Shops('Paris', 20, 38, 2.3);
let lima = new Shops('Lima', 2, 16, 4.6);

seattle.calCustomersPerHour()
seattle.calCookiesPerHour()
seattle.render()
console.log(seattle);

tokyo.calCustomersPerHour()
tokyo.calCookiesPerHour()
tokyo.render()
console.log(tokyo);

dubai.calCustomersPerHour()
dubai.calCookiesPerHour()
dubai.render()
console.log(dubai);

paris.calCustomersPerHour()
paris.calCookiesPerHour()
paris.render()
console.log(paris);

lima.calCustomersPerHour()
lima.calCookiesPerHour()
lima.render()
console.log(lima);

















