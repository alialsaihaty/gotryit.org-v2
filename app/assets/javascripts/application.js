// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .


$(document).ready(function() {

  $('#close').affix({
    offset: {
        top: $('#close').offset().top
    }
  });

  $('.form-control.ser').focus(function() {
    var width = $(this).css('width');
    var margin_top = $(this).css('margin-top');
    var container = $('.container-fluid.nav').css('padding-left');
    var img_width = $('.img-tryit').css('width');
    var nav_top = $('.navbar-brand.dropdown-toggle').css('margin-top');
    var nav_left = $('.navbar-brand.dropdown-toggle').css('padding-left');
    $('.form-control.ser').css('width', width);
    $('.form-control.ser').css('margin-top', margin_top);
    $('.container-fluid.nav').css('padding-left', container);
    $('.img-tryit').css('width', img_width);
    $('.navbar-brand.dropdown-toggle').css({'padding-left': nav_left, 'margin-top': nav_top});
  });


});
