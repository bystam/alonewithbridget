
var megaobjekt = {
    init: function () {
        $(".pictureFlake").each(function (i) {
            var initialTimer = Math.random()*5000;
            setTimeout(function () {
                megaobjekt.animateOneFlake("#pic"+i);
            }, initialTimer);
        });
    },
    pictureFlake: function(){
        // let set some bloody vars
        var stageWidth = $(window).width();
        var stageHeight = $(window).height() + 500;
        var randomEntry = Math.ceil(Math.random()*stageWidth);
        var pic = randomEntry % 5;
        var picId = "#pic" + pic;
        // ok time to create and animate this stupid thing.
        $(picId).css('left', randomEntry).animate({
                "top": "+=" + stageHeight
        }, 5000, function() {
                $(picId).css('top', -200);                     
        });
    },

    animateOneFlake: function(flakeDiv) {
        $(flakeDiv).css('top', -200);  
        var stageWidth = $(window).width();
        var stageHeight = $(window).height() + 200;
        var randomLeftPosition = Math.ceil(Math.random()*stageWidth);
        var animationTime = 7000 + 4000*Math.random();

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