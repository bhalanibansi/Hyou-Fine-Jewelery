/*
* Broadcast Theme
*
* Use this file to add custom Javascript to Broadcast.  Keeping your custom
* Javascript in this fill will make it easier to update Broadcast. In order
* to use this file you will need to open layout/theme.liquid and uncomment
* the custom.js script import line near the bottom of the file.
*/


// second day chenges in js file


(function() {
  // Add custom code below this line

var init = false;
var swiper;
var $swiperSelector = $('.featured-coll');

function swiperCard() {
  $swiperSelector.each(function(index) {
  var $this = $(this);
  $this.addClass('featured-coll-' + index);
    swiper = new Swiper('.featured-coll-' + index, {
    direction: 'horizontal',
    slidesPerView: 1.5,
    loop: false,
    freeMode: true,
    spaceBetween: 15, 
    navigation: false,
    scrollbar: {
      el: '.featured-coll-scroll'  
      },
      breakpoints: {
      750 :{
       slidesPerView: 'auto',     
        spaceBetween: 32, 
       }          
      }
    });

  });
}
swiperCard();
window.addEventListener("resize", swiperCard);

// const mediaSliders = document.querySelectorAll('.prod-media-slider');
// let galleryTop; // Common Swiper instance

// mediaSliders.forEach((slider, index) => {
//   slider.classList.add('prod-media-slider-' + index);

//   // Initialize Swiper on hover if not already initialized
//   slider.addEventListener('mouseenter', function () { 
//     if (!galleryTop) {
//       galleryTop = new Swiper('.prod-media-slider-' + index, {
//         spaceBetween: 0,
//         slidesPerView: 1,
//         freeMode: true,
//         loop: true,
//         pagination: {
//         el: '.grid_item_pagination',
//           clickable: false,
//         },
//         autoplay: {
//           delay: 1500,
//           disableOnInteraction: false
//         },
//         navigation: false,
//       });
//     }
//     slider.querySelector('.grid_item_pagination').classList.add('active');    
//     slider.querySelector('.grid_item_pagination').style.opacity = 1;
//   });

//   // Stop Swiper on mouse leave
//   slider.addEventListener('mouseleave', function () {
//     if (galleryTop) {
//       galleryTop.autoplay.stop();
//       galleryTop.destroy(true, true);
//       galleryTop = null;
//     }
//     slider.querySelector('.grid_item_pagination').classList.remove('active');
//     slider.querySelector('.grid_item_pagination').style.opacity = 0;
//   });
// });

  const mediaSliders = document.querySelectorAll('.prod-media-slider');

mediaSliders.forEach((slider, index) => {
  slider.classList.add('prod-media-slider-' + index);

  // Initialize Swiper for each slider immediately
  let swiperInstance = new Swiper('.prod-media-slider-' + index, {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.grid_item_pagination',
      clickable: true, // Allow pagination bullets to be clickable
    },
    autoplay: false, // Disable autoplay for manual swiping
    freeMode: false, // Disable free mode    
  });

  // Optional: Manage pagination visibility and active state if needed
  let paginationElement = slider.querySelector('.grid_item_pagination');
  paginationElement.classList.add('active');
  paginationElement.style.opacity = 1;
});

var swiperTab;
var $swiperSelectorTab = $('.featured-coll-tabs');

function tabCard() {    
      $swiperSelectorTab.each(function(index) {
      var $this = $(this);
      $this.addClass('swiper-tab-' + index);                          
            swiperTab = new Swiper('.swiper-tab-' + index, {
            direction: 'horizontal',
            slidesPerView: 1.5,
            loop: false,
            freeMode: true,
            spaceBetween: 15, 
            navigation: false,            
            scrollbar: {
              el: '.featured-coll-tabs-scroll'  
              },
            breakpoints: {   
              750: {
                slidesPerView: 'auto',     
                spaceBetween: 32, 
              },             
              }
            });         
      });
    }
tabCard();
window.addEventListener("resize", tabCard);

var swiperShop;
var $swiperShopTheLook = $('.shop-look-slider');

function lookCard() {    
      $swiperShopTheLook.each(function(index) {
      var $this = $(this);
      $this.addClass('shop-look-slider-' + index);                          
        swiperShop = new Swiper('.shop-look-slider-' + index, {
          direction: 'horizontal',
          slidesPerView: 1,
          loop: false,
          freeMode: false,
          speed: 1000,
          spaceBetween: 0, 
          navigation: {
            nextEl: ".look__product__next",
            prevEl: ".look__product__prev"
          },                                   
        });         
      });
    }
lookCard();
window.addEventListener("resize", lookCard);
  
const buttons = document.querySelectorAll('.openDrawer');
let closeModalButton;
const modal = document.querySelector('.modal');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Find the parent slide
    const parentSlide = button.closest('.swiper-slide');

    if (parentSlide) {
      // Find the 'look__aside' content within the parent slide
      const lookAsideContent = parentSlide.querySelector('.look__aside');

      // Get the modal content area
      const modalContent = document.querySelector('.modal-content');

      if (lookAsideContent && modalContent) {
        // Clear the modal content area
        modalContent.innerHTML = '';

        // Clone the 'look__aside' content and append it to the modal content
        const clonedContent = lookAsideContent.cloneNode(true);
        modalContent.appendChild(clonedContent);

        // Show the modal
        modal.style.display = 'block';
        modal.classList.add('is-open');
        setTimeout(function() {
          closeModalButton = modalContent.querySelector('button');         
        }, 2000);            
      }
    }
  });
});
document.addEventListener('click', event => { 
  if (event.target === closeModalButton) {
    modal.style.display = 'none';
    modal.classList.remove('is-open');
    var body = document.body;
    body.style.overflow = 'unset';
  }
});

