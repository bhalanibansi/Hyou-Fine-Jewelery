window.dataLayer = window.dataLayer || [];
function trackEvent(eventName, element, extraData = {}) {
    let eventData = {
        'event': eventName,
        'page_referrer': document.referrer.includes("google") ? "google" : document.referrer.includes("facebook") ? "meta" : "direct",
        'locale': document.documentElement.lang || "en",
        // 'elementText': element.innerText.trim() || element.placeholder || 'Unknown',
        // 'isUserLoggedIn': document.body.classList.contains("customer-logged-in"),      
        'device.category': navigator.userAgent.includes("Mobi") ? "mobile" : "desktop",
        'utm': new URLSearchParams(window.location.search).get("utm_source") || "direct",
        'timestamp': new Date().toISOString(),
        // 'timezone': Intl.DateTimeFormat().resolvedOptions().timeZone,
        // 'user_agent': navigator.userAgent,
        'gtm.uniqueEventId': new Date().getTime(),
        // 'gtm.uniqueEventId': window.dataLayer.length + 1,     
        'page_location': window.location.href,
        'page_path': window.location.pathname,
        'page_referrer': document.referrer || 'direct',
        ...extraData
    };
    window.dataLayer.push(eventData);
    // console.log("Event Pushed:", eventData);
}
//Search Click
// document.addEventListener("click", function(event) {
//     let searchInput = event.target.closest("input[data-predictive-search-input]");
//     if (searchInput) {
//         let searchQuery = searchInput.value.trim() || "N/A"; // Get Search Term
//         let clickedResult = event.target.closest("a"); // Check if Clicked Element is a Link
//         let clickDestination = clickedResult && clickedResult.href.includes("/products/") ? "product_page" : "search_results_page";
//         let searchClickData = {
//             'event': "SEARCH_CLICK",
//             'page_referrer': document.referrer.includes("google") ? "google" : "meta",
//             'locale': document.documentElement.lang || "en",
//             'device.category': navigator.userAgent.includes("Mobi") ? "mobile" : "desktop",
//             'utm': new URLSearchParams(window.location.search).get("utm_source") || "direct",
//             'timestamp': new Date().toISOString(),
//             'gtm.uniqueEventId': new Date().getTime(),
//             'search_query': searchQuery,
//             'click_destination': clickDestination,
//             'page_location': window.location.href,
//             'page_path': window.location.pathname,
//         };
//         window.dataLayer.push(searchClickData);       
//     }
// });
// Collection Click
document.addEventListener("click", function(event) {
    let menuLink = event.target.closest("a[data-top-link]");  
    if (menuLink) {
      let collectionName = menuLink.innerText.trim() || "Unknown";
      let clickDestination = menuLink.href.includes("/collections/") ? "collection_page" : "other";
        trackEvent("MENU_CLICK", menuLink,{
          'collection_name': collectionName,
          'click_destination': clickDestination
        });
    }
});
// Cart Click
//   document.addEventListener("click", function(event) {
//     let cartBtn = event.target.closest("a[href*='/cart']");
//     if (cartBtn) {
//         let cartItemCount = document.querySelector("[data-cart-count]") ? 
//             parseInt(document.querySelector("[data-cart-count]").innerText, 10) || 0 : 0;
//         setTimeout(() => {
//             let cartValueElement = document.querySelector("[data-currency-usd], [data-amount], [ge-data-original-price]");
//             let rawCartValue = cartValueElement ? cartValueElement.getAttribute("data-currency-usd") || 
//                                                    cartValueElement.getAttribute("data-amount") || 
//                                                    cartValueElement.getAttribute("ge-data-original-price") || "0" : "0";
//             let numericCartValue = parseFloat(rawCartValue.replace(/[^0-9.]/g, "")) || 0.0;
//             let formattedCartValue = `$${Math.round(numericCartValue)}`;
//             trackEvent("CART_CLICK", cartBtn, {
//                 'cart_item_count': cartItemCount,
//                 'cart_discount': formattedCartValue,
//               'cart_total': numericCartValue
//             });           
//         }, 500);
//     }
// });
document.addEventListener("click", function(event) {
    let cartBtn = event.target.closest("a[href*='/cart']");
    if (cartBtn) {
        let cartItemCount = document.querySelector("[data-cart-count]") ? 
            parseInt(document.querySelector("[data-cart-count]").innerText, 10) || 0 : 0;

        setTimeout(() => {
            // Extract total cart value
            let totalPriceElement = document.querySelector(".cart__foot__inner .docapp-est-total .money"); // Adjust selector if needed
            let rawCartTotal = totalPriceElement ? totalPriceElement.innerText : "0";
            let numericCartTotal = parseFloat(rawCartTotal.replace(/[^0-9.]/g, "")) || 0.0;
          let formattedCartTotal = `$${numericCartTotal}`; // Add $ sign

            // Extract cart discount
            let discountElement = document.querySelector(".cart__foot__inner .docapp-cart-discount [data-currency-usd]"); // Adjust selector if needed
            let rawCartDiscount = discountElement ? discountElement.innerText : "0";
            let numericCartDiscount = parseFloat(rawCartDiscount.replace(/[^0-9.]/g, "")) || 0.0;
            let formattedCartDiscount = `$${numericCartDiscount}`; // Add $ sign
                
            trackEvent("CART_CLICK", cartBtn, {
              'event': 'CART_CLICK',
                            'cart_item_count': cartItemCount,
                            'cart_total': formattedCartTotal,
                            'cart_discount': formattedCartDiscount
            });
            }, 500);
            }
});
  
