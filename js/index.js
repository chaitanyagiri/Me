$(document).ready(function(){
  var click = 0;
  var str = "Hi, I am Chaitanya and I am a Web-Developer/Designer. I reshape, rethink and redefine your digital experiences.";
   $.each(str.split(''), function(i, letter){
            setTimeout(function(){
                $('.typed-text').append(letter);
            }, 80*i);
        });
  setTimeout(function(){
   $(".km").addClass("animated fadeInUp");
   $(".km").css("display","block");
   }, 80*(str.length+2));
  $(".overlay-switch").click(function(){
    this.classList.toggle("change");
    if(click == 0){ 
      $(".contact").addClass("animated slideInRight");
      $(".overlay1").css("width","108%");
      $(".heade").addClass("animated slideInRight");
      click = 1;
    }
    else{
       $(".contact").removeClass("animated slideInRight");
       $(".overlay1").css("width","0%");
       $(".heade").removeClass("animated slideInRight");
       click = 0;
    }
  });
  $(".km").click(function(){
      $(".thePoke").css("display","none");
      $(".theC").css("display","none");
      $(".theWhat").css("display","none");
      $(".theWho").css("display","block");
      $(".thePoke").removeClass("animated slideInRight");
      $(".theC").removeClass("animated slideInRight");
      $(".theWhat").removeClass("animated slideInRight");
      $(".theWho").addClass("animated slideInRight");
   });
   $("#C").click(function(){
      $(".theWho").css("display","none");
      $(".thePoke").css("display","none");
      $(".theWhat").css("display","none");
      $(".theC").css("display","block");
      $(".thePoke").removeClass("animated slideInRight");
      $(".theWho").removeClass("animated slideInRight");
      $(".theWhat").removeClass("animated slideInRight");
      $(".theC").addClass("animated slideInRight");
      $( ".overlay-switch" ).trigger( "click" );
   });
   $("#who").click(function(){
      $(".thePoke").css("display","none");
      $(".theC").css("display","none");
      $(".theWhat").css("display","none");
      $(".theWho").css("display","block");
      $(".thePoke").removeClass("animated slideInRight");
      $(".theC").removeClass("animated slideInRight");
      $(".theWhat").removeClass("animated slideInRight");
      $(".theWho").addClass("animated slideInRight");
      $( ".overlay-switch" ).trigger( "click" );
   });
  $("#what").click(function(){
      $(".thePoke").css("display","none");
      $(".theC").css("display","none");
      $(".theWho").css("display","none");
      $(".theWhat").css("display","block");
      $(".theC").removeClass("animated slideInRight");
      $(".thePoke").removeClass("animated slideInRight");
      $(".theWho").removeClass("animated slideInRight");
      $(".theWhat").addClass("animated slideInRight");
      $( ".overlay-switch" ).trigger( "click" );
   });
  $("#poke").click(function(){
      $(".thePoke").css("display","block");
      $(".theC").css("display","none");
      $(".theWho").css("display","none");
      $(".theWhat").css("display","none");
      $(".theC").removeClass("animated slideInRight");
      $(".thePoke").addClass("animated slideInRight");
      $(".theWho").removeClass("animated slideInRight");
      $(".theWhat").removeClass("animated slideInRight");
      $( ".overlay-switch" ).trigger( "click" );
   });
});