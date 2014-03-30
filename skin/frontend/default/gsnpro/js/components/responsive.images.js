jQuery(function () {
	"use strict";

    if (Modernizr.mq("screen and (min-width:769px)")) {
        jQuery('img[data-src-med]').each(function (i) {
            var imgReplace = jQuery(this).attr('data-src-med');
            jQuery(this).attr('src', imgReplace);

        });
    }
    if (Modernizr.mq("screen and (min-width:1201px)")) {
        jQuery('img[data-src-lge]').each(function (i) {
            var imgReplace = jQuery(this).attr('data-src-lge');
            jQuery(this).attr('src', imgReplace);

        });
    }
    jQuery(window).on("throttledresize", function (e) {
        if (Modernizr.mq("screen and (max-width:768px)")) {
            jQuery('img[data-src-sml]').each(function (i) {
                var imgReplace = jQuery(this).attr('data-src-sml');
                jQuery(this).attr('src', imgReplace);
                
            });
        }
        if (Modernizr.mq("screen and (min-width:769px)")) {
            jQuery('img[data-src-med]').each(function (i) {
                var imgReplace = jQuery(this).attr('data-src-med');
                jQuery(this).attr('src', imgReplace);
                
            });
        }
        if (Modernizr.mq("screen and (min-width:1201px)")) {
            jQuery('img[data-src-lge]').each(function (i) {
                var imgReplace = jQuery(this).attr('data-src-lge');
                jQuery(this).attr('src', imgReplace);
                
            });
        }
    });
    
});