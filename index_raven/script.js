// Accordion tables
  (function(){
      var $doc = $(document);

      $doc.on('click', '.accordion-table tr:even', function() {
        
          var $title = $(this);
              $content = $(this).next('tr'),
              $table = $title.parents('.accordion-table');
              
          // Close other sections
          $table.find('tr').filter(':even').not($title).removeClass('is-active');
          $table.find('tr').filter(':odd').not($content).css('max-height', '0');
                
          // Toggle clicked title
          $title.toggleClass('is-active');

          // Toggle content
          if ( $content.css('max-height') == '0px' ) {

            var contentHeight = $content.css('max-height', 'none').height();
             
            // Use queue method for slide-down effect from zero height to content height
            $content.css('max-height', '0').delay(1).queue(function(){
                $content.css('max-height', contentHeight).dequeue();
            });
            
            
          } else {
            $content.css('max-height', '0');
          }
          
      });
  }());



            function initMap() {
                var seoul = {
                    lat: 37.5642135,
                    lng: 127.0016985
                };
                var map = new google.maps.Map(
                    document.getElementById('map'), {
                        zoom: 17,
                        center: seoul
                    });

            }


$(function(){
 $(".nav-toggle").click(function(){
  $(".nav2").slideToggle();
 });
});



$(window).resize(function(){
   if(window.innerWidth<=599){
      $('.nav2').hide();
   }
});




$('.slider').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;
  
  function move(newIndex) {
    var animateLeft, slideLeft;
    
    advance();
    
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
    
    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');
    
    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }
    
    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }
  
  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }
  
  $('.next_btn').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });
  
  $('.previous_btn').on('click', function() {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });
  
  $.each($slides, function(index) {
    var $button = $('<a class="slide_btn">&bull;</a>');
    
    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
  });
  
  advance();
});






$(document).ready(function() {

  //좌우버튼, 동그라미 버튼 연동 //

  var wid = $(".slider").width();
  var i = $(".slider-btn li.on").index();
  var len = $(".panel li").length;

  $(".prev").click(function() {


    if (i == 0) {

      i = len - 1;


    } else {

      i = i - 1;

    }

    showSlide();
  });

  $(".next").click(function() {

    if (i == 3) {

      i = 0;


    } else {

      i = i + 1;

    }
    showSlide();
  });

  $(".slider-btn li").click(function() {

    i = $(this).index();

    showSlide();


  });

  function showSlide() {
    $(".slider-btn li").removeClass("on");
    $(".slider-btn li").eq(i).addClass("on");
    $(".panel li").stop(true, true).fadeOut();
    $(".panel li").eq(i).stop(true, true).fadeIn();
  }


});




$(document).ready(function() {

  //좌우버튼, 동그라미 버튼 연동 //

  var wid = $(".slider2").width();
  var i = $(".slider-btn li.on").index();
  var len = $(".panel2 li").length;

  $(".prev2").click(function() {


    if (i == 0) {

      i = len - 1;


    } else {

      i = i - 1;

    }

    showSlide();
  });

  $(".next2").click(function() {

    if (i == 3) {

      i = 0;


    } else {

      i = i + 1;

    }
    showSlide();
  });

  $(".slider-btn li").click(function() {

    i = $(this).index();

    showSlide();


  });

  function showSlide() {
    $(".slider-btn li").removeClass("on");
    $(".slider-btn li").eq(i).addClass("on");
    $(".panel2 li").stop(true, true).fadeOut();
    $(".panel2 li").eq(i).stop(true, true).fadeIn();
  }


});





