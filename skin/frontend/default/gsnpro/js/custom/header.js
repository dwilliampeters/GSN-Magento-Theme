jQuery(function () {
	"use strict";
    
    jQuery('.btn-search').on('click', function(e) {
        e.preventDefault();
        jQuery('.form-search').toggleClass('active');
    });
    
});