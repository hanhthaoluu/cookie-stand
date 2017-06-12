'use strict';
//
function Store(storeName, minHourlyCustomers, maxHourlyCustomers, averageCookiesPerCustomer) {
  this.storeName = storeName;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  //this.cookiesSoldPerDay = [];
  //simulateAmountsOfCookiesPurchasedForEachHour(this);
  this.cookiesSoldPerDay = simulateAmountsOfCookiesPurchasedForEachHour(this);
  this.totalSales = totalSales(this);
}


/*
function openHours(store){
  var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  for(var i = 0; i < hours.length; i++){
    console.log (hours[i]);
  }
  store.openHours = openHours(store)
}
*/




function totalSales(store){
  var total = 0;
  for(var i = 0; i < 15; i++){
    var total = (total + store.cookiesSoldPerDay[i]);
    console.log('Total Sales Each Day At ' + store + ': ' + total);
  }
  return total;
}

function randomNumberOfCustomersPerHour(store){
  return Math.floor(Math.random() * (store.maxHourlyCustomers - store.minHourlyCustomers + 1)) + store.minHourlyCustomers;
}

function simulateAmountsOfCookiesPurchasedForEachHour(store){
  var cookiesSoldPerDay = [];

  for(var i = 0; i < 15; i++){
    var simulateAmountsOfCookiesPurchasedForEachHour =
    Math.floor(store.averageCookiesPerCustomer * randomNumberOfCustomersPerHour(store));
    cookiesSoldPerDay.push(simulateAmountsOfCookiesPurchasedForEachHour);
    console.log(cookiesSoldPerDay);
  }

  return cookiesSoldPerDay;
}



var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
console.log(firstAndPike);

var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
console.log(seaTacAirport);

var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
console.log(seattleCenter);

var captitolHill = new Store('Capitol Hill', 20, 38, 2.3);
console.log(captitolHill);

var alki = new Store('Alki', 2, 16, 4.6);
console.log(alki);

var stores = [firstAndPike, seaTacAirport, seattleCenter, captitolHill, alki];

var tableEl = document.getElementById('generated-table');

var headerEl = document.createElement('thead');
tableEl.appendChild(headerEl);

var tableBodyEl = document.createElement('tbody');
tableEl.appendChild(tableBodyEl);


function makeRow(store){
  var newRowEl = document.createElement('tr');

  var itemDataEl = document.createElement('td');
  itemDataEl.textContent = store.storeName;
  newRowEl.appendChild(itemDataEl);

  for (var i = 0; i < store.cookiesSoldPerDay.length; i++) {
    itemDataEl = document.createElement('td');
    itemDataEl.textContent = store.cookiesSoldPerDay[i];
    newRowEl.appendChild(itemDataEl);
  }

  itemDataEl = document.createElement('td');
  itemDataEl.textContent = store.totalSales;
  newRowEl.appendChild(itemDataEl);

  tableBodyEl.appendChild(newRowEl);
}

var header = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Daily Location Total'];



function makeHeader(header) {
  //make tr
  var tableRowEl = document.createElement('tr');
  headerEl.appendChild(tableRowEl);

  for (var i = 0; i < header.length; i++) {
    var tableHeadEL = document.createElement('th');
    tableHeadEL.textContent = header[i];
    tableRowEl.appendChild(tableHeadEL);
  }
}

makeHeader(header);

for(var i = 0; i < stores.length; i++) {
  makeRow(stores[i]);
}


