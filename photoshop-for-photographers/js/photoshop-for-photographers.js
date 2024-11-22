$(document).on('click', '.navbar-toggler', function () {
  $toggle = $(this);
  if (navigationMenu.misc.navbar_menu_visible == 1) {
    $('html').removeClass('nav-open');
    navigationMenu.misc.navbar_menu_visible = 0;
    $('#bodyClick').remove();
    setTimeout(function () {
      $toggle.removeClass('toggled');
    }, 550);
    $('html').removeClass('nav-open-absolute');
  } else {
    setTimeout(function () {
      $toggle.addClass('toggled');
    }, 580);
    div = '<div id="bodyClick"></div>';
    $(div).appendTo("body").click(function () {
      $('html').removeClass('nav-open');
      if ($('nav').hasClass('navbar-absolute')) {
        $('html').removeClass('nav-open-absolute');
      }
      navigationMenu.misc.navbar_menu_visible = 0;
      $('#bodyClick').remove();
      setTimeout(function () {
        $toggle.removeClass('toggled');
      }, 550);
    });
    if ($('nav').hasClass('navbar-absolute')) {
      $('html').addClass('nav-open-absolute');
    }
    $('html').addClass('nav-open');
    navigationMenu.misc.navbar_menu_visible = 1;
  }
});
$("#navbar-toggler-demo a").on('click', function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function () {
      window.location.hash = hash;
    });
  }
});
navigationMenu = {
  misc: {
    navbar_menu_visible: 0,
    window_width: 0,
    transparent: true,
    colored_shadows: true,
    fixedTop: false,
    navbar_initialized: false
  },
};
