
(function ($) {
    'use strict';


    /*-------------------------------------------
        01. jQuery MeanMenu
    --------------------------------------------- */

    $('.mobile-menu nav').meanmenu({
        meanMenuContainer: '.mobile-menu-area',
        meanScreenWidth: "991",
        meanRevealPosition: "right",
    });

    /*-------------------------------------------
        02. wow js active
    --------------------------------------------- */

    new WOW().init();


    /*-------------------------------------------
        03. Product  Masonry (width)
    --------------------------------------------- */

    $('.htc__product__container').imagesLoaded(function () {

        // filter items on button click
        $('.product__menu').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        // init Isotope
        var $grid = $('.product__list').isotope({
            itemSelector: '.single__pro',
            percentPosition: true,
            transitionDuration: '0.7s',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.single__pro',
            }
        });

    });

    $('.product__menu button').on('click', function (event) {
        $(this).siblings('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        event.preventDefault();
    });



    /*-------------------------------------------
        04. Sticky Header
    --------------------------------------------- */
    var win = $(window);
    var sticky_id = $("#sticky-header-with-topbar");
    win.on('scroll', function () {
        var scroll = win.scrollTop();
        if (scroll < 245) {
            sticky_id.removeClass("scroll-header");
        } else {
            sticky_id.addClass("scroll-header");
        }
    });

    /*--------------------------
        05. ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });


    /*------------------------------------    
        06. Search Bar
    --------------------------------------*/

    $('.search__open').on('click', function () {
        $('body').toggleClass('search__box__show__hide');
        return false;
    });

    $('.search__close__btn .search__close__btn_icon').on('click', function () {
        $('body').toggleClass('search__box__show__hide');
        return false;
    });


    /*------------------------------------    
        07. Shopping Cart Area
    --------------------------------------*/

    $('.cart__menu').on('click', function (e) {
        e.preventDefault();
        $('.shopping__cart').addClass('shopping__cart__on');
        $('.body__overlay').addClass('is-visible');

    });

    $('.offsetmenu__close__btn').on('click', function (e) {
        e.preventDefault();
        $('.shopping__cart').removeClass('shopping__cart__on');
        $('.body__overlay').removeClass('is-visible');
    });


    /*------------------------------------    
        08. Filter Area
    --------------------------------------*/

    $('.filter__menu').on('click', function (e) {
        e.preventDefault();
        $('.filter__wrap').addClass('filter__menu__on');
        $('.body__overlay').addClass('is-visible');

    });

    $('.filter__menu__close__btn').on('click', function (e) {
        e.preventDefault();
        $('.filter__wrap').removeClass('filter__menu__on');
        $('.body__overlay').removeClass('is-visible');
    });


    /*------------------------------------    
        09. Toogle Menu
    --------------------------------------*/

    $('.toggle__menu').on('click', function (e) {
        e.preventDefault();
        $('.offsetmenu').addClass('offsetmenu__on');
        $('.body__overlay').addClass('is-visible');

    });

    $('.offsetmenu__close__btn').on('click', function (e) {
        e.preventDefault();
        $('.offsetmenu').removeClass('offsetmenu__on');
        $('.body__overlay').removeClass('is-visible');
    });


    /*------------------------------------    
        10. User Menu
    --------------------------------------*/

    $('.user__menu').on('click', function (e) {
        e.preventDefault();
        $('.user__meta').addClass('user__meta__on');
        $('.body__overlay').addClass('is-visible');

    });

    $('.offsetmenu__close__btn').on('click', function (e) {
        e.preventDefault();
        $('.user__meta').removeClass('user__meta__on');
        $('.body__overlay').removeClass('is-visible');
    });



    /*------------------------------------    
        11. Menu 
    --------------------------------------*/

    $('.menu__click').on('click', function (e) {
        e.preventDefault();
        $('.off__canvars__wrap').addClass('off__canvars__wrap__on');
        $('.body__overlay').addClass('is-visible');
        $('body').addClass('off__canvars__open');
        $(this).hide();
    });

    $('.menu__close__btn').on('click', function () {
        $('.off__canvars__wrap').removeClass('off__canvars__wrap__on');
        $('.body__overlay').removeClass('is-visible');
        $('body').removeClass('off__canvars__open');
        $('.menu__click').show();
    });


    /*------------------------------------    
        12. Menu Dropdown
    --------------------------------------*/
    function offCanvasMenuDropdown() {

        $('.off__canvars__dropdown-menu').hide();

        $('.off__canvars__dropdown > a').on('click', function (e) {
            e.preventDefault();

            $(this).find('i.zmdi').toggleClass('zmdi-chevron-up');
            $(this).siblings('.off__canvars__dropdown-menu').slideToggle();
            return false;
        });
    }
    offCanvasMenuDropdown();


    /*------------------------------------    
        13. Overlay Close
    --------------------------------------*/

    $('.body__overlay').on('click', function () {
        $(this).removeClass('is-visible');
        $('.offsetmenu').removeClass('offsetmenu__on');
        $('.shopping__cart').removeClass('shopping__cart__on');
        $('.filter__wrap').removeClass('filter__menu__on');
        $('.user__meta').removeClass('user__meta__on');
        $('.off__canvars__wrap').removeClass('off__canvars__wrap__on');
        $('body').removeClass('off__canvars__open');
        $('.menu__click').show();
    });


    /*---------------------------------------------------
        14. Testimonial Image Slider As Nav
    ---------------------------------------------------*/

    $('.ht__testimonial__activation').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide: true,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '10px',
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '10px',
                }
            },
            {
                breakpoint: 320,
                settings: {
                    autoplay: true,
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    focusOnSelect: false,
                }
            }
        ]
    });


    /*-----------------------------------------------
        15. Brand Area
    -------------------------------------------------*/

    $('.brand__list').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: true,
        autoplayTimeout: 10000,
        items: 5,
        dots: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 2,
            },
            767: {
                items: 4,
            },
            991: {
                items: 5,
            }
        }
    });



    /*-------------------------------
        16. Price Slider Active
    --------------------------------*/

    $("#slider-range").slider({
        range: true,
        min: 10,
        max: 500,
        values: [110, 400],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));




    /*---------------------------------------------------
        17. Accordion
    ---------------------------------------------------*/

    function emeAccordion() {
        $('.accordion__title')
            .siblings('.accordion__title').removeClass('active')
            .first().addClass('active');
        $('.accordion__body')
            .siblings('.accordion__body').slideUp()
            .first().slideDown();
        $('.accordion').on('click', '.accordion__title', function () {
            $(this).addClass('active').siblings('.accordion__title').removeClass('active');
            $(this).next('.accordion__body').slideDown().siblings('.accordion__body').slideUp();
        });
    };
    emeAccordion();


    /*---------------------------------------------------
        18. Ship to another
    ---------------------------------------------------*/

    function shipToAnother() {
        var trigger = $('.ship-to-another-trigger'),
            container = $('.ship-to-another-content');
        trigger.on('click', function (e) {
            e.preventDefault();
            container.slideToggle();
        });
    };
    shipToAnother();



    /*---------------------------------------------------
        19. Payment credit card
    ---------------------------------------------------*/

    function paymentCreditCard() {
        var trigger = $('.paymentinfo-credit-trigger'),
            container = $('.paymentinfo-credit-content');
        trigger.on('click', function (e) {
            e.preventDefault();
            container.slideToggle();
        });
    };
    paymentCreditCard();


    /*-----------------------------------------------
        20 Slider Activations
    -------------------------------------------------*/

    if ($('.slider__activation__wrap').length) {
        $('.slider__activation__wrap').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed: 1000,
            autoplay: false,
            navText: ['<i class="icon-arrow-left icons"></i>', '<i class="icon-arrow-right icons"></i>'],
            autoplayTimeout: 10000,
            items: 1,
            dots: false,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 1,
                },
                767: {
                    items: 1,
                },
                991: {
                    items: 1,
                }
            }
        });
    }




})(jQuery);


