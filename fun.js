$(document).ready(function(){
    $(window).scroll(function() {
		
        if ($(".navbar").offset().top > 90) {
            $(".navbar-fixed-top").addClass("topu");
        } else {
            $(".navbar-fixed-top").removeClass("topu");
        }
    });
});