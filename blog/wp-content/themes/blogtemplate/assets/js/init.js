
var design_proces_animatiom_done = 0,
    design_principle_animatiom_done = 0;

function myFunction() {
    if ($("#myBar").length) {
        var e = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 124;
        document.getElementById("myBar").style.height = e + "%"
    }
}
AOS.init({
    duration: 1500,
    disable: function() {
        return window.innerWidth < 992
    }
}),
 window.onscroll = function() {
    myFunction()
};
var list = $(".mobile-menu > ul li > span.mobile-dropdown-arrow");
if (list.click(function(e) {
        var i = this.parentNode.getElementsByTagName("ul").item(0);
        null != i && (e.preventDefault(), $(i).slideToggle(300));
        var t = this.parentNode.getElementsByTagName("a").item(0);
        null != t && $(t).toggleClass("angle-active")
    }), $(window).scroll(function() {
        var e;
        $(window).scrollTop() > 10 ? $(".home_pg").addClass("up") : $(".home_pg").removeClass("up"), $(window).scrollTop() > 10 ? $(".main-navbar").addClass("bg") : $(".main-navbar").removeClass("bg"), $(window).scrollTop() > 10 ? $(".mobile-nav").addClass("header_main_add") : $(".mobile-nav").removeClass("header_main_add"), (e = $(window).scrollTop()) > 10 ? $(".mHeader-wrap").addClass("bg") : $(".mHeader-wrap").removeClass("bg"), $("#design-proces").length && e > $("#design-proces").offset().top - 400 && 0 == design_proces_animatiom_done && (design_proces_animatiom_done = 1, $(".web-design-proces").addClass("text-bounce")), $("#design-principles").length && e > $("#design-principles").offset().top - 550 && 0 == design_principle_animatiom_done && (design_principle_animatiom_done = 1, $(".principle_com").addClass("text-bounce"))
    }), $("#zoom-wrap1").length) var controller = new ScrollMagic.Controller,
    scene1 = new ScrollMagic.Scene({
        triggerElement: "#zoom-wrap1",
        duration: jQuery(window).height()
    }).setTween(".zoom-in-img", .1, {
        scale: 0,
        opacity: 0
    }).addTo(controller);
if ($("#zoom-wrap2").length) var controller2 = new ScrollMagic.Controller,
    scene2 = new ScrollMagic.Scene({
        triggerElement: "#zoom-wrap2",
        duration: jQuery(window).height()
    }).setTween(".zoom-in-img1", .1, {
        scale: 0,
        opacity: 0
    }).addTo(controller2);

