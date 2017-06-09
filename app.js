var firstAndPike = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  averageCookiesPerCustomer: 6.3,
  randomNumberOfCustomersPerHour: function(){
    return Math.floor(Math.random() * (firstAndPike.maxHourlyCustomers - firstAndPike.minHourlyCustomers + 1)) + firstAndPike.minHourlyCustomers;
  }
}

firstAndPike.randomNumberOfCustomersPerHour();

  var firstAndPikeSimulatedAmountsOfCookiesPurchasedPerDay = [];

  var storeNumberHoursOpen = 14;

    for(var i = 0; i < 14; i++){
      var firstAndPikeSimulatedAmountsOfCookiesPurchasedForEachHour =
      Math.floor(firstAndPike.averageCookiesPerCustomer * firstAndPike.randomNumberOfCustomersPerHour());
      firstAndPikeSimulatedAmountsOfCookiesPurchasedPerDay.push(firstAndPikeSimulatedAmountsOfCookiesPurchasedForEachHour);
    }

console.log(firstAndPikeSimulatedAmountsOfCookiesPurchasedPerDay);


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

console.log(simulatedAmountsOfCookiesPurchasedPerDay);


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
