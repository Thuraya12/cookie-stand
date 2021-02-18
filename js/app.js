'user strict';
const workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];




function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let shops=[];
function Shops(name, min, max, average) {

    this.locationName = name;
    this.minCustomers = min;
    this.maxCustomers = max;
    this.avgCookiePerCustomer = average;
    this.customersPerHour = [],
    this.cookiesPerHour = [],
    this.totalDailyCookies = 0;
    shops.push(this);

}

Shops.prototype.calCustomersPerHour = function () {
    for (let i = 0; i < workHours.length; i++) {
        this.customersPerHour.push(random(this.minCustomers, this.maxCustomers));


    }
}

Shops.prototype.calCookiesPerHour = function () {
    for (let i = 0; i < workHours.length; i++) {
        // console.log(this.customersPerHour[i]);
        this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiePerCustomer));

        this.totalDailyCookies += this.cookiesPerHour[i]
    }
}


let seattle = new Shops('Seattle', 23, 65, 6.3);
let tokyo = new Shops('Tokyo', 3, 24, 1.2);
let dubai = new Shops('Dubai', 11, 38, 3.7);
let paris = new Shops('Paris', 20, 38, 2.3);
let lima = new Shops('Lima', 2, 16, 4.6);






let parent = document.getElementById('cookieshop');
console.log(parent);

let tableElement = document.createElement('table');
parent.appendChild(tableElement);


function header(){
    let headerRow=document.createElement('tr');
    tableElement.appendChild(headerRow);


    let th1=document.createElement('th');
    headerRow.appendChild(th1);
    th1.textContent= 'Name';

    for (let i=0; i<workHours.length;i++){
        let thItem=document.createElement('th');
        headerRow.appendChild(thItem);
        thItem.textContent=workHours[i];
    }


    let totalHeader=document.createElement('th');
    headerRow.appendChild(totalHeader);
    totalHeader.textContent='Daily Location Total'
}


Shops.prototype.render=function (){
    let dataRow=document.createElement('tr');
    tableElement.appendChild(dataRow);
   
    let shopCity=document.createElement('td');
    dataRow.appendChild(shopCity);
    shopCity.textContent=this.locationName;

    for (let i=0; i<workHours.length; i++){
        let shopsData=document.createElement('td');
        shopsData.textContent=this.cookiesPerHour[i];
        dataRow.appendChild(shopsData);
    }


    let eachShopData=document.createElement('td');
    dataRow.appendChild(eachShopData);
    eachShopData.textContent=this.totalDailyCookies
}




let footer=function (){
    let footerRow=document.createElement('tr');
    tableElement.appendChild(footerRow);

    let thFooter=document.createElement('th');
    footerRow.appendChild(thFooter);
    thFooter.textContent="Totals"


    let totalOfTotal=0
    for (let i=0; i<workHours.length; i++){
        let eachHourTotal=0;
        
         for (let j=0; j<shops.length; j++){
             eachHourTotal+= shops[j].cookiesPerHour[i];
             totalOfTotal+=shops[j].cookiesPerHour[i];
         }

         let footerth1=document.createElement('th');
         footerRow.appendChild(footerth1);
         footerth1.textContent=eachHourTotal;

    }
    let lastTd=document.createElement('th');
    footerRow.appendChild(lastTd);
    lastTd.textContent=totalOfTotal
}



header()

for (let i=0; i<shops.length; i++){
    shops[i].calCustomersPerHour();
    shops[i].calCookiesPerHour();
    shops[i].render();
}
console.log(shops);

footer();





let newLocations = document.getElementById('newLocations');
newLocations.addEventListener('submit', submitter)

function submitter(event){
    event.preventDefault();}
