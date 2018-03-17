'use strict';
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

//contains all the locations.Everytime when the location is created using the constructor we append the new locatio into the alllocations
var allLocations=[];

//it cotains total cookiesale per hr for all locations for example.8am total cookie sale per hr will contain the sum of 8am sale at 1st and pike ,8am sale at seatac airport till 8 am sale at nth location.
var totalCookieSalePerHr=[];
//it contains sum of all hourlysales in each location.dailylocationtotal is calculated using calculatedailylocationtotal.it is populated when the render fn is called
var dailyLocationTotal=[];



var cookieStoreTable = document.getElementById('Cookies');
var cookieForm = document.getElementById('storeForm');
function Locations (location,minCustPerHr,maxCustPerHr,avgCookieSale){
  this.location =location;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgCookieSale = avgCookieSale;
  //hourly sale for this location.for example this array will contain 6am sale for 1st and pike,7am sale for 1st and pike till 8 pm sales for 1st and pike.Inside the object of seatac airport,it will contain 6 am sale for seatac till 8 pm sale for the same.this list is calculated by calculatehourlysale fn using locations's other properties like mincustperhr,max....
  this.hourlyCookieSale = [];
  this.calculateHourlySale();
  //this.addToTotalCookiePerHr();
  // this.totCookie();

  allLocations.push(this);
}

Locations.prototype.custNumPerHr = function(){
  return Math.floor(Math.random()*((this.maxCustPerHr - this.minCustPerHr)+1)+ this.minCustPerHr);
};

Locations.prototype.avgCookiePerCus = function(){
  return Math.round(this.avgCookieSale*this.custNumPerHr());

};

Locations.prototype.calculateHourlySale = function(){
  for(var i =0;i<hours.length;i++){
    this.hourlyCookieSale.push(this.avgCookiePerCus());
  }

};
//adding daily location total of each location. By adding each elements of hourlycookiesale array.this is called from the render fn when each row is renderd.
Locations.prototype.calculateDailyLocationTotal = function(){
  var total=0;
  for(var i = 0; i<hours.length;i++){
    total=total+this.hourlyCookieSale[i];
  }
  dailyLocationTotal.push(total);
  return total;
};

/*
Locations.prototype.addToTotalCookiePerHr=function() {
  for(var i =0;i<hours.length;i++){
    if(totalCookieSalePerHr[i] === undefined){
      totalCookieSalePerHr[i] =0;  
    }
    //get the hour total
    totalCookieSalePerHr[i] =totalCookieSalePerHr[i] + this.hourlyCookieSale[i];
  }
};
*/

//sum all the daily location total to get the grand  total.this is called from the footer fn.
var grantTotals = function(){
  var grandTotal=0;
  for(var i = 0; i<allLocations.length; i++){
    grandTotal=grandTotal + dailyLocationTotal[i];
  }
  return grandTotal;

};

//this fn caculates the hourly total.by taking the sum of cookie sale for each hr in all location.
var calculateHourlyTotal = function(){
  for(var i=0;i<hours.length;i++){
    var total =0;
    for(var j =0;j<allLocations.length;j++){
      total=total+allLocations[j].hourlyCookieSale[i];
    }
    totalCookieSalePerHr.push(total);
  }
};





Locations.prototype.render = function(){

  //this.calculateHourlySale();
  // this.addToTotalCookiePerHr();

  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = this.location;
  trElement.appendChild(tdElement);

  for(var i = 0;i<this.hourlyCookieSale.length;i++){
    tdElement=document.createElement('td');
    tdElement.textContent = this.hourlyCookieSale[i];
    trElement.appendChild(tdElement);
  }

  tdElement=document.createElement('td');
  tdElement.textContent=this.calculateDailyLocationTotal();
  trElement.appendChild(tdElement);
  cookieStoreTable.appendChild(trElement);
};



new Locations('First & Pike',23,65,6.3);
new Locations('SeaTac Airport',3,24,1.2);
new Locations('Seattle Center',11,38,3.7);
new Locations('Capitol Hill',20,38,3.2);
new Locations('Alki',2,16,4.6);


function makeHeaderRow(){
  var headerTrElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = '';
  headerTrElement.appendChild(thElement);

  for(var i = 0;i<hours.length;i++){
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    headerTrElement.appendChild(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = 'Daily Location Total';
  headerTrElement.appendChild(thElement);
  cookieStoreTable.appendChild(headerTrElement);
}

function makeFooterRow(){
  calculateHourlyTotal();
  var footerTrElement = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = 'TOTAL';
  footerTrElement.appendChild(tdElement);

  //
  for(var i=0;i<hours.length;i++){
    tdElement=document.createElement('td');
    tdElement.textContent = totalCookieSalePerHr[i] ;
    //console.log(tdElement);
    footerTrElement.appendChild(tdElement);
  }
  tdElement=document.createElement('td');
  tdElement.textContent =grantTotals();
  footerTrElement.appendChild(tdElement);
  cookieStoreTable.appendChild(footerTrElement);

}


function renderAllLocation(){
  for(var i =0;i<allLocations.length;i++){
    allLocations[i].render();
    console.log(allLocations);
  }
}
function addNewLocation(event){
  event.preventDefault();
  console.log(event.target.location.value);

  var newLocation = event.target.location.value;
  var newMinCustm = event.target.minCust.value;
  var newMaxCustm = event.target.maxCust.value;
  var avgCookie = event.target.avgSale.value;

  new Locations(newLocation,newMinCustm,newMaxCustm,avgCookie);

  cookieStoreTable.innerHTML ='';
  makeHeaderRow();
  dailyLocationTotal=[];
  renderAllLocation();

  makeFooterRow();
}



cookieForm.addEventListener('submit',addNewLocation);



makeHeaderRow();
renderAllLocation();
// firstAndPike.render();
// seaTacAirport.render();
// seattleCenter.render();
// capitolHill.render();
// alki.render();
makeFooterRow();