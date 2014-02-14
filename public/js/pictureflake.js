var etx = {
    init: function () {
        etx.callPictureFlake();
    },
    callPictureFlake: function(){
            window.setInterval(function(){
                        etx.pictureFlake();
            }, 10);
    },
    pictureFlake: function(){
        // let set some bloody vars
        var stageWidth = $(window).width();
        var stageHeight = $(window).height();
        var randomEntry = Math.ceil(Math.random()*stageWidth);
        var pic = randomEntry % 5;
        // ok time to create and animate this stupid thing.
        $('#'+pic).css('left', randomEntry).animate({
                "top": "+=" + stageHeight,
                opacity: 0
        }, 5000, function() {
                $('#'+pic).css('top', -200);                     
        }); 
    }
};
$(document).ready(function () {
    etx.init();
});
