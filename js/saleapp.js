'use strict';
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var firstAndPike = {
  location:'firstAndPike',
  minCustPerHr: 23,
  maxCustPerHr: 65,
  avgCookieSale:6.3,
  cookieSoldPerHr:[],

  custNumPerHr:function(){
    return Math.floor(Math.random()*((this.maxCustPerHr - this.minCustPerHr)+1)+ this.minCustPerHr);
  },
  avgCookiePerCus:function(){
    //average number of cookies per hr
    return this.avgCookieSale*this.custNumPerHr();

  },
  showlocation1:function (){
    var total = 0;
    var pikeContainer = document.getElementById('lists');
    for(var i= 0;i<=hours.length-1;i++){
      var location1 = document.createElement('li');
      var hourCookie = hours[i]+':'+ Math.round(firstAndPike.avgCookiePerCus())+' '+'cookies';
      total = total+firstAndPike.avgCookiePerCus();
      firstAndPike.cookieSoldPerHr.push(hourCookie);
      location1.textContent = hourCookie;
      pikeContainer.appendChild(location1);
    // firstAndPike.cookieSoldPerHr.push(pikeContainer.textContent);
    }
    var totalCookie = 'total:'+total+'cookies';
    firstAndPike.cookieSoldPerHr.push(totalCookie);
    var pikeTotal =document.createElement('li');
    pikeTotal.textContent =totalCookie;
    pikeContainer.appendChild(pikeTotal);
  }

};
firstAndPike.showlocation1();

//location 2
var seaTacAirport = {
  location:'Seatac Airport',
  minCustPerHr: 3,
  maxCustPerHr: 24,
  avgCookieSale:1.2,
  cookieSoldPerHr:[],

  custNumPerHr:function(){
    return Math.floor(Math.random()*((this.maxCustPerHr - this.minCustPerHr)+1)+ this.minCustPerHr);
  },
  avgCookiePerCus:function(){
    //average number of cookies per hr
    return this.avgCookieSale*this.custNumPerHr();

  },
  showlocation2:function (){
    var total = 0;
    var seaContainer = document.getElementById('lists2');
    for(var i= 0;i<=hours.length-1;i++){
      var location2 = document.createElement('li');
      var hourCookie = hours[i]+':'+ Math.round(seaTacAirport.avgCookiePerCus())+' '+'cookies';
      total = total+seaTacAirport.avgCookiePerCus();
      seaTacAirport.cookieSoldPerHr.push(hourCookie);
      location2.textContent = hourCookie;
      seaContainer.appendChild(location2);
    // firstAndPike.cookieSoldPerHr.push(pikeContainer.textContent);
    }
    var totalCookie = 'total:'+total+'cookies';
    seaTacAirport.cookieSoldPerHr.push(totalCookie);
    var seaTacTotal =document.createElement('li');
    seaTacTotal.textContent =totalCookie;
    seaContainer.appendChild(seaTacTotal);
  }

};
seaTacAirport.showlocation2();

//location3


var seattleCenter = {
  location:'Seattle center',
  minCustPerHr: 11,
  maxCustPerHr: 38,
  avgCookieSale:3.7,
  cookieSoldPerHr:[],

  custNumPerHr:function(){
    return Math.floor(Math.random()*((this.maxCustPerHr - this.minCustPerHr)+1)+ this.minCustPerHr);
  },
  avgCookiePerCus:function(){
    //average number of cookies per hr
    return this.avgCookieSale*this.custNumPerHr();

  },
  showlocation3:function (){
    var total = 0;
    var seattleCenterContainer = document.getElementById('lists3');
    for(var i= 0;i<=hours.length-1;i++){
      var location3 = document.createElement('li');
      var hourCookie = hours[i]+':'+ Math.round(seattleCenter.avgCookiePerCus())+' '+'cookies';
      total = total+seattleCenter.avgCookiePerCus();
      seattleCenter.cookieSoldPerHr.push(hourCookie);
      location3.textContent = hourCookie;
      seattleCenterContainer.appendChild(location3);
    // firstAndPike.cookieSoldPerHr.push(pikeContainer.textContent);
    }
    var totalCookie = 'total:'+total+'cookies';
    seattleCenter.cookieSoldPerHr.push(totalCookie);
    var seattleCenterTotal =document.createElement('li');
    seattleCenterTotal.textContent =totalCookie;
    seattleCenterContainer.appendChild(seattleCenterTotal);
  }

};
seattleCenter.showlocation3();



//location 4

var capitolHill = {
  location:'Capitol Hill',
  minCustPerHr: 20,
  maxCustPerHr: 38,
  avgCookieSale:2.3,
  cookieSoldPerHr:[],

  custNumPerHr:function(){
    return Math.floor(Math.random()*((this.maxCustPerHr - this.minCustPerHr)+1)+ this.minCustPerHr);
  },
  avgCookiePerCus:function(){
    //average number of cookies per hr
    return this.avgCookieSale*this.custNumPerHr();

  },
  showlocation4:function (){
    var total = 0;
    var capitolHillContainer = document.getElementById('lists4');
    for(var i= 0;i<=hours.length-1;i++){
      var location4 = document.createElement('li');
      var hourCookie = hours[i]+':'+ Math.round(capitolHill.avgCookiePerCus())+' '+'cookies';
      total = total+capitolHill.avgCookiePerCus();
      capitolHill.cookieSoldPerHr.push(hourCookie);
      location4.textContent = hourCookie;
      capitolHillContainer.appendChild(location4);
    // firstAndPike.cookieSoldPerHr.push(pikeContainer.textContent);
    }
    var totalCookie = 'total:'+total+'cookies';
    capitolHill.cookieSoldPerHr.push(totalCookie);
    var capitolHillTotal =document.createElement('li');
    capitolHillTotal.textContent =totalCookie;
    capitolHillContainer.appendChild(capitolHillTotal);
  }

};
capitolHill.showlocation4();


//location5


var alki = {
  location:'Alki',
  minCustPerHr: 2,
  maxCustPerHr: 16,
  avgCookieSale:4.6,
  cookieSoldPerHr:[],

  custNumPerHr:function(){
    return Math.floor(Math.random()*((this.maxCustPerHr - this.minCustPerHr)+1)+ this.minCustPerHr);
  },
  avgCookiePerCus:function(){
    //average number of cookies per hr
    return this.avgCookieSale*this.custNumPerHr();

  },
  showlocation5:function (){
    var total = 0;
    var alkiContainer = document.getElementById('lists5');
    for(var i= 0;i<=hours.length-1;i++){
      var location5 = document.createElement('li');
      var hourCookie = hours[i]+':'+ Math.round(alki.avgCookiePerCus())+' '+'cookies';
      total = total+alki.avgCookiePerCus();
      alki.cookieSoldPerHr.push(hourCookie);
      location5.textContent = hourCookie;
      alkiContainer.appendChild(location5);
    // firstAndPike.cookieSoldPerHr.push(pikeContainer.textContent);
    }
    var totalCookie = 'total:'+total+'cookies';
    alki.cookieSoldPerHr.push(totalCookie);
    var alkiTotal =document.createElement('li');
    alkiTotal.textContent =totalCookie;
    alkiContainer.appendChild(alkiTotal);
  }

};
alki.showlocation5();







