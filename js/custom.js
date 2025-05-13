console.log("This isn't Narnia, and there's no magical portal behind this code. 🚪 Just saying. So, spill it. What's the grand purpose of your console expedition?");
// Initialize loading animations
function initializeLoadingAnimations() {
  "use strict";
  console.log("Is this where you thought the free pizza was hiding? Keep searching, champ.");
  // --------------------------------------------- //
  // Preloader Start
  // --------------------------------------------- //
  setTimeout(function () {
    $('.preloader').addClass('loaded');
  }, 1000);
  // --------------------------------------------- //
  // Preloader End
  // --------------------------------------------- //
  console.log("🧐 Hmm, so you've ventured into the digital underbelly, have you? 🤔 Are you perhaps on a quest for hidden treasures? 💰 Maybe the legendary 'Inspect Element' easter egg? 🥚 Or are you just *really* bored? 😴 Well, spoiler alert: the magic happens on the *actual* page, not in this shadowy realm of code. 😉 But hey, knock yourself out! ¯\\_(ツ)_/¯ Just don't blame me if you get lost in the matrix. 😜");
  // --------------------------------------------- //
  // Loader & Loading Animation Start
  // --------------------------------------------- //
  $(".loader__logo").addClass('scaleOut');
  $(".loader").addClass('loaded');
  $("#main").addClass('active animate-in');
  $('#home-trigger').addClass('active-link');
  $("body").addClass('loaded');
  // --------------------------------------------- //
  // Loader & Loading Animation End
  // --------------------------------------------- //
}

// Run on both document ready and window load
$(document).ready(initializeLoadingAnimations);
$(window).on("load", initializeLoadingAnimations);

$(function () {

  "use strict";

  // --------------------------------------------- //
  // Swiper Slider Start
  // --------------------------------------------- //
  var swiper = new Swiper('.swiper', {
    // Optional parameters
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    parallax: true,
    speed: 1300,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
  // --------------------------------------------- //
  // Swiper Slider End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Skillbars Settings Start
  // --------------------------------------------- //
  $('.skillbar').skillBars({
    from: 0,
    speed: 4000,
    interval: 100,
  });
  // --------------------------------------------- //
  // Skillbars Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Magnific Popup Video Start
  // --------------------------------------------- //
  $('#inner-video-trigger').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    callbacks: {
      beforeOpen: function () { $('body').addClass('overflow-hidden'); },
      close: function () { $('body').removeClass('overflow-hidden'); }
    }
  });

  $('#showreel-trigger').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    callbacks: {
      beforeOpen: function () { $('body').addClass('overflow-hidden'); },
      close: function () { $('body').removeClass('overflow-hidden'); }
    }
  });
  // --------------------------------------------- //
  // Magnific Popup Video End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // KBW-Countdown Start
  // --------------------------------------------- //
  $('#countdown').countdown({ until: $.countdown.UTCDate(+10, 2024, 5, 27), format: 'D' });
  $('#countdownLine').countdown({ until: $.countdown.UTCDate(+10, 2024, 5, 27), format: 'D' });
  // --------------------------------------------- //
  // KBW-Countdown End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Vegas Kenburns Start
  // --------------------------------------------- //
  var bgndKenburns = $('#bgndKenburns');
  if (bgndKenburns.length) {
    bgndKenburns.vegas({
      timer: false,
      delay: 8000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "https://dummyimage.com/1000x1500/4d4d4d/636363" },
        { src: "https://dummyimage.com/1000x1500/4d4d4d/636363" },
        { src: "https://dummyimage.com/1000x1500/4d4d4d/636363" }
      ],
      animation: ['kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight']
    });
  }
  // --------------------------------------------- //
  // Vegas Kenburns End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Mailchimp Notify Form Start
  // --------------------------------------------- //
  $('.notify-form').ajaxChimp({
    callback: mailchimpCallback,
    url: 'https://besaba.us10.list-manage.com/subscribe/post?u=e8d650c0df90e716c22ae4778&amp;id=54a7906900'
  });

  function mailchimpCallback(resp) {
    if (resp.result === 'success') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-ok').addClass('is-visible');
      setTimeout(function () {
        // Done Functions
        $('.notify').find('.subscription-ok').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    } else if (resp.result === 'error') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-error').addClass('is-visible');
      setTimeout(function () {
        // Done Functions
        $('.notify').find('.subscription-error').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    }
  };
  // --------------------------------------------- //
  // Mailchimp Notify Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Contact Form Start
  // --------------------------------------------- //
  $("#contact-form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      $('.contact').find('.form').addClass('is-hidden');
      $('.contact').find('.reply-group').addClass('is-visible');
      setTimeout(function () {
        // Done Functions
        $('.contact').find('.reply-group').removeClass('is-visible');
        $('.contact').find('.form').delay(300).removeClass('is-hidden');
        th.trigger("reset");
      }, 5000);
    });
    return false;
  });
  // --------------------------------------------- //
  // Contact Form End
  // --------------------------------------------- //

});