var $swiperSub = $('.sub-category-slider'); 

function subSlider() {
  $swiperSub.each(function(index) {
  var $this = $(this);
  $this.addClass('sub-category-slider-' + index);
    swiper = new Swiper('.sub-category-slider-' + index, {
      loop: false,
      slidesPerView: 3,
      spaceBetween: 20,
      scrollbar: {
      el: '.sub-swi-scrollbar',
      draggable: true,      
      },  
      navigation: false,
      breakpoints: {
        750: {
          slidesPerView: 2.5,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        1280: {
          slidesPerView: 5.7,
          spaceBetween: 20
        }
      }
    });
  });
}
subSlider();
window.addEventListener("resize", subSlider);

var swiper = new Swiper(".nav-sub-slider", {
  loop: false,
  slidesPerView: 2.5,
  spaceBetween: 20,
  scrollbar: {
    el: '.nav-sub-scrollbar',
    draggable: true,    
  },
  navigation: false,
  breakpoints: {
    750: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    1280: {
      slidesPerView: 3.9,
      spaceBetween: 20
    }
  }
});
  
var swiper = new Swiper(".p-story-slider", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  breakpoints: {
    750: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    1280: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
});
  
var swiper = new Swiper(".mobile-product-imges", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: false,
  pagination: {
        el: ".swiper-pagination",
      },
  breakpoints: {
    750: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 10
    },
    1280: {
      slidesPerView: 3.9,
      spaceBetween: 10
    }
  }
});

  
// $(document).ready(function() {
//   // Assign some jquery elements we'll need
//   var $swiper = $(".swiper-container");
//   var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
//   // into a fixed position for animation purposes
//   var $bottomSlideContent = null; // Slide content that gets passed between the
//   // panning slide stack and the position 'behind'
//   // the stack, needed for correct animation style

// var swiper = new Swiper(".trail-blazer-slider", {
//   loop: true,
//   slidesPerView: 1,
//   autoHeight: true,
//   spaceBetween: 0,
//   centeredSlides: false,  
//   noSwiping: true,
//   noSwipingClass: 'no-swipe',
//   navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       }
// });
//   var scrollableContainer = document.querySelector('.scrollable-container');

