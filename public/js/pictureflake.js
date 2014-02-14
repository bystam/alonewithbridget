
var megaobjekt = {
    init: function () {
        $(".pictureFlake").each(function (i) {
            var initialTimer = Math.random()*7000;
            setTimeout(function () {
                megaobjekt.animateOneFlake("#pic"+i);
            }, initialTimer);
        });
    },

    animateOneFlake: function(flakeDiv) {
        $(flakeDiv).css('top', -350);  
        var stageWidth = $(window).width();
        var stageHeight = $(window).height() + 500;
        var randomLeftPosition = Math.ceil(Math.random()*stageWidth);
        var animationTime = 10000 + 7000*Math.random();

        $(flakeDiv).css('left', randomLeftPosition).animate({
            "top": "+=" + stageHeight
        }, animationTime, function() {
            megaobjekt.animateOneFlake(flakeDiv);
        });
    }
};

$(document).ready(function () {
    megaobjekt.init();
});