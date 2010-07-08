$(function() {
    $("#dContainer div div")
        .hover(
            function() {
                //alert("a");
                $(this).css("opacity", .7).animate({ opacity: 1 }, 400);
                var off = $(this).offset();
                var $i = $("#" + $(this).attr("idd"));
                $i
                    .stop()
                    .css({ left: off.left, top: off.top, width: $i.width(), height: $i.height() })
                    .animate({ opacity: 1 }, 400);
            },
            function() {
                $(this).css("opacity", 1).animate({ opacity: .7 }, 400);
                $("#" + $(this).attr("idd")).stop().animate({ opacity: 0 }, 400);
            }
        )
        .each(function(i, item) {
            $("<div id='dy" + i + "' />")
                .width($(item).width())
                .height($(item).height())
                .css({ zIndex: 100, position: "absolute", left: 0, top: 0, textAlign: 'center', color: 'white', opacity: 0 })
                .html("Width: " + $(item).width() + ", Height: " + $(item).height())
                .appendTo($(item)p);
            $(item).attr("idd", "dy" + i);
        });


});