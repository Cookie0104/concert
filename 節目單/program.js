$(document).ready(function() {

    window.addEventListener("scroll", (event) => {

        var page0Height = document.getElementById('bn1').clientHeight;
        var page1Height = document.getElementById('page1').clientHeight;
        var page2Height = document.getElementById('page2').clientHeight;
        var page3Height = document.getElementById('page3').clientHeight;


        var scrollto1 = page0Height;
        var scrollto2 = page0Height + page2Height;

        var scrollY = document.documentElement.scrollTop;

        if (scrollY < scrollto1) {
            $("#nav-introduce").parent("a").addClass("active");
            $("#nav-member").parent("a").removeClass("active");
            $("#nav-program").parent("a").removeClass("active");
            $("#bg").removeClass("active");
        } else if (scrollto1 < scrollY < scrollto2) {
            $("#nav-introduce").parent("a").removeClass("active");
            $("#nav-member").parent("a").addClass("active");
            $("#nav-program").parent("a").removeClass("active");
            $("#bg").removeClass("active");
        };

        if (scrollto2 < scrollY) {
            $("#nav-introduce").parent("a").removeClass("active");
            $("#nav-member").parent("a").removeClass("active");
            $("#nav-program").parent("a").addClass("active");
            $("#bg").addClass("active");
        };

    });

    $('div.animate').each(function() {
        var stop = $(window).scrollTop() + $(window).height() / 1.1;
        var litop = $(this).offset().top;
        if (stop > litop) {
            $(this).addClass('show');
        }
    });
    $(window).scroll(function() {
        $('div.animate').each(function() {
            var stop = $(window).scrollTop() + $(window).height() / 1.1;
            var litop = $(this).offset().top;
            if (stop > litop) {
                $(this).addClass('show');
            } else {
                $(this).removeClass('show');
            };
            console.log(litop + ' - ' + stop);
        });
    });





});