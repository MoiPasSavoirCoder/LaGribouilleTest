$(function () {    
// Navigation 
    $('.site-navigation').affix({
      offset: {
        top: $('.hero').height()
            }
    });

    var $window = $(window);
    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 768) {
            $('.nav a').on('click', function(){
                $('.navbar-toggle').click() //bootstrap 3.x by Richard
            });
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);

// Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.site-header',
        offset: 10
    });

//jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1400, 'easeInOutExpo');
        event.preventDefault();
    });

//Counters 
    if ($(".counter-start").length>0) {
        $(".counter-start").each(function() {
            var stat_item = $(this),
            offset = stat_item.offset().top;
            $(window).scroll(function() {
                if($(window).scrollTop() > (offset - 1000) && !(stat_item.hasClass('counting'))) {
                    stat_item.addClass('counting');
                    stat_item.countTo();
                }
            });
        });
    };


// Progress bar 
    var $section = $('.section-skills');
    function loadDaBars() {
        $('.progress .progress-bar').progressbar({
            transition_delay: 500,
            display_text: 'center'
        });
    }
    
    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });

//Team Carousel
    $('#services-carousel').carousel({ interval: false });

    // Carousel touch support
    if($(".carousel-inner").length) {
        $(".carousel-inner").swipe({
            //Generic swipe handler for all directions
            swipeLeft: function (event, direction, distance, duration, fingerCount) {
                $(this).parent().carousel('next');
            },
            swipeRight: function () {
                $(this).parent().carousel('prev');
            },
            //Default is 75px, set to 0 for demo so any distance triggers swipe
            threshold: 50
        });
    }

// Slick.js   
    $('.review-carousel').slick({
        nextArrow: '<button class="slick rectangle slick-next"><i class="fa fa-angle-right" aria-hidden="true"></button>',
        prevArrow: '<button class="slick rectangle slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></button>'
    });

    $('.clients-carousel').slick({
        arrows: false,
        slidesToShow: 5,
        responsive: [ {
            breakpoint : 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint : 480,
            settings: {
                slidesToShow: 1
            }
      }]
    });

//shuffle.js
    var shuffleme = (function( $ ) {
      'use strict';
          var $grid = $('#grid'), //locate what we want to sort 
          $filterOptions = $('.portfolio-sorting li'),  //locate the filter categories

      init = function() {

        // None of these need to be executed synchronously
        setTimeout(function() {
          listen();
          setupFilters();
        }, 100);

        // instantiate the plugin
        $grid.shuffle({
          itemSelector: '[class*="col-"]', 
           group: Shuffle.ALL_ITEMS, 
        });
      },
      

        
      // Set up button clicks
      setupFilters = function() {
        var $btns = $filterOptions.children();
        $btns.on('click', function(e) {
          e.preventDefault();
          var $this = $(this),
              isActive = $this.hasClass( 'active' ),
              group = isActive ? 'all' : $this.data('group');

          // Hide current label, show current label in title
          if ( !isActive ) {
            $('.portfolio-sorting li a').removeClass('active');
          }

          $this.toggleClass('active');

          // Filter elements
          $grid.shuffle( 'shuffle', group );
        });

        $btns = null;
      },

      // Re layout shuffle when images load. This is only needed
      // below 768 pixels because the .picture-item height is auto and therefore
      // the height of the picture-item is dependent on the image
      // I recommend using imagesloaded to determine when an image is loaded
      // but that doesn't support IE7
      listen = function() {
        var debouncedLayout = $.throttle( 300, function() {
          $grid.shuffle('update');
        });

        // Get all images inside shuffle
        $grid.find('img').each(function() {
          var proxyImage;

          // Image already loaded
          if ( this.complete && this.naturalWidth !== undefined ) {
            return;
          }

          // If none of the checks above matched, simulate loading on detached element.
          proxyImage = new Image();
          $( proxyImage ).on('load', function() {
            $(this).off('load');
            debouncedLayout();
          });

          proxyImage.src = this.src;
        });

        // Because this method doesn't seem to be perfect.
        setTimeout(function() {
          debouncedLayout();
        }, 500);
      };      

      return {
        init: init
      };
    }( jQuery ));

    if($('#grid').length >0 ) { 
      shuffleme.init(); //filter portfolio
    };
}());

