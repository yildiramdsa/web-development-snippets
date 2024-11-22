var main,
  $navbar;
$(window).on('resize', function () {
  main.initNavbarImage();
});
$(document).on('click', '.navbar-toggler', function () {
  $toggle = $(this);
  if (main.misc.navbar_menu_visible == 1) {
    $('html').removeClass('nav-open');
    main.misc.navbar_menu_visible = 0;
    $('#bodyClick').remove();
    setTimeout(function () {
      $toggle.removeClass('toggled');
    }, 550);
  } else {
    setTimeout(function () {
      $toggle.addClass('toggled');
    }, 580);
    div = '<div id="bodyClick"></div>';
    $(div).appendTo('body').click(function () {
      $('html').removeClass('nav-open');
      main.misc.navbar_menu_visible = 0;
      setTimeout(function () {
        $toggle.removeClass('toggled');
        $('#bodyClick').remove();
      }, 550);
    });
    $('html').addClass('nav-open');
    main.misc.navbar_menu_visible = 1;
  }
});
main = {
  misc: {
    navbar_menu_visible: 0
  },
  initNavbarImage: function () {
    var $navbar = $('.navbar').find('.navbar-translate').siblings('.navbar-collapse');
    var background_image = $navbar.data('nav-image');
    if (background_image != undefined) {
      if ($(window).width() < 991 || $('body').hasClass('burger-menu')) {
        $navbar.css('background', "url('" + background_image + "')")
          .removeAttr('data-nav-image')
          .css('background-size', "cover")
          .addClass('has-image');
      } else {
        $navbar.css('background', "")
          .attr('data-nav-image', '' + background_image + '')
          .css('background-size', "")
          .removeClass('has-image');
      }
    }
  }
}