// Category Click
document.addEventListener("click", function(event) {
    let categoryBtn = event.target.closest("a.reel_inner");
    if (categoryBtn) {
        // console.log("Clicked Element:", categoryBtn); 
        trackEvent("CATEGORY_CLICK", categoryBtn, {
            'category_name': categoryBtn.textContent.trim()
        });      
        // console.log("Category Name:", categoryBtn.textContent.trim());
    }
});
 // Treand Click
document.addEventListener("click", function(event) {
  let trendSlide = event.target.closest(".swiper-slide.category_main_slide");
  if(trendSlide){
    let trendName = trendSlide.getAttribute("data-title") || "Unknown Trend";
    trackEvent("TREND_CLICK", trendSlide, {
            'trend_name': trendName
        });    
  }
});
 // Treand Click(tranding now section)
document.addEventListener("click", function(event) {
  let trendnowSlide = event.target.closest(".image_banner_main");
  if(trendnowSlide){
    let trendnowName = trendnowSlide.getAttribute("data-title") || "Unknown Trend";
    trackEvent("TREND_CLICK", trendnowSlide, {
            'trend_name': trendnowName
        });    
  }
});

// Delete icon click
document.addEventListener("click", function (event) {
    let deleteButton = event.target.closest(".cart__item__remove");
    if (deleteButton) {        
        trackEvent("DELETE_PRODUCT_CLICK", deleteButton, {         
        });
    }
});
// Quantity icon click
document.addEventListener("click", function (event) {
  let quantityButton = event.target.closest(".cart__quantity-minus,.cart__quantity-plus");
  if(quantityButton){
    trackEvent("CHANGE_QUANTITY_CLICK", quantityButton);
  }
});
//Share Click
document.addEventListener("click", function (event) {
  let shareBtn= event.target.closest(".sharing-button");
  if (shareBtn) {
    trackEvent("SHARE_CLICK", shareBtn);
  }
});
//Size Click
document.addEventListener("change", function(event) {
    let selectedSizeInput = event.target.closest('input[type="radio"][name^="options[Size]"]');    
    if (selectedSizeInput) {
        let label = document.querySelector(`label[for="${selectedSizeInput.id}"]`);
        let sizeValue = label ? label.querySelector('.variant_number')?.innerText.trim() : selectedSizeInput.value;        
        if (sizeValue) {
            setTimeout(() => {
                trackEvent("SIZE", selectedSizeInput, { 'size': sizeValue });
            }, 100);
        } 
    }
});
// Product Click
document.addEventListener("click", function (event) {
    let productElement = event.target.closest(".product-item");
    if (!productElement) return;
    let productLink = productElement.querySelector(".product-link");
    let productTitle = productElement.querySelector(".product-item__title span");
    let productCategory = productElement.querySelector(".subtitle");
    let productPrice = productElement.querySelector(".new-price");
    trackEvent("PRODUCT_CLICK", productElement, {
        'product_id': productElement.id ? productElement.id.split("--").pop() : "Unknown",
        'product_name': productTitle ? productTitle.innerText.trim() : "Unnamed Product",
        'product_category': productCategory ? productCategory.innerText.trim() : "Uncategorized",
        'product_price': productPrice ? parseFloat(productPrice.innerText.replace(/[^0-9.]/g, "")) : 0.0
    });
});
// add to cart Click
document.addEventListener("click", function (event) {
  let addToCartBtn = event.target.closest("button[data-add-to-cart]");
  if (!addToCartBtn) return;

  let productElement = event.target.closest(".product__submit");
  if (!productElement) return;

  // Title & category
  let productTitle = document.querySelector(".product__title__wrapper h1")?.innerText.trim() || "Unnamed Product";
  let productCategory = document.querySelector(".subtitle")?.innerText.trim() || "Uncategorized";

  // Quantity
  let quantityInput = document.querySelector(".quantity__input");
  let quantity = quantityInput ? parseInt(quantityInput.value, 10) || 1 : 1;

  // ✅ STEP 1: Get selected variant ID
  let variantId = document.querySelector("[name='id']")?.value;
  let productPrice = 0;

  // ✅ STEP 2: Read from ShopifyAnalytics meta OR Shopify global object
  try {
    let productData = window.ShopifyAnalytics?.meta?.product || window.Shopify?.product;
    if (productData && productData.variants && variantId) {
      let matchedVariant = productData.variants.find(v => v.id == variantId);
      if (matchedVariant) {
        productPrice = matchedVariant.price / 100; // Convert from cents
      }
    }
  } catch (err) {
    console.warn("Failed to get price from global product data", err);
  }

  // ✅ STEP 3: Fallback to visible price if needed
  if (!productPrice || productPrice === 0) {
    let priceElement = document.querySelector(
      ".price__regular .price-item--regular, .price__sale .price-item--sale, .product__price .price-item"
    );
    let priceText = priceElement ? priceElement.innerText : "";
    productPrice = parseFloat(priceText.replace(/[^0-9.]/g, "")) || 0.0;
  }

  // Fire event
  setTimeout(() => {
    trackEvent("ADD_TO_CART_CLICK", addToCartBtn, {
      product_name: productTitle,
      product_category: productCategory,
      product_price: productPrice,
    });
  }, 300);
});

