$(function(){
  $("#godown").hide();
  $(".process-percent").animate({"width":"100%"},4000,"linear",function(){
      $(".loading-page").hide();
      $("#godown").show();
      $("#iSlider").animate({"opacity":"1"},400);
  });

  //更多滑屏事件
})