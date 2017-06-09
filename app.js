var firstAndPike = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  averageCookiesPerCustomer: 6.3,
  randomNumberOfCustomersPerHour: function(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  simulatedAmountsOfCookiesPurchasedForEachHour: 
    (averageCookiesPerCustomer * randomNumberOfCustomersPerHour)
  }
}

var seaTacAirport = {
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  averageCookiesPerCustomer: 1.2,
  randomNumberOfCustomersPerHour: function(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
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