// product detail click
// document.addEventListener("click", function(event) {
//   let accordionTitle = event.target.closest(".accordion__title");
//   if (accordionTitle) {
//     let detailSection = accordionTitle.querySelector(".accor-title")?.innerText.trim() || "Unknown";
//     trackEvent("PRODUCT_DETAILS_CLICK", accordionTitle, {
//             'detail_section': detailSection
//         });
//   }
// });
// Profile Click
document.addEventListener("click", function(event) {
    let accountBtn = event.target.closest("a[href*='/account']");
    if (accountBtn) {
        trackEvent("account_click", accountBtn);
    }
});
//Share Click
document.addEventListener("click", function (event) {
  let shareBtn= event.target.closest(".sharing-button");
  if (shareBtn) {
    trackEvent("SHARE_CLICK", shareBtn);
  }
});
// Login Success Tracking
// document.addEventListener("submit", function(event) {
//     let loginForm = event.target.closest("form[action*='/account/login']");
//     if (loginForm) {
//         event.preventDefault(); // Prevent default to track the event first
//         let emailInput = loginForm.querySelector("input[type='email']");
//         let email = emailInput ? emailInput.value.trim() : "unknown";        
//         trackEvent("LOGIN_SUCCESS", loginForm, {
//             'email': email,
//             'type': "email"
//         });
//         // console.log("Tracking LOGIN_SUCCESS:", { email: email, type: "email" });
//         // alert("Tracking LOGIN_SUCCESS: " + JSON.stringify({ email: email, type: "email" }));
//         setTimeout(() => loginForm.submit(), 500); // Delay login for smooth tracking
//     }
// });
// login Failure
// document.addEventListener("submit", function(event) {
//     let loginForm = event.target.closest("form[action*='/account/login']");
//     if (loginForm) {
//         event.preventDefault();         
//         let emailInput = loginForm.querySelector("input[type='email']");
//         let passwordInput = loginForm.querySelector("input[type='password']");
//         let email = emailInput ? emailInput.value.trim() : "unknown";
//         let password = passwordInput ? passwordInput.value.trim() : "";
//         let attemptCount = parseInt(sessionStorage.getItem("login_attempts") || "0") + 1;
//         sessionStorage.setItem("login_attempts", attemptCount);
//         let reason = email === "" ? "wrong email" : password === "" ? "wrong password" : "invalid credentials";
//         trackEvent("LOGIN_FAILURE", {
//             'email': email,
//             'type': "email",
//             'reason': reason,
//             'attempt_count': attemptCount
//         });
//         // console.log("Tracking LOGIN_FAILURE:", { email: email, reason: reason, attempt_count: attemptCount });
//         // alert("LOGIN_FAILURE: " + JSON.stringify({ email: email, reason: reason, attempt_count: attemptCount }));
//         setTimeout(() => loginForm.submit(), 500);
//     }
// });
// forgot password
document.addEventListener("submit", function(event) {
    let forgotPasswordForm = event.target.closest("form[action*='/account/recover']");
    if (forgotPasswordForm) {
        event.preventDefault(); // Prevent default submission for testing
        trackEvent("FORGOT_PASSWORD", {
            'reset_method': "email",
            'reset_status': "initiated"
        });
        // console.log("Tracking FORGOT_PASSWORD: { reset_method: 'email', reset_status: 'initiated' }");
        // alert("Tracking FORGOT_PASSWORD: Reset initiated");
        setTimeout(() => forgotPasswordForm.submit(), 500);
    }
});
//signup click
// document.addEventListener("click", function(event) {
//     let signupLink = event.target.closest("a[href='/account/register']");
//     if (signupLink) {
//         trackEvent("SIGNUP_CLICK", signupLink);
//       // alert("signupLink:", signupLink);
//     }
// });  
// Track Signup Failures
// document.addEventListener("submit", function(event) {
//     let signupForm = event.target.closest("form[action*='/account/register']");
//     if (signupForm) {
//         setTimeout(() => {
//             let errorElement = document.querySelector(".error-message"); // Adjust selector as needed
//             if (errorElement) {
//                 let reason = errorElement.innerText.includes("email") ? "wrong email" :
//                              errorElement.innerText.includes("password") ? "wrong password" : "other";
//                 let attemptCount = parseInt(localStorage.getItem("signup_attempts") || "0", 10) + 1;
//                 localStorage.setItem("signup_attempts", attemptCount);
//                 trackEvent("SIGNUP_FAILURE", {
//                     'reason': reason,
//                     'attempt_count': attemptCount
//                 });
//             }
//         }, 500);
//     }
// });

