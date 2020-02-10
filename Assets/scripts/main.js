$(document).ready(function(){
    $(window).on('scroll', function(){
        var scroll_amt = $(this).scrollTop() / ($(document).height() - $(this).height()) * 100 +'%';
        $(".status").css("width", scroll_amt);

        //projects
        var opacity = 0.1 + $(this).scrollTop()*2 / ($(this).height());
        $(".project").css("opacity", opacity);
    })
})