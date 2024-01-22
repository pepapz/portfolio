$('.button').click(function(){ 
    var buttonId = $(this).attr('id');
    $('#modal-container').removeAttr('class').addClass('open').addClass(buttonId);
    $('body').addClass('modal-active');
  })
  
  $('#modal-container').click(function(){
    $(this).addClass('out');
    $('body').removeClass('modal-active');
  });

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  setScreenSize();
  window.addEventListener('resize', setScreenSize);