// scrollableContainer.addEventListener('touchstart', function (event) {
//   // Prevent touch events from reaching Swiper
//   event.stopPropagation();
// });
// });

  $(document).ready(function() {
  // Assign some jQuery elements we'll need
  var $swiper = $(".swiper-container");
  var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
  // into a fixed position for animation purposes
  var $bottomSlideContent = null; // Slide content that gets passed between the
  // panning slide stack and the position 'behind'
  // the stack, needed for correct animation style

  // Initialize Swiper
  var swiper = new Swiper(".trail-blazer-slider", {
    loop: true,
    slidesPerView: 1,
    autoHeight: true,
    spaceBetween: 0,
    centeredSlides: false,
    noSwiping: true,
    noSwipingClass: 'no-swipe',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  // Add event listener to prevent touch events from reaching Swiper
  $('.scrollable-container').on('touchstart', function(event) {
    event.stopPropagation();
  });
});
  
var swiper = new Swiper(".product-block-slider", {
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 20,
  navigation: false,
  breakpoints: {
    750: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
});
  // ^^ Keep your scripts inside this IIFE function call to 
  // avoid leaking your variables into the global scope.
})();

document.addEventListener('DOMContentLoaded', function () {
  const listViewButton = document.querySelector('.list-view-button');
  const gridViewButton = document.querySelector('.grid-view-button');
  const lists = document.querySelector('.custom-grid');

  if (listViewButton && gridViewButton && lists) {
    listViewButton.onclick = function () {
      lists.classList.remove('grid-view-filter');
      lists.classList.add('list-view-filter');
    }
    
    gridViewButton.onclick = function () {
      lists.classList.remove('list-view-filter');
      lists.classList.add('grid-view-filter');
    }  
  } 
});

// $().ready(function(){
//   $('.slick-carousel').slick({
//     arrows: false,
//     centerPadding: "0px",
//     dots: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     infinite: true
//   });
// });

// $(document).ready(function() {
//   var $slider = $('.one-time');
//   var $progressBar = $('.progress');
//   var $progressWrapper = $('.progress-wrapper');

//   // Hide slider by default using opacity
//   $slider.css('opacity', '0');

//   // Initialize slick slider
//   $slider.on('init', function(event, slick) {
//     if (slick.slideCount <= 1) {
//       $('.slick-dots').hide();
//       $('.slick-dotted').hide();
//     }
//     $slider.css('opacity', '1'); // Slider init pachi j dekhaadva mate
//   }).slick({
//     dots: true,
//     infinite: true,
//     adaptiveHeight: true,
//     lazyLoad: 'ondemand',
//     speed: 500,
//     cssEase: 'ease-in-out'
//   });

//   // On slider change, update the progress bar
//   $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
//     var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;
//     $progressBar.css('width', calc + '%');
//   });
// });
$(document).ready(function(){
   var $slider = $('.one-time');
  var $progressBar = $('.progress');
  var $progressWrapper = $('.progress-wrapper');
  $('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    adaptiveHeight: true
  });

  $('.one-time').on('init', function(event, slick){
    if (slick.slideCount <= 1) {
      $('.slick-dots').hide();
      $('.slick-dotted').hide();
    }
  });
   $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;
    $progressBar.css('width', calc + '%');
  });
});


document.addEventListener('DOMContentLoaded', function() {
    var initialDistance = 0;
    var containerWidth = $(".img_producto_container").width();
    var containerHeight = $(".img_producto_container").height();
    var maxZoomScale = 1.7; // Maximum zoom scale

    $(".img_producto_container")
    // tile mouse actions
    .on("mouseover touchstart", function(e) {
        if (e.originalEvent.touches && e.originalEvent.touches.length === 2) {
            var touch1 = e.originalEvent.touches[0];
            var touch2 = e.originalEvent.touches[1];
            initialDistance = Math.sqrt(Math.pow(touch2.pageX - touch1.pageX, 2) + Math.pow(touch2.pageY - touch1.pageY, 2));
        }
    })
    .on("mouseout touchend", function() {
        initialDistance = 0;
        $(this)
            .children(".img_producto")
            .css({ transform: "scale(1)" });
    })
    .on("touchmove", function(e) {
        if (initialDistance > 0 && e.originalEvent.touches && e.originalEvent.touches.length === 2) {
            var touch1 = e.originalEvent.touches[0];
            var touch2 = e.originalEvent.touches[1];
            var currentDistance = Math.sqrt(Math.pow(touch2.pageX - touch1.pageX, 2) + Math.pow(touch2.pageY - touch1.pageY, 2));
            var scale = currentDistance / initialDistance;

            // Limit the zoom scale to the maximum value
            scale = Math.min(scale, maxZoomScale);

            // Calculate the midpoint between two touches
            var midpointX = (touch1.pageX + touch2.pageX) / 2;
            var midpointY = (touch1.pageY + touch2.pageY) / 2;

            // Calculate the transformation origin based on the midpoint
            var originX = (midpointX - $(this).offset().left) / containerWidth * 100;
            var originY = (midpointY - $(this).offset().top) / containerHeight * 100;

            // Apply the scale transformation to the image
            $(this)
                .children(".img_producto")
                .css({
                    transform: "scale(" + scale + ")",
                    "transform-origin": originX + "% " + originY + "%"
                });
        }
    });
});


// landing page script........................................................... 
  document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.landing_block_slider', {
      slidesPerView: 4,
      autoHeight: true,
       spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
       pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
      breakpoints: {            
            990: {
                slidesPerView: 2
            },
            320: {
                slidesPerView: 1
            }
        }
    });
  });
 // var stickyBar = document.getElementById("sticky-bar");

 //  // Add scroll event listener
 //  window.addEventListener("scroll", function() {
 //    // Check if the scroll position is greater than 100px
 //    if (window.scrollY > 100) {
 //      // Show the sticky bar
 //      stickyBar.style.bottom = "0";
 //    } else {
 //      // Hide the sticky bar
 //      stickyBar.style.bottom = "-100px";
 //    }
 //  });
  