//signup success
// document.addEventListener("submit", function(event) {
//     let signupForm = event.target.closest("form[action*='/account/register']");
//     if (signupForm) {
//         let emailInput = signupForm.querySelector("input[type='email']");
//         let userEmail = emailInput ? emailInput.value.trim() : "N/A";
//         setTimeout(() => {
//             if (window.location.pathname.includes("/account")) { 
//                 trackEvent("SIGNUP_SUCCESS", {
//                     'email': userEmail,
//                     'type': "email"
//                 });              
//             }
//         }, 1500); 
//     }
// });
// checkout click
document.addEventListener("click", function (event) {
    let checkoutButton = event.target.closest(".cart__buttons");
    if (checkoutButton) {
        let cartItemCount = document.querySelector("[data-cart-count]") ? 
            parseInt(document.querySelector("[data-cart-count]").innerText, 10) || 0 : 0;
        let cartValueElement = document.querySelector(".docapp-est-total [data-amount]");
        let cartValue = cartValueElement ? parseFloat(cartValueElement.getAttribute("data-amount") || "0") : 0;
        let couponApplied = document.querySelector(".docapp-coupon-input--bean-container--bean") ? "true" : "false";
        let couponCode = couponApplied === "true" ? document.querySelector(".docapp-coupon-input--bean-container--bean")?.textContent.trim() : "";
        // alert(
        //     `Checkout button clicked!\n` +
        //     `Cart Item Count: ${cartItemCount}\n` +
        //     `Cart Value: ${cartValue}\n` +
        //     `Coupon Applied: ${couponApplied}\n` +
        //     `Coupon Code: ${couponCode}`
        // );
        trackEvent("CHECKOUT_CLICK", checkoutButton, {
            cart_item_count: cartItemCount,
            cart_value: cartValue,
            coupon_applied: couponApplied,
            coupon_code: couponCode
        });      
    }
});

