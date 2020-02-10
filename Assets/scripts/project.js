$(document).ready(function(){
    $(window).on('scroll', function(){
        var scroll_amt = $(this).scrollTop()*2 / $(this).height() * 2;
        var width = 'calc(100vw - (' + (4 - scroll_amt) + '*#{$v-margin})* 1vw)';
        var width1 = 100 - ((4-scroll_amt) * 11.6766467066) + 'vw';
        var margin = '4vh (' + (2 - scroll_amt) + '*$v-margin * 1vw)';
        var margin1 = ((2 - scroll_amt) * 11.6766467066) + 'vw';
        //var margin1 = 
        if(scroll_amt<=2)
        {
            console.log(scroll_amt);
            console.log(margin1);
            $(".project").css("width", width1);
            $(".project").css("margin-left", margin1);
            $(".project").css("margin-right", margin1);
        }
    })
})