// for custom cart page
// document.addEventListener('DOMContentLoaded', function() {
//   document.querySelector('.add-to-cart-btn').addEventListener('click', function() {
//     var productId = document.querySelector('.product_id').textContent.trim(); // Extract the product ID
//     addToCart(productId); // Call function to add product to cart
//   });

//   function addToCart(productId) {
//     fetch('/cart/add.js', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         quantity: 1,
//         id: productId
//       })
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Product added to cart:', data);
//       // Optionally, you can redirect the user to the cart page after successful addition
//       window.location.href = '/cart';
//     })
//     .catch(error => console.error('Error:', error));
//   }
// });
document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart-btn')) {
      var productIdElement = document.querySelector('.product_id');
      if (productIdElement) {
        var productId = productIdElement.textContent.trim();
        addToCart(productId);
      } else {
        console.error('Product ID element not found.');
      }
    }
  });

  function addToCart(productId) {
    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        quantity: 1,
        id: productId
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Product added to cart:', data);
      window.location.href = '/cart';
    })
    .catch(error => console.error('Error:', error));
  }
});




// document.addEventListener('DOMContentLoaded', function() {
//   document.querySelector('.add-to-cart-btn-sticky').addEventListener('click', function() {
//     var productId = document.querySelector('.product_id').textContent.trim(); // Extract the product ID
//     addToCart(productId); // Call function to add product to cart
//   });

//   function addToCart(productId) {
//     fetch('/cart/add.js', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         quantity: 1,
//         id: productId
//       })
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Product added to cart:', data);
//       // Optionally, you can redirect the user to the cart page after successful addition
//       window.location.href = '/cart';
//     })
//     .catch(error => console.error('Error:', error));
//   }
// });
document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart-btn-sticky')) {
      var productIdElement = document.querySelector('.product_id');
      if (productIdElement) {
        var productId = productIdElement.textContent.trim();
        addToCart(productId);
      } else {
        console.error('Product ID element not found.');
      }
    }
  });

  function addToCart(productId) {
    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        quantity: 1,
        id: productId
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Product added to cart:', data);
      window.location.href = '/cart';
    })
    .catch(error => console.error('Error:', error));
  }
});

// **********************************page speed optimized js************************
// producttitle.liquid
  const openButton = document.getElementById("subtitle_content");
const closeButton = document.getElementById("close-button");
const modalContainer = document.querySelector(".modal-container");
const targetList = [openButton, closeButton, modalContainer];
const handler = e => {
  e.stopPropagation();
  if (targetList.includes(e.target)) {
    modalContainer.classList.toggle("active");
  }
};
targetList.forEach(el => el.addEventListener("click", handler));
// delivery.liquid
  document.addEventListener("DOMContentLoaded", function() {       
    var ebModal = document.getElementById('eye_content');
    var ebBtn = document.getElementById("eye_icon");
    var ebSpan = document.getElementsByClassName("eye_icon_close")[0];
    ebBtn.onclick = function() {
        ebModal.style.display = "block";
    }
    ebSpan.onclick = function() {
        ebModal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == ebModal) {
            ebModal.style.display = "none";
        }
    }
  });
// ************************************section-accordian-pdp.liquid********************
$(document).ready(function() {
  $('#show-hidden-menu').click(function() {
    $('.hidden-menu').slideToggle("slow");
    // Alternative animation for example
    // slideToggle("fast");
  });
  // Find the first accordion item's body
  var firstAccordionContent = $('.accordion-group__items .accordion__body').first();  
  // Check if the first accordion item exists
  if (firstAccordionContent.length > 0) {
    // Toggle the 'show' class
    firstAccordionContent.toggleClass('show');    
    // Check if the 'show' class is present
    var isOpen = firstAccordionContent.hasClass('show');    
    // Adjust the height accordingly
    if (isOpen) {
      firstAccordionContent.css('height', 'auto');
    } else {
      firstAccordionContent.css('height', '0');
    }
  }
}); 
// *************product-variant-option.liquid******************
  document.addEventListener("DOMContentLoaded", function() {
  var modal = document.querySelector(".modal-2");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");
function toggleModal() {
    modal.classList.toggle("show-modal");
}
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}
trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
});

// ******************shop-the-look****************************
  document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".product_shop_slider", {
      loop: true,
      slidesPerView: 4, // Show 4 slides      
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints:{
       320 :{
       slidesPerView: 1.13,
       },
       750 :{
       slidesPerView: 4,             
       },
       1200 :{
       slidesPerView: 4,
       }
      }
    });
  });

