jQuery(function () {
	"use strict";
    
    jQuery('.left-off-canvas-toggle').on('click', function (e) {
        e.preventDefault();
        jQuery(this).closest('.off-canvas-wrap').toggleClass('move-right');
    });
    
    jQuery('.right-off-canvas-toggle').on('click', function (e) {
        e.preventDefault();
        jQuery(this).closest('.off-canvas-wrap').toggleClass('move-left');
    });
    
    jQuery('.exit-off-canvas').on('click', function (e) {
        e.preventDefault();
        jQuery('.off-canvas-wrap').removeClass('move-right');
        jQuery('.off-canvas-wrap').removeClass('move-left');
    });
    
});