// discount coupon code 
document.addEventListener("click", function (event) {
  let couponnCode = event.target.closest(".docapp-coupon-input--button");
  if (couponnCode) {
    // alert("test");
  }
});

// fliter track
document.addEventListener("click", function(event) {
      const filterElement = event.target.closest(".popout--group");
      if (filterElement) {
        const filterLabel = filterElement.querySelector('.popout__toggle')?.innerText?.trim();
        trackEvent("FILTER_CLICK", filterElement, {
           filter_type: filterLabel || 'unknown'
        });
      }
    });

// sortby track
document.addEventListener("click", function(event) {
      const filterElement = event.target.closest(".popout--sort");
      if (filterElement) {
        const filterLabel = filterElement.querySelector('.popout__toggle')?.innerText?.trim();
        trackEvent("SORTBY_CLICK", filterElement, {
           filter_type: filterLabel || 'unknown'
        });
      }
    });

// the letter campaign page video

document.addEventListener('DOMContentLoaded', function () {
  const videos = document.querySelectorAll('.campaign_desk_video, .campaign_mob_video');

  videos.forEach(function (video) {
    let playTime = 0;
    let trackingIntervals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; // seconds
    let trackedTimes = [];

    // Track play time intervals
    video.addEventListener('timeupdate', function () {
      const currentTime = Math.floor(video.currentTime);
      if (trackingIntervals.includes(currentTime) && !trackedTimes.includes(currentTime)) {
        trackedTimes.push(currentTime);
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'videoPlayProgress',
          videoTime: currentTime,
          videoSrc: video.currentSrc,
          videoType: video.classList.contains('campaign_mob_video') ? 'mobile' : 'desktop',
          page_referrer: document.referrer || "direct",
          locale: navigator.language || "EN",
          device_category: /Mobi|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
          utm: new URLSearchParams(window.location.search).get("utm_source") || "direct",
          timestamp: new Date().toISOString(),
          gtm_uniqueEventId: Date.now(),
          page_location: window.location.href,
          page_path: window.location.pathname
        });
      }
    });

    // Track control clicks
    ['play', 'pause', 'volumechange', 'fullscreenchange'].forEach(function (eventType) {
      video.addEventListener(eventType, function (e) {
        let action = eventType;

        // Make it readable
        if (eventType === 'volumechange') {
          action = video.muted ? 'mute' : 'unmute';
        }

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'videoControlClick',
          action: action,
          videoSrc: video.currentSrc,
          videoType: video.classList.contains('campaign_mob_video') ? 'mobile' : 'desktop',
          page_referrer: document.referrer || "direct",
          locale: navigator.language || "EN",
          device_category: /Mobi|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
          utm: new URLSearchParams(window.location.search).get("utm_source") || "direct",
          timestamp: new Date().toISOString(),
          gtm_uniqueEventId: Date.now(),
          page_location: window.location.href,
          page_path: window.location.pathname
        });
      });
    });
  });
});


// page scroll event 
document.addEventListener("DOMContentLoaded", function () {
  let maxScroll = 0;

  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.floor((scrollTop / docHeight) * 100);

    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
    }
  });

  // Fire max scroll when user leaves the page
window.addEventListener("beforeunload", function () {
  if (maxScroll > 0) {
    const scrollPercent = Math.round(maxScroll * 100); 

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "scrollDepth",
      maxScrollPercent: scrollPercent, 
      page_referrer: document.referrer || "direct",
      locale: navigator.language || "EN",
      device_category: /Mobi|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
      utm: new URLSearchParams(window.location.search).get("utm_source") || "direct",
      timestamp: new Date().toISOString(),
      gtm_uniqueEventId: Date.now(),
      page_location: window.location.href,
      page_path: window.location.pathname
    });

    console.log("📉 Max Scroll Depth:", scrollPercent + "%");
  }
});
});

