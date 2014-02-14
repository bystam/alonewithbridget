
var megaobjekt = {
    init: function () {
        $(".pictureFlake").each(function (i) {
            var initialTimer = Math.random()*15000;
            setTimeout(function () {
                megaobjekt.animateOneFlake("#pic"+i);
            }, initialTimer);
        });
    },

    animateOneFlake: function(flakeDiv) {
        $(flakeDiv).css('top', -500);
        var stageWidth = $(window).width();
        var stageHeight = $(window).height() + 500;
        var randomLeftPosition = Math.ceil(Math.random()*stageWidth);
        var animationTime = 10000 + 7000*Math.random();

        $(flakeDiv).css('left', randomLeftPosition).animate({
            "top": "+=" + stageHeight
        }, animationTime, 'linear', function() {
            megaobjekt.animateOneFlake(flakeDiv);
        });
    }
};

$(document).ready(function () {
    megaobjekt.init();

    setInterval ( function () {
        $.getJSON('/pictures', function (pictures) {
            var i = 0;
            pictures.forEach (function (picture) {
                $('#pic'+i).find('img').map(function() {
                    this.src = picture.url;
                });
                $('#pic'+i+' p').text(picture.caption);
                i++;
            });
        });
    }, 10000 );
});

