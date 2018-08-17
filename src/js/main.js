
//Opens Menu
$(".profile-switching-module").on("click", function(e){
    var container = $(".profile-switching-module");
    container.toggleClass("open");
})

//Closing menu when clicking out
$(window).mouseup(function(e){
    var container = $(".profile-switching-module");

    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        if($('.profile-switching-module').hasClass('open')){
            container.toggleClass("open");
        }
        
    }
});

//Closing menu when clicking on iframe
$('iframe').contents().find("body").on('click', function(event) {     
    var container = $(".profile-switching-module");
    container.toggleClass("open");
});
    