// page address link

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "customPageLoad",
  page_path: window.location.pathname,
  page_location: window.location.href,
  page_referrer: document.referrer || "direct",
  locale: navigator.language || "EN",
  device_category: /Mobi|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
  utm: new URLSearchParams(window.location.search).get("utm_source") || "direct",
  timestamp: new Date().toISOString(),
  gtm_uniqueEventId: Date.now()
});


document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.product-item__image.double__image a').forEach(function (el) {
    el.addEventListener('click', function () {     
      const productName = el.querySelector('img')?.alt || el.textContent.trim();

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "campaignProductclick",
        product_name: productName,
        page_path: window.location.pathname,
        page_referrer: document.referrer || "direct",
        locale: navigator.language || "EN",
        device_category: /Mobi|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
        timestamp: new Date().toISOString(),
        page_location: window.location.href,
        gtm_uniqueEventId: Date.now()
      });
    });
  });
});

// pdp video event tracking

document.addEventListener('DOMContentLoaded', function () {
  const videos = document.querySelectorAll('.mobile-product-video video');

  videos.forEach(function (video) {
    let playStartTime = null;
    let hasScrolledOutWhilePlaying = false;
    let userInteracted = false;

    const getCommonData = () => ({
      page_path: window.location.pathname,
      page_location: window.location.href,
      videoSrc: video.currentSrc,
      videoType: 'mobile',
      page_referrer: document.referrer || "direct",
      locale: navigator.language || "EN",
      device_category: /Mobi|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
      utm: new URLSearchParams(window.location.search).get("utm_source") || "direct",
      timestamp: new Date().toISOString(),
      gtm_uniqueEventId: Date.now()
    });

    const sendPlayProgressAndControlClick = (action) => {
      const currentTime = Math.floor(video.currentTime);
      window.dataLayer = window.dataLayer || [];

      window.dataLayer.push({
        event: 'videoPlayProgress',
        videoTime: currentTime,
        ...getCommonData()
      });

      window.dataLayer.push({
        event: 'videoControlClick',
        action: action,
        ...getCommonData()
      });

      console.log(`🎯 ${action} at ${currentTime}s`);
    };

    const sendWatchedBeforeScrollEvent = (watchedTime) => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'videoWatchedBeforeScroll',
        videoTime: Math.floor(watchedTime),
        ...getCommonData()
      });

      console.log(`📉 Scrolled out after watching ${Math.floor(watchedTime)}s`);
    };

    // Detect any click or touch as interaction
    const setUserInteraction = () => {
      userInteracted = true;
    };

    video.addEventListener('click', setUserInteraction);
    video.addEventListener('touchstart', setUserInteraction);

    // ▶️ PLAY
    video.addEventListener('play', function () {
      playStartTime = Date.now();
      hasScrolledOutWhilePlaying = false;
      if (userInteracted) {
        sendPlayProgressAndControlClick('play');
      }
    });

    // ⏸️ PAUSE
    video.addEventListener('pause', function () {
      if (userInteracted) {
        sendPlayProgressAndControlClick('pause');
      }
      playStartTime = null;
    });

    // 🔇 / 🔊 MUTE or UNMUTE
    video.addEventListener('volumechange', function () {
      if (userInteracted) {
        const action = video.muted ? 'mute' : 'unmute';
        sendPlayProgressAndControlClick(action);
      }
    });

    // ⛶ FULLSCREEN
    video.addEventListener('fullscreenchange', function () {
      if (userInteracted) {
        sendPlayProgressAndControlClick('fullscreen');
      }
    });

    // 👀 IntersectionObserver — track scroll out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const isVisible = entry.isIntersecting;

          if (!isVisible && !video.paused && playStartTime && !hasScrolledOutWhilePlaying) {
            const watchedTime = (Date.now() - playStartTime) / 1000;
            sendWatchedBeforeScrollEvent(watchedTime);
            hasScrolledOutWhilePlaying = true;
          }

          if (isVisible) {
            hasScrolledOutWhilePlaying = false;
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(video);
  });
});