//apparition au scroll
const GribQuoi = document.querySelector('.pres-img7')
const GribQui = document.querySelector('.pres-img8')
const Fiche1 = document.querySelector('.pres-img1')
const Fiche2 = document.querySelector('.pres-img2')
const Atache1 = document.querySelector('.pres-img3')
const Atache2 = document.querySelector('.pres-img4')
const Atache3 = document.querySelector('.pres-img5')
const Atache4 = document.querySelector('.pres-img6')
const Atache5 = document.querySelector('.pres-img9')
const Atache6 = document.querySelector('.pres-img10')
const Flèche1 = document.querySelector('.pres-img11')
const Flèche2 = document.querySelector('.pres-img12')

const Comp = document.querySelector('.comp')
const RectImg1 = document.querySelector('.rectangle-img1')
const RectImg2 = document.querySelector('.rectangle-img2')
const RectImg3 = document.querySelector('.rectangle-img3')
const RectImg4 = document.querySelector('.rectangle-img4')
const Det = document.querySelector('.det')
const Plans = document.querySelector('.plans')
const Urbain = document.querySelector('.urbain')
const Visuels = document.querySelector('.visuels')
const Exe = document.querySelector('.exe')
const Cplan = document.querySelector('.Cplan')
const Curbain = document.querySelector('.Curbain')
const Cmesure = document.querySelector('.Cmesure')
const Cvisuels = document.querySelector('.Cvisuels')
const Cexe = document.querySelector('.Cexe')
const Carous = document.querySelector('.carous')

const Chaine = document.querySelector('.chaine')
const P1 = document.querySelector('.point1')
const P2 = document.querySelector('.point2')
const P3 = document.querySelector('.point3')
const P4 = document.querySelector('.point4')
const P5 = document.querySelector('.point5')
const P6 = document.querySelector('.point6')
const Ampoule = document.querySelector('.ampoule')
const Smiley = document.querySelector('.smiley')
const House = document.querySelector('.house')
const Usine = document.querySelector('.usine')
const Contrat = document.querySelector('.contrat')
const Draw = document.querySelector('.draw')
const Onva1 = document.querySelector('.onva1')
const Onva2 = document.querySelector('.onva2')
const Onva3 = document.querySelector('.onva3')
const Onva4 = document.querySelector('.onva4')
const Onva5 = document.querySelector('.onva5')
const Onva6 = document.querySelector('.onva6')
const Onva7 = document.querySelector('.onva7')
const Onva8 = document.querySelector('.onva8')
const Gribpourqui = document.querySelector('.gribpourqui')
const Gribpourquoi = document.querySelector('.gribpourquoi')
const Redlight = document.querySelector('.redlight')
const Garenroux = document.querySelector('.garenroux')
const Zigzagr = document.querySelector('.zigzagr')
const Crayonroux = document.querySelector('.crayonroux')
const Atableu = document.querySelector('.atableu')
const Zigouibleu = document.querySelector('.zigouibleu')
const Loupjaune = document.querySelector('.loupjaune')
const Zigjaune = document.querySelector('.zigjaune')
const Bparti = document.querySelector('.bparti')
const Bprof = document.querySelector('.bprof')
const Nnew = document.querySelector('.nnew')
const Nréno = document.querySelector('.nréno')
const Thello1 = document.querySelector('.particulier')
const Thello2 = document.querySelector('.proffessionnelle')
const Thello3 = document.querySelector('.Neuf')
const Thello4 = document.querySelector('.réno')
const R1 = document.querySelector('.R1')
const R2 = document.querySelector('.R2')
const R3 = document.querySelector('.R3')
const R4 = document.querySelector('.R4')
const R5 = document.querySelector('.R5')
const R6 = document.querySelector('.R6')












