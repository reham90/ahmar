let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
$(document).ready(function () {
  new WOW().init();

  //phone size menu onclick
  if ($(window).width() <= 991) {
    $("#menu-id").click(function (e) {
      e.preventDefault();
      $(".menu-bars .bar").toggleClass("hide");
      $(".menu-bars .times").toggleClass("hide");
      $(".navgition").toggleClass("reset-left");
      $("body").toggleClass("overflow");
      $(".menu-bars").toggleClass("open-bars");
    });
    $(".nav-head .close-btn").click(function () {
      $(".navgition").removeClass("reset-left");
      
      $(".menu-bars .times").toggleClass("hide");
      $("body").removeClass("overflow");
    });
  
     ///// search in mobile /////////
     $(".fixed-search").click(function (e) {
      e.preventDefault();
      $(".overlay-box").fadeToggle(300);
      $(".search-section").toggleClass("search-open");
      $(".fixed-search .open-search").toggleClass("close-search");
      $("body").toggleClass("overflow");
    
    });
  
  
 
   //slide down menu
   $(".menu-name").click(function (e) {
    e.preventDefault();
    $(this).siblings(".cats-display-2").slideToggle(400);
    $(".menu-name").not(this).siblings(".cats-display-2").slideUp(400);
    if ($(window).width() <= 991) {
      $(this).toggleClass("active");
      $(".menu-name").not(this).removeClass("active");
    }
  });}

  //fixed nav
  $stickyNav = $(".top-header");
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass("fixed-nav", 500);
    } else {
      $stickyNav.removeClass("fixed-nav", 500);
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav", 500);
    }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else if (lastScroll - scroll >= 0 && $(window).width() <= 991) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
  });
  ///////// ** main** /////////
  var specials = new Swiper(".main-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1199: {
        slidesPerView: 1,
      },
    },
  });
 
  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
    $(".nav-foot-header").addClass("footer-accordion");
    $(".nav-foot").addClass("footer-panel");
  }
  $(".footer-accordion").click(function () {
    var x = $(this).siblings().prop("scrollHeight") + 15 + "px";
    $(".footer-accordion").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("max-height") == "0px") {
      $(this).siblings().css("max-height", x);
      $(this).siblings(".nav-foot").css("padding-top", "15px");
    } else {
      $(this).siblings().css("max-height", "0");
      $(this).siblings(".nav-foot").css("padding-top", "0");
    }

    $(".footer-accordion").not(this).siblings().css("max-height", "0");
    $(".footer-accordion")
      .not(this)
      .siblings(".nav-foot")
      .css("padding-top", "0");
  });
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
});
/////////////////////////////////////////////////////// search in mobile //////////////////////

 ///////// **categories-slider** /////////
 var screen = new Swiper(".categories .swiper-container", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".categories .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".categories .swiper-btn-next",
    prevEl: ".categories .swiper-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 17,
    },
    1199: {
      slidesPerView: 6,
      spaceBetween: 25,
    },
  },
});

///////// **products-section** /////////
var screen = new Swiper(".products .swiper-container", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".products .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".products .swiper-btn-next",
    prevEl: ".products .swiper-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});


///////// **new-arrivals-section** /////////
var screen = new Swiper(".arrivals .swiper-container", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".arrivals .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".arrivals .swiper-btn-next",
    prevEl: ".arrivals .swiper-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

///////// **best-seller-section** /////////
var screen = new Swiper(".sellers .swiper-container", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".sellers .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".sellers .swiper-btn-next",
    prevEl: ".sellers .swiper-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

