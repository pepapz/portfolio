$('.button').click(function(){ 
    var buttonId = $(this).attr('id');
    $('#modal-container').removeAttr('class').addClass('open').addClass(buttonId);
    $('body').addClass('modal-active');
  })
  
  $('#modal-container').click(function(){
    $(this).addClass('out');
    $('body').removeClass('modal-active');
  });