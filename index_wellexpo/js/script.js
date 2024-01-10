(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let birthday = "Sep 30, 2021 00:00:00",
      countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");

          headline.innerText = "It's my birthday!";
          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)
  }());





$(function(){
 $(".nav-tog").click(function(){
  $(".nav4").slideToggle();
 });
});



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