// *************************home page collection button****************
  document.addEventListener('DOMContentLoaded', function() {
    var buttons = new Swiper(".main_cst_reel.home_coll_button", {
      loop: true,
      slidesPerView: 1.5, 
      spaceBetween: 20, 
      breakpoints:{
         750 :{
       slidesPerView: 2,
       },
          1200 :{
       slidesPerView: 4, 
       }
      }
    });
  });

window.onload = function() {
    const container = document.querySelector(".hot-right-now.product-grid");   
    const items = Array.from(container.children);   
    items.sort((a, b) => {
        const skuA = parseInt(a.getAttribute("data-sku"), 10);
        const skuB = parseInt(b.getAttribute("data-sku"), 10);
        return skuA - skuB; // Sort in ascending order
    });   
    container.innerHTML = '';
    items.forEach(item => container.appendChild(item));
};


  // $(window).on("load", function () {
  //   function toggleProductImages() {
  //     if ($(window).width() <= 749) {        
  //       $(".desktop-product-images").remove();
  //       $(".mobile-product-imges-zoom").show();
  //     } else {
  //       $(".desktop-product-images").show();
  //       $(".mobile-product-imges-zoom").remove();
  //     }
  //   }

  //   toggleProductImages();

  //   $(window).resize(function () {
  //     toggleProductImages();
  //   });
  // });


 document.addEventListener('DOMContentLoaded', function () {
    const productVariantId = document.querySelector('input[name="variant_id"]')?.value;
    const stickyCartBar = document.getElementById('cart-bar');

    // Function to check cart drawer for matching variant ID
    function checkCartForVariant() {
        const cartVariantIds = Array.from(document.querySelectorAll('.cart-variant-id'))
            .map(input => input.value);

        if (cartVariantIds.includes(productVariantId)) {
            stickyCartBar?.classList.add('hidden'); // Hide cart bar
        } else {
            stickyCartBar?.classList.remove('hidden'); // Show cart bar
        }
    }

    // Initial check on page load
    checkCartForVariant();

    // Re-check when cart drawer updates
    document.addEventListener('cart:updated', checkCartForVariant);

    // Re-check after item removal
    document.addEventListener('click', function (event) {
        if (event.target.closest('[data-cart-remove]')) {
            setTimeout(checkCartForVariant, 500); // Delay ensures cart updates finish
        }
    });
});


// 30-5-2025
  document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.mob_pdp_videos.swiper-container', {
      loop: true,    
      pagination: {
        el: '.pdp-mob-progressbar',
        type: 'progressbar',
      },     
    });media
  });


$(document).ready(function(){
  // Initialize the Slick slider
  $('.client_review').slick({
    infinite: true,
    slidesToShow: 3,
    arrows: false, // Hide arrows
    dots: false,   // Hide dots
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Update the progress bar after each slide change
  $('.client_review').on('afterChange', function(event, slick, currentSlide){
    var totalSlides = slick.slideCount;
    var slideIndex = currentSlide + 1;
    var progressPercentage = (slideIndex / totalSlides) * 100;

    // Update the width of the progress bar
    $('.progress-bar').css('width', progressPercentage + '%');
  });
});
document.addEventListener("DOMContentLoaded", function() {
  var reviewDates = document.querySelectorAll('[data-review-date]');
  reviewDates.forEach(function(reviewDateElement) {
    var reviewDate = new Date(reviewDateElement.getAttribute('data-review-date'));
    var currentDate = new Date();

    var yearDifference = currentDate.getFullYear() - reviewDate.getFullYear();
    var monthDifference = currentDate.getMonth() - reviewDate.getMonth();
    var dayDifference = currentDate.getDate() - reviewDate.getDate();

    // Adjust month and year differences if dayDifference is negative
    if (dayDifference < 0) {
      monthDifference--;
      dayDifference += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate(); // Days in the previous month
    }

    // Adjust yearDifference if monthDifference is negative
    if (monthDifference < 0) {
      yearDifference--;
      monthDifference += 12;
    }

    var timeAgoText = '';
    if (yearDifference > 0) {
      timeAgoText = yearDifference + ' year' + (yearDifference > 1 ? 's' : '') + ' ago';
    } else if (monthDifference > 0) {
      timeAgoText = monthDifference + ' month' + (monthDifference > 1 ? 's' : '') + ' ago';
    } else if (dayDifference > 0) {
      timeAgoText = dayDifference + ' day' + (dayDifference > 1 ? 's' : '') + ' ago';
    } else {
      timeAgoText = 'Today';
    }

    reviewDateElement.textContent = timeAgoText;
  });
});