function tabParentHeight() {
    $(".tab-slide-sec").height(), $(".tab-slide-sec .tab-right-side").height()
}
if ($(".tab-slide-sec h4").click(function(e) {
        e.preventDefault(), $(this).addClass("active", 1e3), $(this).siblings().removeClass("active", 1e3), $(this).parent().height(), $(this).next().height()
    }), $(window).resize(function() {
        tabParentHeight()
    }), $(document).resize(function() {
        tabParentHeight()
    }), tabParentHeight(), jQuery(document).ready(function(e) {
        e(document).on("click", ".toggle-nav", function(i) {
            i.preventDefault(), e("body").toggleClass("visible-nav")
        }), e(document).on("click", ".nav-overlay", function() {
            e("body").removeClass("visible-nav")
        }), e("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function() {
            e(this).toggleClass("open")
        }), e(".pointparallax").pointparallax();
        var i = e(".cd-section"),
            t = e("#cd-vertical-nav a");

        function n() {
            e("#is-selected-check-6").hasClass("is-selected") ? e("#down-arrow").addClass("arrow-disabled") : e("#is-selected-check-1").hasClass("is-selected") ? e("#up-arrow").addClass("arrow-disabled") : (e("#up-arrow").removeClass("arrow-disabled"), e("#down-arrow").removeClass("arrow-disabled")), i.each(function() {
                $this = e(this);
                var i = e('#cd-vertical-nav a[href="#' + $this.attr("id") + '"]').data("number") - 1;
                $this.offset().top - e(window).height() / 2 < e(window).scrollTop() && $this.offset().top + $this.height() - e(window).height() / 2 > e(window).scrollTop() ? (t.eq(i).addClass("is-selected"), e(".arrow-anchor").eq(0).attr("href", "#section" + i), e(".arrow-anchor").eq(1).attr("href", "#section" + (i + 2))) : t.eq(i).removeClass("is-selected")
            }), i.each(function() {
                $this = e(this);
                var i = e('#cd-vertical-nav-mobile a[href="#' + $this.attr("id") + '"]').data("number") - 7;
                $this.offset().top - e(window).height() / 1 < e(window).scrollTop() && $this.offset().top + $this.height() - e(window).height() / 1 > e(window).scrollTop() ? navigationItemsMobile.eq(i).addClass("is-selected") : navigationItemsMobile.eq(i).removeClass("is-selected")
            })
        }

        function o(i) {
            var t = i.offset().top - 50;
            e(window).width() < 992 && (t -= 60), e("html,body").animate({
                scrollTop: t
            }, 600)
        }
        if (navigationItemsMobile = e("#cd-vertical-nav-mobile a"), applyJob = e("#apply-Job a"), n(), e(window).on("scroll", function() {
                n()
            }), t.on("click", function(i) {
                i.preventDefault(), o(e(this.hash))
            }), navigationItemsMobile.on("click", function(i) {
                i.preventDefault(), o(e(this.hash))
            }), applyJob.on("click", function(i) {
                i.preventDefault(), o(e(this.hash))
            }), e(window).width() > 992) {
            var a = e(window).outerHeight() - 78;
            if (e(".listing-info-sec").length) {
                var s = e(".web-sidebar"),
                    r = e(".project-structure-sec").position().top - a,
                    l = e(".listing-info-sec").position().top + 205;
                e(window).scroll(function(i) {
                    var t = e(this).scrollTop();
                    t >= l && t < r ? (s.parents(".left-scrool").removeClass("botttom-aligned"), s.addClass("fixed")) : t > r ? s.parents(".left-scrool").addClass("botttom-aligned") : s.removeClass("fixed")
                })
            }
        }
        e(window).width() < 992 && e(".listing-info-sec").length && (s = e(".mobile-progressbar"), r = e(".project-structure-sec").position().top - 900, l = e(".listing-info-sec").position().top + 400, e(window).scroll(function(i) {
            var t = e(this).scrollTop();
            t >= l && t < r ? s.addClass("fixed") : s.removeClass("fixed")
        })), jQuery("li.has-uipl-mega-menu, li.has-uipl-sub-menu").mouseover(function(e) {
            jQuery("li.has-uipl-mega-menu, li.has-uipl-sub-menu").removeClass("sub-menu-active"), jQuery(this).addClass("sub-menu-active")
        }), jQuery("li.has-uipl-mega-menu, li.has-uipl-sub-menu").mouseout(function(e) {
            jQuery(this).removeClass("sub-menu-active")
        }), jQuery(".mobile-testimonialcta-testimonial-slider.swiper-container").length && new Swiper(".mobile-testimonialcta-testimonial-slider.swiper-container", {
            autoplay: {
                delay: 6e3
            },
            loop: !0,
            slidesPerView: 1,
            pagination: {
                el: ".mobile-testimonialcta-testimonial-pagination"
            }
        }), jQuery(".uipl-page-progresbar").length && jQuery(document).scroll(function() {
            jQuery(".uipl-page-progresbar > .holder > .bar").css({
                width: 100 * jQuery(document).scrollTop() / (jQuery(document).height() - jQuery(window).height()) + "%"
            })
        }), jQuery(".scrollspy-links").length && jQuery(".scrollspy-links a").on("click", function(e) {
            e.preventDefault(), jQuery("html, body").animate({
                scrollTop: jQuery(jQuery(this).attr("href")).offset().top - jQuery("nav.navbar").outerHeight()
            }, "slow")
        }), jQuery("#BlockchainAttemptsTab").length && (setInterval(function() {
            jQuery("#BlockchainAttemptsTab li:nth-child(2) a").tab("show")
        }, 3e3), setInterval(function() {
            jQuery("#BlockchainAttemptsTab li:nth-child(1) a").tab("show")
        }, 6e3)), jQuery("[data-fancybox]").length && jQuery("[data-fancybox]").fancybox({
            caption: !0,
            clickContent: !1,
            hash: !1,
            animationEffect: "zoom-in-out",
            transitionEffect: "slide",
            buttons: ["slideShow", "fullScreen", "thumbs", "close"],
            thumbs: {
                autoStart: !0,
                axis: "x"
            }
        }), jQuery(window).width() > 992 && jQuery(".blog-herozone-main-share").length && jQuery(".blog-herozone-main-share").stickySidebar({
            containerSelector: ".wraper-blog-main",
            innerWrapperSelector: ".sticky-social-share"
        }), jQuery(".matchHeight").length && jQuery(".matchHeight").matchHeight(), jQuery(".freshclinic-components-box-row.swiper-container").length && new Swiper(".freshclinic-components-box-row.swiper-container", {
            slidesPerView: 1.25,
            centeredSlides: !0,
            autoplay: {
                delay: 6e3
            },
            loop: !0,
            spaceBetween: 20,
            loopedSlides: 2
        }), jQuery(".pwa-action-box.swiper-container").length && new Swiper(".pwa-action-box.swiper-container", {
            slidesPerView: 1.25,
            centeredSlides: !0,
            autoplay: {
                delay: 6e3
            },
            loop: !0,
            loopedSlides: 2
        }), jQuery(".uipl-drawable-svg").length && new Vivus("branding-icon", {
            type: "sync",
            start: "inViewport",
            duration: 100
        })
    }), jQuery(window).ready(function(e) {
        e(".blurry-load").each(function() {
            e(this).addClass("blur-out").removeClass("blurry-load"), e(this).addClass("blur-out")
        })
    }), $("#portfolio-filter").length) {
    var selectedClass = "";
    $(".fil-cat").click(function() {
        $(this).addClass("active").siblings().removeClass("active"), selectedClass = $(this).attr("data-rel"), $("#portfolio-filter").fadeTo(100, .1), $("#portfolio-filter .portfolio-list-filter").not("." + selectedClass).fadeOut().removeClass("scale-anm"), setTimeout(function() {
            $("." + selectedClass).fadeIn().addClass("scale-anm"), $("#portfolio-filter").fadeTo(300, 1)
        }, 300)
    })
}
if ($("#project-list").loadMore({
        selector: ".project-load",
        loadBtn: "#btn",
        limit: 4,
        load: 2,
        animate: !1,
        animateIn: "fadeInUp"
    }), $(window).width() < 992) var swiper = new Swiper(".wirefram-mobileimg-wrap .swiper-container", {
    slidesPerView: 4,
    centeredSlides: !0,
    spaceBetween: 60,
    loop: !0,
    scrollbar: {
        el: ".wirefram-mobileimg-wrap .swiper-scrollbar",
        hide: !0
    },
    breakpoints: {
        768: {
            slidesPerView: 3
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 50
        }
    }
});

