jQuery(function () {
  "use strict";

  jQuery('.btn-search').on('click', function(e) {
    e.preventDefault();
    jQuery('.form-search').toggleClass('active');
  });
  
  jQuery('#nav-primary > ul > li > a').on('mouseenter', function(e) {
    e.preventDefault();
    if ( jQuery(this).parent().hasClass('open') ) {
      jQuery(this).parent().removeClass('open');
    } else {
      jQuery('#nav-primary > ul > li').removeClass('open');
      jQuery(this).parent().toggleClass('open');
    }
  });
  
  jQuery('#nav-primary > ul > li > ul').on('mouseleave', function(e) {
    jQuery(this).parent().removeClass('open');
  });
    
});