// pdp review scroll event track
document.addEventListener("DOMContentLoaded", function () {
  const $ = window.jQuery;

  if (!$ || typeof $.fn.slick !== "function") {
    console.warn("jQuery or Slick not loaded");
    return;
  }

  // review slider event trigger
  const $slider = $(".main_cst_review");

  if ($slider.length) {
    let maxSlideIndex = 0;
    let debounceTimer = null;

    $slider.on("afterChange", function (event, slick, currentSlide) {
      const $currentSlide = $(slick.$slides.get(currentSlide));
      const index = parseInt($currentSlide.attr("data-slick-index"), 10) || 0;

      // Update maxSlideIndex
      maxSlideIndex = Math.max(maxSlideIndex, index);

      // Debounce: clear previous timer
      clearTimeout(debounceTimer);

      // Set timer to fire only when user stops sliding for 1.5s
      debounceTimer = setTimeout(function () {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "reviewSliderView",
          max_slide_count: maxSlideIndex,
          page_location: window.location.href,
          page_referrer: document.referrer || 'direct',
          page_path: window.location.pathname
        });

        console.log("✅ GTM Event Sent: Max Slide Index", maxSlideIndex);

        // Reset for next session
        maxSlideIndex = 0;
      }, 1500); // Change this value if you want a longer/shorter delay
    });
  } else {
    console.warn("⚠️ Review slider element not found.");
  }
});


// hot right now product click
  document.addEventListener('DOMContentLoaded', function () {
    var hotRightNowSection = document.querySelector('.hot-right-now');

    if (hotRightNowSection) {
      var productLinks = hotRightNowSection.querySelectorAll('a.product-images-curv');

      productLinks.forEach(function (el) {
        el.addEventListener('click', function (e) {
          const href = el.getAttribute('href') || '';
          const productName = href.split('/').pop().replace(/-/g, ' ');

          // Show alert for testing
          // alert("Clicked product: " + productName);

          // Push to dataLayer
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'hotRightNowProductClick',
            productHref: href,
            productName: productName,
            page_referrer: document.referrer || 'direct',
            locale: navigator.language || 'EN',
            device_category: /Mobi|Android|iPhone/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
            timestamp: new Date().toISOString(),
            gtm_uniqueEventId: Date.now(),
            page_location: window.location.href,
            page_path: window.location.pathname
          });

          // Optionally delay redirect if needed (only for testing)
          // e.preventDefault();
          // setTimeout(function() {
          //   window.location.href = href;
          // }, 500);
        });
      });
    }
  });

// pdp main slider track
window.dataLayer = window.dataLayer || [];

function sendSlideScrollEvent(maxSlideCount) {
  window.dataLayer.push({
    event: 'product_image_slide',
    max_slide_count: maxSlideCount, // renamed key here
    page_path: window.location.pathname, 
    page_referrer: document.referrer || 'direct',
    page_location: window.location.href 
  });
  console.log('📸 Slide event fired:', {
    max_slide_count: maxSlideCount,
    pagePath: window.location.pathname
  });
}

function initSlickObserver() {
  const slickTrack = document.querySelector('.slick-track');

  if (!slickTrack) {
    setTimeout(initSlickObserver, 500); // Retry
    return;
  }

  let sessionMaxSlide = 0;
  let debounceTimer = null;

  const triggerSlideEvent = () => {
    if (sessionMaxSlide > 0) {
      sendSlideScrollEvent(sessionMaxSlide);
      sessionMaxSlide = 0; // reset for next session
    }
  };

  const observer = new MutationObserver(() => {
    const activeSlide = document.querySelector('.product__slide.slick-current');
    if (!activeSlide) return;

    const currentIndex = parseInt(activeSlide.getAttribute('data-slick-index'), 10);
    if (!isNaN(currentIndex)) {
      sessionMaxSlide = Math.max(sessionMaxSlide, currentIndex);

      // debounce: wait 800ms after last change before triggering
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(triggerSlideEvent, 2000);
    }
  });

  observer.observe(slickTrack, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class']
  });

  console.log("✅ Slick observer initialized.");
}

