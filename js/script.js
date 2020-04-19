/*global $, window */

$(function () {
    'use strict';
//---------------------------------- adjust header height
    var myHeader = $('.header'),
        ulSlider = $('.bxslider');
    myHeader.height($(window).height());
    $(window).resize(function () {
        myHeader.height($(window).height());
    ulSlider.each(function () {
    $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
    });
    });
//---------------------------------- links class active   
    $('.navlist li, .menu-nav li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
//---------------------------------- menu navbar
    $('.men-btn').on('click', function() {
        $('.cord').slideToggle();
    })
//---------------------------------- slider
    ulSlider.bxSlider({
        pager: false
    });
    var mySlider = $('.bx-wrapper');
    mySlider.height($(window).height());
    $(window).resize(function () {
        mySlider.height($(window).height());
    });
    ulSlider.each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
    });
//---------------------------------- scroll to section
    $('.navlist li a, .menu-nav li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top
        }, 1000);
    });
//---------------------------------- Testimonials slide
    $(function testiSlier () {
       $('.slider .active').each(function () {
          if (!$(this).is(':last-child')) {
              $(this).delay(4000).animate({width: 'toggle'}, 300, function () {
                  $(this).removeClass('active').next().addClass('active').fadeIn();
                  testiSlier();
              });
          } else {
              $(this).delay(4000).animate({width: 'toggle'}, 300, function () {
                  $(this).removeClass('active');
                  $('.slider div').eq(0).addClass('active').fadeIn();
                  testiSlier();
          });
          }
       });
       });
//---------------------------------- nice scroll plugin
  $("body").niceScroll({
  cursorcolor:"#1abc9c",
  cursorwidth:"8px",
  cursorborder: 0
});
//---------------------------------- scroll to top
    var scrtop = $('.stt');
    if ($(window).scrollTop() >= 1000) {
        scrtop.fadeIn(200);
} else {
        scrtop.fadeOut(200);
}

    $('.stt').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
//---------------------------------- shuffle plugin

    $('#port ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    var mixer = mixitup('#container');
    var mixer = mixitup(containerEl);
    var mixer = mixitup(containerEl, {
        selectors: {
            target: '.blog-item'
            },
            animation: {
            duration: 300
  }
 });
});