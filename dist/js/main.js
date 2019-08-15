$(document).ready(function(){

    $('.menu-btn').click(() => {
        $('.menu-btn').toggleClass('close');
        $('.btn-line').toggleClass('close');
        $('.menu-nav').toggleClass('menu-show');
        $('.nav-item').toggleClass('menu-show');
        $('.menu-branding').toggleClass('menu-show');
    })
  
});