window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    const GribQuoiAct = GribQuoi.getBoundingClientRect().top;
    const GribQuiAct = GribQui.getBoundingClientRect().top;
    const Fiche1Act = Fiche1.getBoundingClientRect().top;
    const Fiche2Act = Fiche2.getBoundingClientRect().top;
    const Atache1Act = Atache1.getBoundingClientRect().top;
    const Atache2Act = Atache2.getBoundingClientRect().top;
    const Atache3Act = Atache3.getBoundingClientRect().top;
    const Atache4Act = Atache4.getBoundingClientRect().top;
    const Atache5Act = Atache5.getBoundingClientRect().top;
    const Atache6Act = Atache6.getBoundingClientRect().top;
    const Flèche1Act = Flèche1.getBoundingClientRect().top;
    const Flèche2Act = Flèche2.getBoundingClientRect().top;

    const CompAct = Comp.getBoundingClientRect().top;
    const RectImg1Act = RectImg1.getBoundingClientRect().top;
    const RectImg2Act = RectImg1.getBoundingClientRect().top;
    const RectImg3Act = RectImg1.getBoundingClientRect().top;
    const RectImg4Act = RectImg1.getBoundingClientRect().top;
    const CplansAct = Cplan.getBoundingClientRect().top;
    const DetAct = Det.getBoundingClientRect().top;

    const ChaineAct = Chaine.getBoundingClientRect().top+700;
    const OnvaAct = Onva1.getBoundingClientRect().top+180;

    const GribpourquiAct = Gribpourqui.getBoundingClientRect().top;
    const GribpourquoiAct = Gribpourquoi.getBoundingClientRect().top;
    const RedlightAct = Redlight.getBoundingClientRect().top;
    const GarenrouxAct = Garenroux.getBoundingClientRect().top;
    const ZigzagrAct = Zigzagr.getBoundingClientRect().top;
    const CrayonrouxAct = Crayonroux.getBoundingClientRect().top;
    const AtableuAct = Atableu.getBoundingClientRect().top;
    const ZigouibleuAct = Zigouibleu.getBoundingClientRect().top;
    const LoupjauneAct = Loupjaune.getBoundingClientRect().top;
    const ZigjauneAct = Zigjaune.getBoundingClientRect().top;
    const BpartiAct = Bparti.getBoundingClientRect().top;
    const BprofAct = Bprof.getBoundingClientRect().top;
    const NnewAct = Nnew.getBoundingClientRect().top;
    const NrénoAct = Nréno.getBoundingClientRect().top;
    const Thello1Act = Thello1.getBoundingClientRect().top;
    const Thello2Act = Thello2.getBoundingClientRect().top;
    const Thello3Act = Thello3.getBoundingClientRect().top;
    const Thello4Act = Thello4.getBoundingClientRect().top;
    const R1Act = R1.getBoundingClientRect().top;












    if(scrollTop > (scrollTop + Fiche1Act).toFixed() - clientHeight *0.55) {
        GribQuoi.classList.add('active')
    }

    if(scrollTop > (scrollTop + Fiche2Act).toFixed() - clientHeight * 0.55) {
        GribQui.classList.add('active')
    }

    if(scrollTop > (scrollTop + Fiche1Act).toFixed() - clientHeight *0.5) {
        Fiche1.classList.add('active')
    }

    if(scrollTop > (scrollTop + Fiche2Act).toFixed() - clientHeight * 0.55) {
        Fiche2.classList.add('active')
    }

    if(scrollTop > (scrollTop + Fiche2Act).toFixed() - clientHeight * 0.55) {
        Atache1.classList.add('active')
    }

    if(scrollTop > (scrollTop + Fiche2Act).toFixed() - clientHeight * 0.55) {
        Atache2.classList.add('active')
    }

    if(scrollTop > (scrollTop + Fiche1Act).toFixed() - clientHeight * 0.5) {
        Atache3.classList.add('active')
    }

    if(scrollTop > (scrollTop + Fiche1Act).toFixed() - clientHeight * 0.6) {
        Atache4.classList.add('active')
    }

    if(scrollTop > (scrollTop + Atache5Act).toFixed() - clientHeight * 0.9) {
        Atache5.classList.add('active')
    }

    if(scrollTop > (scrollTop + Atache6Act).toFixed() - clientHeight * 0.9) {
        Atache6.classList.add('active')
    }

    if(scrollTop > (scrollTop + Fiche1Act).toFixed() - clientHeight * 0.55) {
        Flèche1.classList.add('active')
    }

    if(scrollTop > (scrollTop + Fiche2Act).toFixed() - clientHeight * 0.55) {
        Flèche2.classList.add('active')
    }


    if(scrollTop > (scrollTop + CompAct).toFixed() - clientHeight * 0.8) {
        Comp.classList.add('active')
    }

    if(scrollTop > (scrollTop + RectImg2Act).toFixed() - clientHeight * 0.5) {
        RectImg1.classList.add('active')
    }

    if(scrollTop > (scrollTop + RectImg2Act).toFixed() - clientHeight * 0.5) {
        RectImg2.classList.add('active')
    }

    if(scrollTop > (scrollTop + RectImg2Act).toFixed() - clientHeight * 0.5) {
        RectImg3.classList.add('active')
    }

    if(scrollTop > (scrollTop + RectImg2Act).toFixed() - clientHeight * 0.5) {
        RectImg4.classList.add('active')
    }

    if(scrollTop > (scrollTop + DetAct).toFixed() - clientHeight * 0.9) {
        Det.classList.add('active')
    }

    if(scrollTop > (scrollTop + RectImg2Act).toFixed() - clientHeight * 0.5) {
        Plans.classList.add('active')
    }

    if(scrollTop > (scrollTop + RectImg2Act).toFixed() - clientHeight * 0.5) {
        Urbain.classList.add('active')
    }

    if(scrollTop > (scrollTop + RectImg2Act).toFixed() - clientHeight * 0.5) {
        Visuels.classList.add('active')
    }

    if(scrollTop > (scrollTop + RectImg2Act).toFixed() - clientHeight * 0.5) {
        Exe.classList.add('active')
    }

    if(scrollTop > (scrollTop + CplansAct).toFixed() - clientHeight * 0.4) {
        Cplan.classList.add('active2')
    }

    if(scrollTop > (scrollTop + CplansAct).toFixed() - clientHeight * 0.4) {
        Curbain.classList.add('active2')
    }

    if(scrollTop > (scrollTop + CplansAct).toFixed() - clientHeight * 0.4) {
        Cmesure.classList.add('active2')
    }

    if(scrollTop > (scrollTop + CplansAct).toFixed() - clientHeight * 0.4) {
        Cvisuels.classList.add('active2')
    }

    if(scrollTop > (scrollTop + CplansAct).toFixed() - clientHeight * 0.4) {
        Cexe.classList.add('active2')
    }

    if(scrollTop > (scrollTop + CplansAct).toFixed() - clientHeight * 0.4) {
        Carous.classList.add('active2')
    }



    if(scrollTop > (scrollTop + ChaineAct).toFixed() - clientHeight * 0.7) {
        Chaine.classList.add('active')
    }

    if(scrollTop > (scrollTop + ChaineAct).toFixed() - clientHeight * 0.7) {
        P1.classList.add('active')
    }

    if(scrollTop > (scrollTop + ChaineAct).toFixed() - clientHeight * 0.7) {
        P2.classList.add('active')
    }

    if(scrollTop > (scrollTop + ChaineAct).toFixed() - clientHeight * 0.7) {
        P3.classList.add('active')
    }

    if(scrollTop > (scrollTop + ChaineAct).toFixed() - clientHeight * 0.7) {
        P4.classList.add('active')
    }

    if(scrollTop > (scrollTop + ChaineAct).toFixed() - clientHeight * 0.7) {
        P5.classList.add('active')
    }

    if(scrollTop > (scrollTop + ChaineAct).toFixed() - clientHeight * 0.7) {
        P6.classList.add('active')
    }

    if(scrollTop > (scrollTop + ChaineAct).toFixed() - clientHeight * 0.7) {
        Ampoule.classList.add('active')
    }

    if(scrollTop > (scrollTop + ChaineAct).toFixed() - clientHeight * 0.7) {
        Smiley.classList.add('active')
    }

    if(scrollTop > (scrollTop + ChaineAct).toFixed() - clientHeight * 0.7) {
        House.classList.add('active')
    }

    if(scrollTop > (scrollTop + ChaineAct).toFixed() - clientHeight * 0.7) {
        Usine.classList.add('active')
    }

    if(scrollTop > (scrollTop + ChaineAct).toFixed() - clientHeight * 0.7) {
        Draw.classList.add('active')
    }

    if(scrollTop > (scrollTop + ChaineAct).toFixed() - clientHeight * 0.7) {
        Contrat.classList.add('active')
    }

    if(scrollTop > (scrollTop + OnvaAct).toFixed() - clientHeight * 0.75) {
        Onva1.classList.add('active2')
    }

    if(scrollTop > (scrollTop + OnvaAct).toFixed() - clientHeight * 0.75) {
        Onva2.classList.add('active2')
    }

    if(scrollTop > (scrollTop + OnvaAct).toFixed() - clientHeight * 0.75) {
        Onva3.classList.add('active2')
    }

    if(scrollTop > (scrollTop + OnvaAct).toFixed() - clientHeight * 0.75) {
        Onva4.classList.add('active2')
    }

    if(scrollTop > (scrollTop + OnvaAct).toFixed() - clientHeight * 0.75) {
        Onva5.classList.add('active2')
    }

    if(scrollTop > (scrollTop + OnvaAct).toFixed() - clientHeight * 0.75) {
        Onva6.classList.add('active2')
    }

    if(scrollTop > (scrollTop + OnvaAct).toFixed() - clientHeight * 0.75) {
        Onva7.classList.add('active2')
    }

    if(scrollTop > (scrollTop + OnvaAct).toFixed() - clientHeight * 0.75) {
        Onva8.classList.add('active2')
    }

    if(scrollTop > (scrollTop + GribpourquiAct).toFixed() - clientHeight * 0.75) {
        Gribpourqui.classList.add('active')
    }

    if(scrollTop > (scrollTop + GribpourquoiAct).toFixed() - clientHeight * 0.75) {
        Gribpourquoi.classList.add('active')
    }

    if(scrollTop > (scrollTop + RedlightAct).toFixed() - clientHeight * 0.75) {
        Redlight.classList.add('active')
    }

    if(scrollTop > (scrollTop + GarenrouxAct).toFixed() - clientHeight * 0.75) {
        Garenroux.classList.add('active')
    }

    if(scrollTop > (scrollTop + ZigzagrAct).toFixed() - clientHeight * 0.75) {
        Zigzagr.classList.add('active')
    }

    if(scrollTop > (scrollTop + CrayonrouxAct).toFixed() - clientHeight * 0.75) {
        Crayonroux.classList.add('active')
    }

    if(scrollTop > (scrollTop + AtableuAct).toFixed() - clientHeight * 0.75) {
        Atableu.classList.add('active')
    }

    if(scrollTop > (scrollTop + ZigouibleuAct).toFixed() - clientHeight * 0.75) {
        Zigouibleu.classList.add('active')
    }

    if(scrollTop > (scrollTop + LoupjauneAct).toFixed() - clientHeight * 0.75) {
        Loupjaune.classList.add('active')
    }

    if(scrollTop > (scrollTop + ZigjauneAct).toFixed() - clientHeight * 0.75) {
        Zigjaune.classList.add('active')
    }

    if(scrollTop > (scrollTop + BpartiAct).toFixed() - clientHeight * 0.75) {
        Bparti.classList.add('active')
    }

    if(scrollTop > (scrollTop + BprofAct).toFixed() - clientHeight * 0.75) {
        Bprof.classList.add('active')
    }

    if(scrollTop > (scrollTop + NnewAct).toFixed() - clientHeight * 0.75) {
        Nnew.classList.add('active')
    }

    if(scrollTop > (scrollTop + NrénoAct).toFixed() - clientHeight * 0.75) {
        Nréno.classList.add('active')
    }

    if(scrollTop > (scrollTop + Thello1Act).toFixed() - clientHeight * 0.75) {
        Thello1.classList.add('active')
    }

    if(scrollTop > (scrollTop + Thello2Act).toFixed() - clientHeight * 0.75) {
        Thello2.classList.add('active')
    }

    if(scrollTop > (scrollTop + Thello3Act).toFixed() - clientHeight * 0.75) {
        Thello3.classList.add('active')
    }

    if(scrollTop > (scrollTop + Thello4Act).toFixed() - clientHeight * 0.75) {
        Thello4.classList.add('active')
    }

    if(scrollTop > (scrollTop + ChaineAct).toFixed() - clientHeight * 0.7) {
        R1.classList.add('active')
    }

    if(scrollTop > (scrollTop + ChaineAct).toFixed() - clientHeight * 0.7) {
        R2.classList.add('active')
    }

    if(scrollTop > (scrollTop + ChaineAct).toFixed() - clientHeight * 0.7) {
        R3.classList.add('active')
    }

    if(scrollTop > (scrollTop + ChaineAct).toFixed() - clientHeight * 0.7) {
        R4.classList.add('active')
    }

    if(scrollTop > (scrollTop + ChaineAct).toFixed() - clientHeight * 0.7) {
        R5.classList.add('active')
    }

    if(scrollTop > (scrollTop + ChaineAct).toFixed() - clientHeight * 0.7) {
        R6.classList.add('active')
    }

    
})

// Attendez que le DOM soit prêt
document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez tous les éléments ayant les classes .txt1 à .txt6
    const txtElements = document.querySelectorAll(".txt1, .txt2, .txt3, .txt4, .txt5, .txt6");
  
    // Fonction pour répéter l'animation sur un élément spécifique
    function repeatAnimation(element) {
      element.classList.add("repeat-animation");
    }
  
    // Fonction pour réinitialiser l'animation sur un élément spécifique
    function resetAnimation(element) {
      element.classList.remove("repeat-animation");
    }
  
    // Fonction pour réinitialiser et répéter l'animation sur tous les éléments
    function resetAndRepeatAllAnimations() {
      txtElements.forEach((element) => {
        resetAnimation(element);
        setTimeout(() => repeatAnimation(element), 30 * 1000); // 30 secondes en millisecondes
      });
    }
  
    // Écoutez l'événement de fin d'animation sur tous les él   éments
    txtElements.forEach((element) => {
      element.addEventListener("animationend", () => {
        resetAndRepeatAllAnimations();
      });
    });
  
    // Appelez la fonction pour démarrer l'animation sur tous les éléments
    resetAndRepeatAllAnimations();
  });
  

  