// XÓA DẤY PHẨY KHI IN RA
function remove_commas(arr) {
    var str = arr.toString();
    return str.split(',').join('')
}

// FORMAT NUMBER VND
function formatVND(price) {
    return String(price).replace(/(.)(?=(\d{3})+$)/g, '$1.') + " VNĐ";
}

// XÓA KÍ TỰ KHÔNG PHẢI SỐ
function deleteNotNum(index) {
    return index.replace(/[^0-9 ]/g, "");
}

// ĐẾM NUM CART
function numCart() {
    var numCart = document.querySelector("#numCart");
    var cart = JSON.parse(localStorage.getItem("cart"));
    var quantity = 0;
    if (cart) {
        for (cat of cart) {
            quantity += cat.quantity;
        }
        numCart.innerHTML = quantity;
    }
}
numCart();

// THÊM VÀO GIỎ HÀNG
function addCart(id, ten, gia, hinh) {
    var cart = JSON.parse(localStorage.getItem("cart")); // Lưu vào localStorage
    if (cart == null) {
        cart = [];
        cart.push({ id: id, name: ten, price: gia, image: hinh, quantity: 1 });
    }
    else {
        let item = cart.find(item => item.id === id);
        if (item) item.quantity++;
        else cart.push({ id: id, name: ten, price: gia, image: hinh, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    numCart();
    deleteList();
    viewCart();
    cartLeft()
}

function deleteList() {
    document.querySelector("#list_cart").innerHTML = "";
}


// XEM CART
function viewCart() {
    var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) cart.forEach((sp, index) => {
        document.querySelector("#list_cart").innerHTML += `<div class="shp__single__product">
                            <div class="shp__pro__thumb">
                                <a href="product-details.html?id=${sp.id}">
                                    <img src="${sp.image}" alt="product images">
                                </a>
                            </div>
                            <div class="shp__pro__details">
                                <h2><a href="product-details.html?id=${sp.id}">${sp.name}</a></h2>
                                <span class="quantity">Số lượng: ${sp.quantity}</span>
                                <span class="shp__price" id="price_total">${formatVND(sp.price * sp.quantity)}</span>
                            </div>
                            <div class="remove__btn">
                                <a title="Remove this item" onclick="deteleCart(this,${index})" class="deletaCart"><i class="zmdi zmdi-close"></i></a>
                            </div>
                        </div>`;
    });
}

// viewCart();

function cartLeft() {
    var cart_left = document.getElementsByClassName('shp__price');
    var tongLeft = 0;
    for (cart_left of cart_left) {
        {
            tongLeft += parseInt(deleteNotNum(cart_left.innerHTML));
        }
    }
    document.getElementById('total__price').innerHTML = formatVND(tongLeft);
}
// cartLeft();


// XÓA CART ITEM
function deteleCart(element, index) {
    var tr = element.parentElement.parentElement;
    tr.remove();
    var cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(cart));
    numCart()
    deleteList()
    viewCart();
    cartLeft()
}
