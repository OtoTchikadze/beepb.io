$(document).ready(function(){

    /*Reviews Slider*////////////////

    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // fade: true,
    });
        // Burger Menu///////////////

    let headerBurger = document.querySelector('.header__burger');
    let menu = document.querySelector('.menu');
    let body = document.querySelector('body');
    headerBurger.onclick = function(){
        headerBurger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('no-scroll');
    }


        //Header on Scroll//////////////

    let header = document.querySelector('.header');
    let headerHeight = header.clientHeight;

    window.onscroll = function(){
        if(window.pageYOffset > headerHeight){
            header.classList.add('fixed');
        }
        else{
            header.classList.remove('fixed');
        }
    }
  });