//MONDAY LITERALS-OBJECTS LITERALS
/*var firstAndPike = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  averageCookiesPerCustomer: 6.3,
  cookiesSoldPerDay: [],
  totalSales: function(store){
    var total = 0;
    for(var i = 0; i < 15; i++){
      var total = (total + store.cookiesSoldPerDay[i]);
      console.log('Total Sales Each Day At First And Pike = ' + total);
    }
    //return total;
    store.totalSales = total;
  },

  randomNumberOfCustomersPerHour: function(store){
    return Math.floor(Math.random() * (store.maxHourlyCustomers - store.minHourlyCustomers + 1)) + store.minHourlyCustomers;
  },

  simulateAmountsOfCookiesPurchasedForEachHour: function(store){
    for(var i = 0; i < 15; i++){
      var simulateAmountsOfCookiesPurchasedForEachHour =
      Math.floor(store.averageCookiesPerCustomer * store.randomNumberOfCustomersPerHour);
      store.cookiesSoldPerDay.push(simulateAmountsOfCookiesPurchasedForEachHour);
      console.log(store.cookiesSoldPerDay);
    }
  }

}

firstAndPike.simulateAmountsOfCookiesPurchasedForEachHour();
firstAndPike.totalSales();

var ulFirstAndPike = document.getElementById('firstAndPike');
console.log(ulFirstAndPike);
console.log(firstAndPike.cookiesSoldPerDay);
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

for (var i = 0; i < firstAndPike.cookiesSoldPerDay.length; i++){
  var newli = document.createElement('li');
    newli.textContent = hours[i] + ': ' + firstAndPike.cookiesSoldPerDay[i] + ' cookies';
    ulFirstAndPike.appendChild(newli);
}

var newli = document.createElement('li');
  newli.textContent = 'Total Sales Each Day At First And Pike: ' + firstAndPike.totalSales;
  ulFirstAndPike.appendChild(newli);



var seaTacAirport = {
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  averageCookiesPerCustomer: 1.2,
  cookiesSoldPerDay: [],
  totalSales: function(){
    var total = 0;
    for(var i = 0; i < 15; i++){
      var total = (total + this.cookiesSoldPerDay[i]);
      console.log('Total Sales Each Day At SeaTac Airport: ' + total);
    }
    return total;
  },

  randomNumberOfCustomersPerHour: function (){
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;
  },

  simulateAmountsOfCookiesPurchasedForEachHour: function(){
    for(var i = 0; i < 15; i++){
      var simulateAmountsOfCookiesPurchasedForEachHour =
      Math.floor(this.averageCookiesPerCustomer * this.randomNumberOfCustomersPerHour());
      this.cookiesSoldPerDay.push(simulateAmountsOfCookiesPurchasedForEachHour);
      console.log(this.cookiesSoldPerDay);
    }
  }
}

seaTacAirport.simulateAmountsOfCookiesPurchasedForEachHour();
seaTacAirport.totalSales();

var ulSeaTacAirPort = document.getElementById('seaTacAirport');
console.log(ulSeaTacAirPort);
console.log(seaTacAirport.cookiesSoldPerDay);
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

for (var i=0; i < seaTacAirport.cookiesSoldPerDay.length; i++){
  var newli = document.createElement('li');
    newli.textContent = hours[i] + ': ' + seaTacAirport.cookiesSoldPerDay[i] + ' cookies';
    ulSeaTacAirPort.appendChild(newli);
}

  var newli = document.createElement('li');
  newli.textContent = 'Total Sales Each Day At SeaTac Airport: ' + seaTacAirport.totalSales();
  ulSeaTacAirPort.appendChild(newli);

var seattleCenter = {
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 3.7,
  cookiesSoldPerDay: [],
  totalSales: function(){
    var total = 0;
    for (var i = 0; i < 15; i++){
      var total = (total + this.cookiesSoldPerDay[i]);
      console.log('Total Sales Each Day At Seattle Center: ' + total);
    }
    return total;
  },

  randomNumberOfCustomersPerHour: function(){
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;
  },

  simulateAmountsOfCookiesPurchasedForEachHour: function(){
    for(var i = 0; i < 15; i++){
      var simulateAmountsOfCookiesPurchasedForEachHour =
      Math.floor(this.averageCookiesPerCustomer * this.randomNumberOfCustomersPerHour());
      this.cookiesSoldPerDay.push(simulateAmountsOfCookiesPurchasedForEachHour);
      console.log(this.cookiesSoldPerDay);
    }
  }
}

seattleCenter.simulateAmountsOfCookiesPurchasedForEachHour();
seattleCenter.totalSales();

var ulSeattleCenter = document.getElementById('seattleCenter');
console.log(ulSeattleCenter);
console.log(seattleCenter.cookiesSoldPerDay);
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

for (var i = 0; i < seattleCenter.cookiesSoldPerDay.length; i++){
  var newli = document.createElement('li');
  newli.textContent = hours[i] + ': ' + seattleCenter.cookiesSoldPerDay[i] + ' cookies';
  ulSeattleCenter.appendChild(newli);
}

var newli = document.createElement('li');
newli.textContent = 'Total Sales Each Day At Seattle Center: ' + seattleCenter.totalSales();
ulSeattleCenter.appendChild(newli);



var captitolHill = {
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 2.3,
  cookiesSoldPerDay: [],
  totalSales: function(){
    var total = 0;
    for(var i = 0; i < 15; i++){
      var total = total + this.cookiesSoldPerDay[i];
      console.log('Total Sales Each Day At Captitol Hill: ' + total);
    }
    return total;
  },
  randomNumberOfCustomersPerHour: function(min,max){
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;
  },

  simulateAmountsOfCookiesPurchasedForEachHour: function(){
    for( var i = 0; i < 15; i++){
      var simulateAmountsOfCookiesPurchasedForEachHour =
      Math.floor(this.averageCookiesPerCustomer * this.randomNumberOfCustomersPerHour());
      this.cookiesSoldPerDay.push(simulateAmountsOfCookiesPurchasedForEachHour);
      console.log(this.cookiesSoldPerDay);
    }
  }
}

captitolHill.simulateAmountsOfCookiesPurchasedForEachHour();
captitolHill.totalSales();

var ulCapitolHill = document.getElementById('captitolHill');
console.log(ulCapitolHill);
console.log(captitolHill.cookiesSoldPerDay);
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

for (var i = 0; i < captitolHill.cookiesSoldPerDay.length; i++){
  var newli = document.createElement('li');
  newli.textContent = hours[i] + ': ' + captitolHill.cookiesSoldPerDay[i] + ' cookies';
  ulCapitolHill.appendChild(newli);
}

var newli = document.createElement('li');
newli.textContent = 'Total Sales Each Day At Capitol Hill: ' + captitolHill.totalSales();
ulCapitolHill.appendChild(newli);


var alki = {
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  averageCookiesPerCustomer: 4.6,
  cookiesSoldPerDay: [],
  totalSales: function(){
    var total = 0;
    for(var i = 0; i < 15; i++){
      var total = total + this.cookiesSoldPerDay[i];
      console.log('Total Sales Each Day At Alki: ' + total);
    }
    return total;
  },

  randomNumberOfCustomersPerHour: function(){
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;
  },
  simulateAmountsOfCookiesPurchasedForEachHour: function(){
    for(var i = 0; i < 15; i++){
      var simulateAmountsOfCookiesPurchasedForEachHour =
      Math.floor(this.averageCookiesPerCustomer * this.randomNumberOfCustomersPerHour());
      this.cookiesSoldPerDay.push(simulateAmountsOfCookiesPurchasedForEachHour);
      console.log(this.cookiesSoldPerDay);
    }
  }
}

alki.simulateAmountsOfCookiesPurchasedForEachHour();
alki.totalSales();

var ulAlki = document.getElementById('alki');
console.log(ulAlki);
console.log(alki.cookiesSoldPerDay);
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

for (var i = 0; i < alki.cookiesSoldPerDay.length; i++){
  var newli = document.createElement('li');
  newli.textContent = hours[i] + ': ' + alki.cookiesSoldPerDay[i] + ' coookies';
  ulAlki.appendChild(newli);
}

var newli = document.createElement('li');
newli.textContent = 'Total Sales Each Day At Alki: ' + alki.totalSales();
ulAlki.appendChild(newli);
*/
