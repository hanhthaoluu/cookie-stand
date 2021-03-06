'use strict';

var firstAndPike = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  averageCookiesPerCustomer: 6.3,
  cookiesSoldPerDay: [],
  totalSales: function(){
    var total = 0;
    for(var i = 0; i < 15; i++){
      var total = (total + this.cookiesSoldPerDay[i]);
      console.log('Total Sales Each Day At First And Pike = ' + total);
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
  newli.textContent = 'Total Sales Each Day At First And Pike: ' + firstAndPike.totalSales();
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
