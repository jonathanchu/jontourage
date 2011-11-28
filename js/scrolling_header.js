var h2s = null;
function place_scrolly_header() {
    var c = 75;
    var e = $(window).scrollTop();
    var d = null;
    var a = null;
    var b = null;
    h2s.each(function() {
        var h = $(this).position()["top"] - c;
        if (e < h) {
            return false
        }
        b = h;
        d = $(this).html().replace(/&nbsp;/g, " ");
        var f = e - (b + c);
        a = f / c;
        if (a > 1) {
            a = 1
        }
        if (a > 0.99) {
            var j = $(this).nextAll("h2");
            if (j.length) {
                var i = j.first().position()["top"];
                var g = i - e;
                if (g <= c * 2) {
                    a = 1 / (c - g / 2)
                }
            }
        }
    });
    $("#scrolling-header").css({
        opacity: a
    }).css("left", h2s.first().position()["left"] - 180 - 35).html(d)
}
$(function() {
    jQuery("span.timeago").timeago();
    if ($(".gallery a").length) {
        $(".gallery a").colorbox()
    }
    if ($("#leaf-stats").length) {
        $("body").append('<div id="scrolling-header"></div>');
        h2s = $("#leaf-content h2");
        $(window).scroll(function() {
            place_scrolly_header()
        })
    }
});
