/*global console, alert, confirm, prompts*/
/*
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
*/
$(document).ready(function() {

    // $('#wrapper').fullpage({

    // });
    $navButton = $('.nav-button');
    $navButton.on('click', function(e) {
        $this = $(this);
        if($this.hasClass('active-menu')) {
            return;
        } else {
            $('.nav-button').removeClass('active-menu');
            $this.addClass('active-menu');
        }
    });

    $(".fitThis").fitText(0.8, { minFontSize: '20px', maxFontSize: '80px' });


    particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#5EFCE8"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#5EFCE8"
        },
        "polygon": {
          "nb_sides": 12
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#5EFCE8",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);


var $email = $('#email'),
$emailR = $('#emailR'),
$i = $email.find('i'),
c = true;

$email.on('click', function() {
        if(c){
            $email.addClass('open');
            $i.addClass('fa-envelope');
            $i.removeClass('fa-envelope-o');
            $emailR.css('opacity', '1');
            c = false;
        } else {
            $email.removeClass('open');
            $i.removeClass('fa-envelope');
            $i.addClass('fa-envelope-o');
            $emailR.css('opacity', '0');
            c = true;
        }
    });

    $home = $('.home');
    $work = $('.work');
    $wrapper = $('#wrapper');
    $buttons = $('.nav-button');
    $brand = $('.navbar-brand');
    $work.on('click', function() {
        $brand.fadeOut(300);
        $wrapper.css({
            'left': '-50%'
        });

        $buttons.css({
            'color': 'white',
            'border-color': 'white'
        });
        $("#wrapper").scrollTo("#work", 500);


    });

    $home.on('click', function() {
        $brand.fadeIn(300);
        $wrapper.css({
            'left': '0'
        });
        $buttons.css({
            'color': '',
            'border-color': ''
        });
        $("#wrapper").scrollTo("#home", 500);
    });

    $wrapper.on('scroll', function() {
        $brand.fadeIn();
    });
});

jQuery.fn.scrollTo = function(elem, speed) {
    $(this).animate({
        scrollTop:  $(this).scrollTop() - $(this).offset().top + $(elem).offset().top
    }, speed == undefined ? 1000 : speed);
    return this;
};

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