function UIPLReveal() {
    jQuery(".uipl-section-reveal-check").each(function() {
        jQuery(this).visible(!0) && jQuery(this).addClass("reveal-me")
    })
}

function UIPLGraphAnalytics() {
    jQuery(".UIPLGraphAnalytics").each(function() {
        jQuery(this).visible(!0) && jQuery(this).animate({
            height: jQuery(this).data("graph-point") + "%"
        }, {
            duration: 1e3,
            easing: "linear"
        })
    })
}
$(window).width() < 768 && (swiper = new Swiper(".pristine-wrap-slider .swiper-container", {
    slidesPerView: 1,
    centeredSlides: !0,
    spaceBetween: 20,
    loop: !0,
    navigation: {
        nextEl: ".pristine-wrap-slider .swiper-button-next",
        prevEl: ".pristine-wrap-slider .swiper-button-prev"
    }
})), swiper = new Swiper(".web-design-slider .swiper-container", {
    slidesPerView: 1,
    grabCursor: !0,
    loop: !0,
    centeredSlides: !0,
    slidesPerView: "auto",
    spaceBetween: 90,
    navigation: {
        nextEl: ".web-design-slider .swiper-button-next",
        prevEl: ".web-design-slider .swiper-button-prev"
    }
}), swiper = new Swiper(".frem-slider-wrap .swiper-container", {
    loop: !0,
    grabCursor: !0,
    centeredSlides: !1,
    spaceBetween: 20,
    slidesPerView: 4,
    autoplay: {
        delay: 2500,
        disableOnInteraction: !1
    },
    navigation: {
        nextEl: ".frem-slider-wrap .swiper-button-next",
        prevEl: ".frem-slider-wrap .swiper-button-prev"
    },
    breakpoints: {
        2190: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        479: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
}), swiper = new Swiper(".frame-slider .swiper-container", {
    effect: "slide",
    loop: !0,
    grabCursor: !0,
    centeredSlides: !0,
    slidesPerView: 3,
    coverflowEffect: {
        rotate: -20,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: !1
    },
    breakpoints: {
        2560: {
            slidesPerView: 3,
            spaceBetween: 0
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    },
    navigation: {
        nextEl: ".frame-slider .swiper-button-next",
        prevEl: ".frame-slider .swiper-button-prev"
    },
    autoplay: {
        delay: 3e3,
        disableOnInteraction: !1
    },
    pagination: {
        el: ".frame-slider .swiper-pagination",
        type: "fraction"
    }
}), swiper = new Swiper(".app-testomonial-slider .swiper-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: !0,
    centeredSlides: !0,
    autoplay: {
        delay: 9e3,
        disableOnInteraction: !1
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: !0
    },
    breakpoints: {
        991: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
});

// Blog page Sticky side bar
var windowWidth = $(window).width();
if(windowWidth > 1199){
    $(".pinned").pin({containerSelector: ".container", minWidth: 1199});
}

// $(".pinned").pin({containerSelector: ".container", minWidth: 940});

// SCROLL TO TOP
jQuery(window).on("scroll", function(){
    if (jQuery(this).scrollTop()>100){
        jQuery(".scrollup").addClass("active");
   }else{
     jQuery(".scrollup").removeClass("active");
 }
});
jQuery(".scrollup").on("click", function(){
    jQuery("html, body").animate({scrollTop:0},600);
   return false;
});

// BLOG SINGLE RELATED POSTS SLIDER.
if (jQuery(".blogSingleRelatedPostsSlider").length) {
    new Swiper(".blogSingleRelatedPostsSlider .swiper-container", {
        autoplay: {
            delay: 6000,
        },
        loop: true,
        slidesPerView: 3,
        navigation: {
            nextEl: ".blogSingleRelatedPostsSliderNext",
            prevEl: ".blogSingleRelatedPostsSliderPrev",
        },
        breakpoints: {
            990: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 2,
            },
            479: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            }
        },
    });
}

// MATERIAL FORM.
$(window).load(function(){
    $(".materialForm").materialForm();
});
