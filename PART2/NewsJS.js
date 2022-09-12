$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
});

$(document).ready(function(){
  $("#Carousel").carousel("pause");
  $("#myBtn").click(function(){
    $("#Carousel").carousel("cycle");
  });
  $(".carousel-control-prev").click(function(){
    $("#Carousel").carousel("prev");
  });
  $(".carousel-control-next").click(function(){
    $("#Carousel").carousel("next");
  });
  $("#myBtn2").click(function(){
    $("#Carousel").carousel("pause");
  });
});

$(document).ready(function(){
  $("button").click(function(){
    $(this).button('toggle');
  });
});
