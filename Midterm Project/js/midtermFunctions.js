var map = L.map('map', {
  center: [40.000, -75.1090],
  zoom: 11
});
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


var FoodAccess = "https://gist.githubusercontent.com/anonymous/fbffb3ed6594daccafa631e4f4fc8ec6/raw/5ff69d0b2db63ed31578b61cd86083e0b68de055/foodaccess.json";
var Boundary ="https://gist.githubusercontent.com/anonymous/eb5a6386acba87e14f8f4262cb4d0488/raw/7d073e2bab2e0a2cb55e1b19e0b9439bc833c886/boundary.json";
var foodmarket="https://gist.githubusercontent.com/anonymous/e709b425a63500e46b94c29357acf937/raw/fd14dfef638f4806075807d90147850be4ffa319/market.json";
var FarmerMarket;
var cityboundary;
var LocationFilter=[];
var LFilter;
var zip=null;
var layerone;
var layertwo;
var layerthree;
var layerfour;
var layerfive;
var layersix;

var myStyle = function(feature) {
        switch (feature.properties.ACCESS_) {
            case 'No Access': return {color: "#1f888b"};
            case 'Low Access': return {color: "#ffa09e"};
}
};

var myStyle_all = function(feature) {
return {color: "#6a6a6a",opacity: 0.2};

};

var showResults = function() {
  if(PageNum==1){
    $('#page1').hide();
    $('#results').show();
  }
  if(PageNum==4){
    $('#information').show();
  }
};


var eachFeatureFunction = function(layer) {
  layer.on('click', function (event) {
    if(PageNum==1){    console.log(2);
        switch (layer.feature.properties.ACCESS_) {
            case 'No Access': $('.access').text("No Access");
            break;
            case 'Low Access': $('.access').text("Low Access");
            break;
        }
        map.fitBounds(event.target.getBounds());
        console.log(layer.feature.properties.ACCESS_);
        showResults();}
  });
};

var Showinformation = function(layer) {
  layer.on('click', function (event) {
    if(PageNum==4){
      $('.name').text(layer.feature.properties.NAME);
      $('.neighborhood').text(layer.feature.properties.NEIGHBORHOOD);
      $('.address').text(layer.feature.properties.ADDRESS);
      map.fitBounds(event.target.getBounds());
      showResults();}
  });
};

$(document).ready(function() {
  $.ajax(Boundary).done(function(data) {
    var parsedData = JSON.parse(data);
    cityboundary= L.geoJson(parsedData, {
      style: myStyle_all,
    }).addTo(map);
    cityboundary.eachLayer(eachFeatureFunction);
    });
});
