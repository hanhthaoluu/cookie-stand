var firstAndPike = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  averageCookiesPerCustomer: 6.3,
  cookiesSoldPerDay: [],
  randomNumberOfCustomersPerHour: function(){
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;
  },

  simulateAmountsOfCookiesPurchasedForEachHour : function(){
    for(var i = 0; i < 15; i++){
      var firstAndPikeSimulatedAmountsOfCookiesPurchasedForEachHour =
      Math.floor(this.averageCookiesPerCustomer * this.randomNumberOfCustomersPerHour());
      this.cookiesSoldPerDay.push(firstAndPikeSimulatedAmountsOfCookiesPurchasedForEachHour);
      console.log(this.cookiesSoldPerDay);
      //firstAndPikeSimulatedAmountsOfCookiesPurchasedPerDay.push(firstAndPikeSimulatedAmountsOfCookiesPurchasedForEachHour);
    }
  }
}

firstAndPike.simulateAmountsOfCookiesPurchasedForEachHour();
var ulFirstAndPike = document.getElementById('firstAndPike');
console.log(ulFirstAndPike);
console.log(firstAndPike.cookiesSoldPerDay);
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

for (i=0; i<firstAndPike.cookiesSoldPerDay.length; i++){
  var newli = document.createElement('li');
    newli.textContent = hours[i] + ': ' + firstAndPike.cookiesSoldPerDay[i] + ' cookies';
    ulFirstAndPike.appendChild(newli);
}

var seaTacAirport = {
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  averageCookiesPerCustomer: 1.2,
  randomNumberOfCustomersPerHour: function(){
    return Math.floor(Math.random() * (seaTacAirport.maxHourlyCustomers - seaTacAirport.minHourlyCustomers + 1)) + seaTacAirport.minHourlyCustomers;
  }
}

seaTacAirport.randomNumberOfCustomersPerHour();

  var seaTacAirportSimulatedAmountsOfCookiesPurchasedPerDay = [];

  var storeNumberHoursOpen = 14;

    for(var i = 0; i < 14; i++){
      var seaTacAirportSimulatedAmountsOfCookiesPurchasedForEachHour =
      Math.floor(seaTacAirport.averageCookiesPerCustomer * seaTacAirport.randomNumberOfCustomersPerHour());
      seaTacAirportSimulatedAmountsOfCookiesPurchasedPerDay.push(seaTacAirportSimulatedAmountsOfCookiesPurchasedForEachHour);
    }




var seattleCenter = {
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 3.7,
  randomNumberOfCustomersPerHour: function(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}

var captitolHill = {
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 2.3,
  randomNumberOfCustomersPerHour: function(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

var Alki = {
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  averageCookiesPerCustomer: 4.6,
  randomNumberOfCustomersPerHour: function(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
