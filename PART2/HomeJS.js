var slides=document.querySelector('.slideshow_pics').children;
var nextSlide=document.querySelector(".right_arrow");
var prevSlide=document.querySelector(".left_arrow");
var totalSlides=slides.length;
var index=0;
nextSlide.onclick=function () {
     next("next");
}
prevSlide.onclick=function () {
     next("prev");
}
function next(direction){
   if(direction=="next"){
      index++;
       if(index==totalSlides){
        index=0;
       }
   }
   else{
           if(index==0){
            index=totalSlides-1;
           }
           else{
            index--;
           }
    }
  for(i=0;i<slides.length;i++){
          slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}

$('button').click(function(){
  $('.alert').addClass("show");
  $('.alert').removeClass("hide");
  $('.alert').addClass("showAlert");
  setTimeout(function(){
    $('.alert').removeClass("show");
    $('.alert').addClass("hide");
  },1700);
});
$('.button_close').click(function(){
  $('.alert').removeClass("show");
  $('.alert').addClass("hide");
});

$(document).ready(function(){
  $("#spacex").click(function(event){
    alert("Taking you to the SpaceX.com!");
  });
  $("#blueorigin").click(function(event){
    alert("Taking you to the BlueOrigin.com!");
  });
  $("#NASA").click(function(event){
    alert("Taking you to the NASA.com!");
  });
});

$(document).ready(function(){
  $("button").click(function(){
    $(this).button('toggle');
  });
});