window.addEventListener('load', function () {
  setTimeout(initSlickObserver, 500);
});

 
// random click event
document.addEventListener('DOMContentLoaded', function () {
  document.body.addEventListener('click', function (e) {
    const clickedElement = e.target;

    // Traverse up if click is on nested child
    const target = clickedElement.closest('[data-track-click], a, button, div, span, summary, img, h1, p');

    if (!target) return;

    // Check if the clicked element is an image
    const isImage = clickedElement.tagName === 'IMG';
    const linkedElement = isImage ? clickedElement.closest('a') : null;
    const linkedHref = linkedElement ? linkedElement.href : 'No Link';

    // Find parent Shopify section
    const shopifySectionParent = clickedElement.closest('[id^="shopify-section-"], [id^="section-"], [data-section-id]');

    let shopifySectionChildClass;
    if (shopifySectionParent) {
      const allDescendantsWithClass = shopifySectionParent.querySelectorAll('[class]');
      for (const element of allDescendantsWithClass) {
        if (element.contains(clickedElement)) {
          shopifySectionChildClass = element.className;
          break;
        }
      }
    }

    // Prepare event data
    const eventData = {
      event: 'ANALYTICS_CLICK',
      click_text: isImage 
        ? `Image Source: ${clickedElement.src}` 
        : target.innerText?.trim() || target.getAttribute('aria-label') || target.getAttribute('alt') || '',
      click_id: target.id || '',
      click_class: target.className || '',
      ...(shopifySectionChildClass && { shopify_section_child_class: shopifySectionChildClass }),
      page_location: window.location.href,
      page_path: window.location.pathname,
      page_host: window.location.hostname,
      page_referrer: document.referrer || 'direct'
    };

    // Optional alert for image debugging
    // if (isImage) {
    //   alert(`Image Clicked!\nImage Source: ${clickedElement.src}\nLinked URL: ${linkedHref}`);
    // }

    // Push to dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(eventData);
  });
});





document.addEventListener('DOMContentLoaded', function () {
  const subtitleEl = document.getElementById('subtitle_content');

  if (subtitleEl) {
    subtitleEl.addEventListener('click', function (e) {
      const subtitleText = subtitleEl.textContent.trim();

      const eventData = {
        event: 'SUBTITLE_CLICK',
        click_text: subtitleText,
        click_id: subtitleEl.id || '',
        click_class: subtitleEl.className || '',
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_referrer: document.referrer || 'direct'
      };

      console.log('🔹 Subtitle Click Captured:', eventData);

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(eventData);
    });
  }
});



// humberger_menu event

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector('[data-drawer-toggle="hamburger"]');

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "HAMBURGER_CLICK",
        click_label: "Mobile Menu Toggle",
        page_path: window.location.pathname,
        page_referrer: document.referrer || 'direct',
        page_location: window.location.href
      });

      console.log("🍔 Hamburger menu click tracked in dataLayer.");
    });
  }
});




// max scrolldepth 10 sec
 let maxScroll = 0;
  let inactivityTimer;

  function getScrollPercent() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    return Math.round((scrollTop / docHeight) * 100);
  }

  function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(function () {
      // Trigger event in dataLayer with maxScroll
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'SCROLL_ON_PAGE',
       maxScrollPercent: maxScroll,
        page_referrer: document.referrer || "direct",
        locale: navigator.language || "EN",
        device_category: /Mobi|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
        utm: new URLSearchParams(window.location.search).get("utm_source") || "direct",
        timestamp: new Date().toISOString(),
        gtm_uniqueEventId: Date.now(),
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    }, 10000); // 10 seconds
  }

  function monitorScrollAndActivity() {
    window.addEventListener('scroll', function () {
      const currentScroll = getScrollPercent();
      if (currentScroll > maxScroll) {
        maxScroll = currentScroll;
      }
      resetInactivityTimer();
    });

    ['mousemove', 'click', 'keydown'].forEach(function (evt) {
      window.addEventListener(evt, resetInactivityTimer);
    });
  }

  document.addEventListener('DOMContentLoaded', monitorScrollAndActivity);