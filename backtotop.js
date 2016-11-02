$(document).ready(function(){
    //
    var btt = $('.omhoog');
    
    btt.on('click', function(e){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    })
    
    $(window).on('scrolled', function(){
        var self = $(this),
            height = self.height(),
            top = self.scrollTop();
        
        if(top > height){
            if(!btt.is(':visible')){
                btt.show();
            }
            else {
                btt.hide();
            }
        }
    });
})