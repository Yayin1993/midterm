var SlideNum = function(Number) {
  if (Number==1){
    $('#page1').show();
    $('#page2').hide();
    $('#page3').hide();
    $('#page4').hide();
    $('#page5').hide();
    $('#page6').hide();
    $('.legend1').show();
    $('.legend2').hide();
    $('#buttonPre').hide();
    $('#buttonNext').show();
  }
  else if(Number==2){
    $('#page1').hide();
    $('#results').hide();
    $('#page2').show();
    $('#page3').hide();
    $('#page4').hide();
    $('#page5').hide();
    $('#page6').hide();
    $('.legend1').show();
    $('.legend2').hide();
    $('#buttonPre').show();
    $('#buttonNext').show();
  }
  else if(Number==3){
    $('#page1').hide();
    $('#results').hide();
    $('#page2').hide();
    $('#page3').show();
    $('#page4').hide();
    $('#page5').hide();
    $('#page6').hide();
    $('.legend1').show();
    $('.legend2').hide();
    $('#buttonPre').show();
    $('#buttonNext').show();
  }
  else if(Number==4){
    $('#page1').hide();
    $('#results').hide();
    $('#page2').hide();
    $('#page3').hide();
    $('#page4').show();
    $('#page5').hide();
    $('#page6').hide();
    $('.legend1').hide();
    $('.legend2').show();
    $('#buttonPre').show();
    $('#buttonNext').show();
  }
  else if(Number==5){
    $('#page1').hide();
    $('#results').hide();
    $('#page2').hide();
    $('#page3').hide();
    $('#page4').hide();
    $('#page5').show();
    $('#page6').hide();
    $('.legend1').hide();
    $('.legend2').show();
    $('#buttonPre').show();
    $('#buttonNext').show();
  }
  else if(Number==6){
    $('#page1').hide();
    $('#results').hide();
    $('#page2').hide();
    $('#page3').hide();
    $('#page4').hide();
    $('#page5').hide();
    $('#page6').show();
    $('.legend1').hide();
    $('.legend2').show();
    $('#buttonPre').show();
    $('#buttonNext').hide();
  }
};
var PageNum=1;

var remove=function(data){
  _.each(data._layers, function(markers){
      map.removeLayer(markers);
  });
};

var reremove=function(data){
  _.each(data, function(layer){
      map.removeLayer(layer);
  });
};

$(document).ready(function(){
  SlideNum(PageNum);
$('#buttonNext').click(function() {
  PageNum=PageNum+1;
  SlideNum(PageNum);
  console.log(PageNum);
  if(PageNum==2){
  SlideTwo();
  remove(layerone);
  }
  else if(PageNum==3){
  SlideThree();
  remove(layertwo);
  }
  else if(PageNum==4){
  SlideFour();
  remove(layerthree);
  }
  else if(PageNum==5){
  SlideFive();
  remove(layerone);
  remove(layerfour);
    }
  else if(PageNum==6){
  SlideSix();
  if(zip!==null)  {
  reremove(LocationFilter);
  remove(LFilter);
}
    remove(layerfive);
  remove(layerone);
  }
  return PageNum;
});

$('#buttonPre').click(function() {
  PageNum=PageNum-1;
  SlideNum(PageNum);
  console.log(PageNum);
  if(PageNum==5){
  SlideFive();
  remove(layerone);
  remove(layersix);
  }
  if(PageNum==4){
  SlideFour();
  if(zip!==null)
  {
  reremove(LocationFilter);
  remove(LFilter);
}
  remove(layerone);
  remove(layerfive);
  }
  else if(PageNum==3){
  SlideThree();
  remove(layerfour);
  remove(layerone);
  }
  else if(PageNum==2){
  SlideTwo();
  remove(layerthree);
  }
  else if(PageNum==1){
  remove(layertwo);
  SlideOne();
  }
  return PageNum;
});
});
