/**
 * Created by MinhMan.Tran on 3/4/2016.
 */
var STAG = (function(){
    'use strict';
    var method = {
        showNoticePopup: function(){
            'use strict';
            $.magnificPopup.open({
                items: {
                    src: $('#noticePopup')
                },
                type: 'inline',

                fixedContentPos: true,
                fixedBgPos: true,

                overflowY: 'auto',

                closeBtnInside: true,
                preloader: false,

                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-zoom-in'
            });

            $(document).on('click', '.button--close', function (e) {
                e.preventDefault();
                $.magnificPopup.close();
            });
        },
        ticketPage: function () {
            var ticket = $('.ticket-page');
            if(ticket.length > 0){
                $('.scroll').mCustomScrollbar();
            }
            $('#submitPayment').validate();

            var maxHeight;
            $(window).on('load resize', function(){
                var width = $(this).outerWidth();
                for(var i = 1; i <=53; i++) {
                    var week = $('.week-' + i);

                    week.removeAttr('style');

                    if(width >= 768) {
                        if (week.length > 0) {
                            maxHeight = Math.max.apply(null, week.map(function () {
                                return $(this).height();
                            }).get());
                            week.height(maxHeight);
                        }
                    }
                }
            });

            $('.calender--date a').hover(function(){
                var bound = this.getBoundingClientRect();
                var tip = $(this).find('.tips');
                if(bound.top < 65) {
                    tip.addClass('bottom');
                } else {
                    tip.removeClass('bottom');
                }

                if(($(window).outerWidth() - bound.right) < 150) {
                    tip.addClass('right');
                } else {
                    tip.removeClass('right');
                }
            });
        },
        countdown: function(){
            var countdown = $('.countdown');
            if(countdown.length > 0){
                countdown.ClassyCountdown({
                    end: $.now() + 10000,
                    labels: true,
                    style: {
                        days: {
                            gauge: {
                                thickness: .05,
                                bgColor: "rgba(46,46,46,1)",
                                fgColor: "#8dc63f"
                            }
                        },
                        hours: {
                            gauge: {
                                thickness: .05,
                                bgColor: "rgba(46,46,46,1)",
                                fgColor: "#8dc63f"
                            }
                        },
                        minutes: {
                            gauge: {
                                thickness: .05,
                                bgColor: "rgba(46,46,46,1)",
                                fgColor: "#8dc63f"
                            }
                        },
                        seconds: {
                            gauge: {
                                thickness: .05,
                                bgColor: "rgba(46,46,46,1)",
                                fgColor: "#8dc63f"
                            }
                        }

                    },
                    onEndCallback: function() {
                        console.log("Time out!");
                    }
                });
            }
        },
        windowWidthHeight: function(){
            var heightWindow = document.documentElement.clientHeight;
            var widthWindow = document.documentElement.clientWidth;
            var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            if (iOS) {
                var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
                heightWindow = window.innerHeight * zoomLevel;
                widthWindow = window.innerWidth * zoomLevel;
            }
            return {width: widthWindow, height: heightWindow};
        },
        maintenance: function(){
            'use strict';
            var maintenance = $('.maintenance-page');
            if(maintenance.length > 0){
                maintenance.find('.module--content').height(method.windowWidthHeight().height - 4);
            }
        },
        init: function () {
            method.ticketPage();
            method.countdown();
            method.maintenance();
        }
    };
    return {
        init: method.init,
        showNoticePopup: method.showNoticePopup
    }
})();


$(function(){
    'use strict';
    STAG.init();
     //STAG.showNoticePopup();
});