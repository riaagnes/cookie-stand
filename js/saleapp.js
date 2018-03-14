'use strict';
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

//contains all the locations
var allLocations=[];

var totalCookieSalePerHr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var grantTotal=[];



var cookieStoreTable = document.getElementById('Cookies');
var cookieForm = document.getElementById('storeForm');
function Locations (location,minCustPerHr,maxCustPerHr,avgCookieSale){
  this.location =location;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgCookieSale = avgCookieSale;
  this.hourlyCookieSale = [];
  this.calculateHourlySale();
  this.addToTotalCookiePerHr();
  this.totCookie();

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
Locations.prototype.totCookie = function(){
  var total=0;
  for(var i = 0; i<hours.length;i++){
    total=total+this.hourlyCookieSale[i];
  }
  grantTotal.push(total);

  return total;

};


Locations.prototype.addToTotalCookiePerHr=function(){
  for(var i =0;i<this.hourlyCookieSale.length;i++){
    totalCookieSalePerHr[i]=totalCookieSalePerHr[i]+this.hourlyCookieSale[i];
  }
};
//test code
var grantTotals = function(){
  var total=0;
  for(var i = 0; i<grantTotal.length;i++){
    total=total+grantTotal[i];
  }
  return total;

};





Locations.prototype.render = function(){

  // this.calculateHourlySale();
  //this.addToTotalCookiePerHr();
 
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
  tdElement.textContent=this.totCookie();
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
  var footerTrElement = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = 'TOTAL';
  footerTrElement.appendChild(tdElement);

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