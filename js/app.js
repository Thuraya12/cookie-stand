'user strict';
const workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];




function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const seattle = {
    locationName: 'seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookiePerCustomer: 6.3,
    customersPerHour: [],
    cookiesPerHour: [],
    total: 0,

    calCustomersPerHour: function () {
        for (let i = 0; i < workHours.length; i++) {
            this.customersPerHour.push(random(this.minCustomers, this.maxCustomers))


        }
    },

    calCookiesPerHour: function () {
        for (let i = 0; i < workHours.length; i++) {
            // console.log(this.customersPerHour[i]);
            this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiePerCustomer));

            this.total+=this.cookiesPerHour[i]
        }
    },

    render: function () {
        let parent = document.getElementById('seattle');
        console.log(parent);
        

        let shopCity = document.createElement('h3');
        parent.appendChild(shopCity);

        shopCity.textContent=this.locationName;
        
        let unorderedList = document.createElement('ul');
        parent.appendChild(unorderedList);
        //console.log(unorderedList);

        for (let i=0;i<workHours.length;i++){
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
            listItem.textContent = `${workHours[i]}: ${this.cookiesPerHour[i]} cookies`
        }
        let totalItem = document.createElement('li');

        unorderedList.appendChild(totalItem);

        totalItem.textContent=`total: ${this.total} cookies`;
    }

}

seattle.calCustomersPerHour();
seattle.calCookiesPerHour();
seattle.render();
console.log(seattle);





/////2////


const tokyo = {
    locationName: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookiePerCustomer: 1.2,
    customersPerHour: [],
    cookiesPerHour: [],
    total: 0,

    calCustomersPerHour: function () {
        for (let i = 0; i < workHours.length; i++) {
            this.customersPerHour.push(random(this.minCustomers, this.maxCustomers))


        }
    },

    calCookiesPerHour: function () {
        for (let i = 0; i < workHours.length; i++) {
            // console.log(this.customersPerHour[i]);
            this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiePerCustomer));

            this.total+=this.cookiesPerHour[i]
        }
    },

    render: function () {
        let parent = document.getElementById('seattle');
        console.log(parent);
        

        let shopCity = document.createElement('h3');
        parent.appendChild(shopCity);

        shopCity.textContent=this.locationName;
        
        let unorderedList = document.createElement('ul');
        parent.appendChild(unorderedList);
        //console.log(unorderedList);

        for (let i=0;i<workHours.length;i++){
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
            listItem.textContent = `${workHours[i]}: ${this.cookiesPerHour[i]} cookies`
        }
        let totalItem = document.createElement('li');

        unorderedList.appendChild(totalItem);

        totalItem.textContent=`total: ${this.total} cookies`;
    }

}

tokyo.calCustomersPerHour();
tokyo.calCookiesPerHour();
tokyo.render();
console.log(tokyo);






////3/////

const dubai = {
    locationName: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookiePerCustomer: 3.7,
    customersPerHour: [],
    cookiesPerHour: [],
    total: 0,

    calCustomersPerHour: function () {
        for (let i = 0; i < workHours.length; i++) {
            this.customersPerHour.push(random(this.minCustomers, this.maxCustomers))


        }
    },

    calCookiesPerHour: function () {
        for (let i = 0; i < workHours.length; i++) {
            // console.log(this.customersPerHour[i]);
            this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiePerCustomer));

            this.total+=this.cookiesPerHour[i]
        }
    },

    render: function () {
        let parent = document.getElementById('seattle');
        console.log(parent);
        

        let shopCity = document.createElement('h3');
        parent.appendChild(shopCity);

        shopCity.textContent=this.locationName;
        
        let unorderedList = document.createElement('ul');
        parent.appendChild(unorderedList);
        //console.log(unorderedList);

        for (let i=0;i<workHours.length;i++){
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
            listItem.textContent = `${workHours[i]}: ${this.cookiesPerHour[i]} cookies`
        }
        let totalItem = document.createElement('li');

        unorderedList.appendChild(totalItem);

        totalItem.textContent=`total: ${this.total} cookies`;
    }

}

dubai.calCustomersPerHour();
dubai.calCookiesPerHour();
dubai.render();
console.log(dubai);



////4/////






const paris = {
    locationName: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookiePerCustomer: 2.3,
    customersPerHour: [],
    cookiesPerHour: [],
    total: 0,

    calCustomersPerHour: function () {
        for (let i = 0; i < workHours.length; i++) {
            this.customersPerHour.push(random(this.minCustomers, this.maxCustomers))


        }
    },

    calCookiesPerHour: function () {
        for (let i = 0; i < workHours.length; i++) {
            // console.log(this.customersPerHour[i]);
            this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiePerCustomer));

            this.total+=this.cookiesPerHour[i]
        }
    },

    render: function () {
        let parent = document.getElementById('seattle');
        console.log(parent);
        

        let shopCity = document.createElement('h3');
        parent.appendChild(shopCity);

        shopCity.textContent=this.locationName;
        
        let unorderedList = document.createElement('ul');
        parent.appendChild(unorderedList);
        //console.log(unorderedList);

        for (let i=0;i<workHours.length;i++){
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
            listItem.textContent = `${workHours[i]}: ${this.cookiesPerHour[i]} cookies`
        }
        let totalItem = document.createElement('li');

        unorderedList.appendChild(totalItem);

        totalItem.textContent=`total: ${this.total} cookies`;
    }

}

paris.calCustomersPerHour();
paris.calCookiesPerHour();
paris.render();
console.log(paris);




///////5/////





const lima = {
    locationName: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avgCookiePerCustomer: 4.6,
    customersPerHour: [],
    cookiesPerHour: [],
    total: 0,

    calCustomersPerHour: function () {
        for (let i = 0; i < workHours.length; i++) {
            this.customersPerHour.push(random(this.minCustomers, this.maxCustomers))


        }
    },

    calCookiesPerHour: function () {
        for (let i = 0; i < workHours.length; i++) {
            // console.log(this.customersPerHour[i]);
            this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiePerCustomer));

            this.total+=this.cookiesPerHour[i]
        }
    },

    render: function () {
        let parent = document.getElementById('seattle');
        console.log(parent);
        

        let shopCity = document.createElement('h3');
        parent.appendChild(shopCity);

        shopCity.textContent=this.locationName;
        
        let unorderedList = document.createElement('ul');
        parent.appendChild(unorderedList);
        //console.log(unorderedList);

        for (let i=0;i<workHours.length;i++){
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
            listItem.textContent = `${workHours[i]}: ${this.cookiesPerHour[i]} cookies`
        }
        let totalItem = document.createElement('li');

        unorderedList.appendChild(totalItem);

        totalItem.textContent=`total: ${this.total} cookies`;
    }

}

lima.calCustomersPerHour();
lima.calCookiesPerHour();
lima.render();
console.log(lima);




















