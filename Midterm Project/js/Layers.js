var SlideOne =function(){
  $(document).ready(function() {
     $.ajax(FoodAccess).done(function(data) {
       var parsedData = JSON.parse(data);
  layerone=L.geoJson(parsedData, {
                   style: myStyle,
                 }).addTo(map);
  layerone.eachLayer(eachFeatureFunction);
  });
  });
      };
  SlideOne();

var SlideTwo= function(){
  setview();
 var myFilter = function(feature) {
   if(feature.properties.ACCESS_=="Low Access"){
     return true;
   }
     };
    $(document).ready(function() {
       $.ajax(FoodAccess).done(function(data) {
         var parsedData = JSON.parse(data);
    layertwo=L.geoJson(parsedData, {
                     style: myStyle,
                     filter: myFilter
                   }).addTo(map);
    layertwo.eachLayer(eachFeatureFunction);
  });
});
};

var SlideThree= function(){
 setview();
 var myFilter = function(feature) {
   if(feature.properties.ACCESS_=="No Access"){
     return true;
   }
     };
    $(document).ready(function() {
       $.ajax(FoodAccess).done(function(data) {
         var parsedData = JSON.parse(data);
    layerthree=L.geoJson(parsedData, {
                     style: myStyle,
                     filter: myFilter
                   }).addTo(map);
    layerthree.eachLayer(eachFeatureFunction);
  });
});
};

var SlideFour= function(){
  setview();
  var myStyle_market = function(feature) {
          switch (feature.properties.ACCEPT_PHILLY_FOOD_BUCKS) {
              case 'X': return {color: "#8b1f1f"};
              case null: return {color: "#ffd800"};
  }
  };
  $(document).ready(function() {
    $.ajax(FoodAccess).done(function(data) {
      var parsedData = JSON.parse(data);
      layerone= L.geoJson(parsedData, {
        style: myStyle,
      }).addTo(map);
      layerone.eachLayer(eachFeatureFunction);
    });
  });
  var geojsonMarkerOptions = {
    radius: 6,
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
  $(document).ready(function() {
     $.ajax(foodmarket).done(function(data) {
       var parsedData = JSON.parse(data);
layerfour=L.geoJson(parsedData, {
                   style: myStyle_market,
                   pointToLayer: function(feature,latlng) {
      return L.circleMarker(latlng, geojsonMarkerOptions);
  }
}).addTo(map);
layerfour.eachLayer(Showinformation);
});
});
};

var SlideFive= function(){
     setview();
     var myStyle_market = function(feature) {
             switch (feature.properties.ACCEPT_PHILLY_FOOD_BUCKS) {
               case 'X': return {color: "#8b1f1f"};
               case null: return {color: "#ffd800"};
     }
     };
     $(document).ready(function() {
       $.ajax(FoodAccess).done(function(data) {
         var parsedData = JSON.parse(data);
         layerone= L.geoJson(parsedData, {
           style: myStyle,
         }).addTo(map);
         layerone.eachLayer(eachFeatureFunction);
       });
     });
     var geojsonMarkerOptions = {
       radius: 6,
       weight: 1,
       opacity: 1,
       fillOpacity: 0.8
   };
     $(document).ready(function() {
        $.ajax(foodmarket).done(function(data) {
          var parsedData = JSON.parse(data);
   layerfive=L.geoJson(parsedData, {
                      style: myStyle_market,
                      pointToLayer: function(feature,latlng) {
         return L.circleMarker(latlng, geojsonMarkerOptions);
     }
   }).addTo(map);
   layerfive.eachLayer(Showinformation);
   });
   });
};

var SlideSix= function(){
  setview();
  var myStyle_market = function(feature) {
          switch (feature.properties.ACCEPT_PHILLY_FOOD_BUCKS) {
            case 'X': return {color: "#8b1f1f"};
            case null: return {color: "#ffd800"};
  }
  };
  $(document).ready(function() {
    $.ajax(FoodAccess).done(function(data) {
      var parsedData = JSON.parse(data);
      layerone= L.geoJson(parsedData, {
        style: myStyle,
      }).addTo(map);
      layerone.eachLayer(eachFeatureFunction);
    });
  });
  var geojsonMarkerOptions = {
    radius: 6,
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
  $(document).ready(function() {
     $.ajax(foodmarket).done(function(data) {
       var parsedData = JSON.parse(data);
layersix=L.geoJson(parsedData, {
                   style: myStyle_market,
                   pointToLayer: function(feature,latlng) {
      return L.circleMarker(latlng, geojsonMarkerOptions);
  }
}).addTo(map);
layersix.eachLayer(Showinformation);
});
});
  $('#CenterCity').click(function() {
    CenterCityView();
  });
  $('#NorthPhilly').click(function() {
    NorthPhillyView();
  });
  $('#WestPhilly').click(function() {
    WestPhillyView();
  });
  $('#UniversityCity').click(function() {
    UniversityCityView();
  });
  };

$(document).ready(function(){
$('#search').click(function() {
  zip=$('#zipcode-input').val();
  var myStyle_market = function(feature) {
    switch (feature.properties.ACCEPT_PHILLY_FOOD_BUCKS) {
      case 'X': return {color: "#8b1f1f"};
      case null: return {color: "#ffd800"};
  }
  };
  var myFilter_market = function(feature) {
    if(feature.properties.ZIP==zip){
      return true;
    }
      };
  if(zip.length!==0){
    remove(layerfive);
  }
  var geojsonMarkerOptions = {
    radius: 6,
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
    $(document).ready(function() {
       $.ajax(foodmarket).done(function(data) {
         var parsedData = JSON.parse(data);
  LFilter=L.geoJson(parsedData, {
                     style: myStyle_market,
                     filter: myFilter_market,
                     pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
});
LFilter.addTo(map);
LocationFilter.push(LFilter);
  });
});
});

$('#Show').click(function() {
  reremove(LocationFilter);
  remove(LFilter);
  console.log(LocationFilter);
});
});

$('#Fullview').click(function() {
    if(PageNum==1){
      setview();
      $('#page1').show();
      $('#results').hide();
    }
    else if(PageNum==4){
      setview();
      $('#information').hide();
    }
    else{
      setview();
    }
  });


var setview=function(){
  map.setView([40.000, -75.1090],11);
};

var CenterCityView=function(){
  map.setView([39.953222, -75.163755],14);
};

var NorthPhillyView=function(){
  map.setView([39.992443, -75.153979],13);
};

var WestPhillyView=function(){
  map.setView([39.965136, -75.224531],14);
};

var UniversityCityView=function(){
  map.setView([39.952376, -75.193217],15);
};
