$(function () {
    function prev() {
        $('.authorslide > li:last').prependTo('.authorslide');
        $('.authorslide').css('margin-left', -1244);
        $('.authorslide').stop().animate({
            marginLeft: 0
        }, 800);
    }

    function next() {
        $('.authorslide').stop().animate({
            marginLeft: -1244
        }, 800, function () {
            $('.authorslide > li:first').appendTo('.authorslide');
            $('.authorslide').css({
                marginLeft: 0
            });
        });
    }
    $(".author-prev").click(function () {
        prev()
    })
    $(".author-next").click(function () {
        next()
    })
})