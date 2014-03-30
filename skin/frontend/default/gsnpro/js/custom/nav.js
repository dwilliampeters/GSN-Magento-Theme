jQuery(function () {
  "use strict";
    
    // Magento Menu
    jQuery('#nav-primary li').each(function() {
        if(jQuery(this).has('ul').length) {
            jQuery(this).addClass('has-children');
        }
    });
    
    var cs_navigation = {
    
		cloneNavForMob : function () { // Copy primary nav into #nav-mobile for mobile view
			var nav = jQuery('#nav-primary').html(),
                navHolder = jQuery('#sml-nav-level0 .nav');
                //search = jQuery('#search').html();
			//navHolder.append(nav + search);
            navHolder.prepend(nav);
            
            var quickaccessNav = jQuery('.quick-access .links').html(),
                quickaccessNavHolder = jQuery('#sml-nav-level0 .nav-more ul');
            quickaccessNavHolder.prepend(quickaccessNav);
		},
		loadSubMobMenu : function (e) {
			var navLevel = jQuery(this).parent().attr('data-nav-level'),
                iLevel = navLevel.split('level')[1], // nav level index from navLevel string 'eg. level2'
                navHolder = jQuery('#sml-nav-' + navLevel + ' .menu'),
                nav = jQuery(this).parent().find('ul').html(), // subnav html
                navMobile = jQuery('#nav-mobile'),
                backLink = jQuery(this).html(),
                title = jQuery(this).html(),
                titleHref = jQuery(this).attr('href');
            
            e.preventDefault();
            
            nav = '<li class="title"><a href="' + titleHref + '">' + title + '</a></li>' + nav;
            
            navHolder.html(nav); // put subnav html in level holder
            navMobile.addClass(navLevel); // add level class to show correct level
            
            if(iLevel > 0) {
                jQuery('.nav-back-level' + iLevel).html(backLink); // if not bottom level, add back links
            }
		},
		menuBack : function(e) {
			var navLevel = jQuery(this).parent().attr('data-nav-level'),
					navMobile = jQuery('#nav-mobile');
			e.preventDefault();
			switch(navLevel) {
				case 'level2':
					navMobile.removeClass('level3');
					jQuery('#sml-nav-level3 .menu').html('');
					break;
				case 'level1':
					navMobile.removeClass('level3').removeClass('level2');
					jQuery('#sml-nav-level2 .menu').html('');
					break;
				default:
					navMobile.removeClass('level3').removeClass('level2').removeClass('level1');
					jQuery('#sml-nav-level1 .menu').html('');
			}
		},


		init : function () {
			cs_navigation.cloneNavForMob();
			jQuery('#nav-mobile').on('click', '.has-children a', cs_navigation.loadSubMobMenu);
			jQuery('#nav-mobile').on('click', '.nav-back a', cs_navigation.menuBack);
		}

	};

	jQuery(document).ready(function() {

		cs_navigation.init();

	});

});