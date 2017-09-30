$(document).ready(function(){


$('img').click(function() {
     var a = $(this).attr("src");
     var b = $(this).attr("ninjasrc");
     
     $(this).attr("src",b);
     $(this).attr("ninjasrc",a);
    
});

});