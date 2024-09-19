
(function ($) {
    "use strict";
	var colorCode;
	$.getJSON("https://raw.githubusercontent.com/account-me/zed-files/main/colors.json", function(json) {
		console.log(json);
    		colorCode = json;
    		//access your JSON file through the variable "json"
	});
    

    /*[ Load page ]
    ===========================================================*/
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'html',
        loadingClass: 'animsition-loading-1',
        loadingInner: '<div class="loader05"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'html',
        transition: function(url){ window.location.href = url; }
    });
    
    /*[ Back to top ]
    ===========================================================*/
    var windowH = $(window).height()/2;

    $(window).on('scroll',function(){
        if ($(this).scrollTop() > windowH) {
            $("#myBtn").css('display','flex');
        } else {
            $("#myBtn").css('display','none');
        }
    });

    $('#myBtn').on("click", function(){
        $('html, body').animate({scrollTop: 0}, 300);
    });


    /*==================================================================
    [ Fixed Header ]*/
    var headerDesktop = $('.container-menu-desktop');
    var wrapMenu = $('.wrap-menu-desktop');

    if($('.top-bar').length > 0) {
        var posWrapHeader = $('.top-bar').height();
    }
    else {
        var posWrapHeader = 0;
    }
    

    if($(window).scrollTop() > posWrapHeader) {
        $(headerDesktop).addClass('fix-menu-desktop');
        $(wrapMenu).css('top',0); 
    }  
    else {
        $(headerDesktop).removeClass('fix-menu-desktop');
        $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
    }

    $(window).on('scroll',function(){
        if($(this).scrollTop() > posWrapHeader) {
            $(headerDesktop).addClass('fix-menu-desktop');
            $(wrapMenu).css('top',0); 
        }  
        else {
            $(headerDesktop).removeClass('fix-menu-desktop');
            $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
        } 
    });


    /*==================================================================
    [ Menu mobile ]*/
    $('.btn-show-menu-mobile').on('click', function(){
        $(this).toggleClass('is-active');
        $('.menu-mobile').slideToggle();
    });

    var arrowMainMenu = $('.arrow-main-menu-m');

    for(var i=0; i<arrowMainMenu.length; i++){
        $(arrowMainMenu[i]).on('click', function(){
            $(this).parent().find('.sub-menu-m').slideToggle();
            $(this).toggleClass('turn-arrow-main-menu-m');
        })
    }

    // ==== ON RESIZE

    $(window).resize(function(){

        if($(window).width() >= 992){
            if($('.menu-mobile').css('display') == 'block') {
                $('.menu-mobile').css('display','none');
                $('.btn-show-menu-mobile').toggleClass('is-active');
            }

            $('.sub-menu-m').each(function(){
                if($(this).css('display') == 'block') { console.log('hello');
                    $(this).css('display','none');
                    $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
                }
            });
                
        }

        // IMAGES HEIGHT
        var imgHeight = $(".block2-pic").outerWidth() + 43;
        $(".block2-pic").css("height", imgHeight);

    });


    /*==================================================================
    [ Show / hide modal search ]*/
    $('.js-show-modal-search').on('click', function(){
        $('.modal-search-header').addClass('show-modal-search');
        $(this).css('opacity','0');
    });

    $('.js-hide-modal-search').on('click', function(){
        $('.modal-search-header').removeClass('show-modal-search');
        $('.js-show-modal-search').css('opacity','1');
    });

    $('.container-search-header').on('click', function(e){
        e.stopPropagation();
    });


    /*==================================================================
    [ Isotope ]*/
    var $topeContainer = $('.isotope-grid');
    var $filter = $('.filter-tope-group');

    // filter items on button click
    $filter.each(function () {
        $filter.on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $topeContainer.isotope({filter: filterValue});
        });
        
    });

    // init Isotope
    $(window).on('load', function () {
        var $grid = $topeContainer.each(function () {
            $(this).isotope({
                itemSelector: '.isotope-item',
                layoutMode: 'fitRows',
                percentPosition: true,
                animationEngine : 'best-available',
                masonry: {
                    columnWidth: '.isotope-item'
                }
            });
        });
    });

    var isotopeButton = $('.filter-tope-group button');

    $(isotopeButton).each(function(){
        $(this).on('click', function(){
            for(var i=0; i<isotopeButton.length; i++) {
                $(isotopeButton[i]).removeClass('how-active1');
            }

            $(this).addClass('how-active1');
        });
    });

    /*==================================================================
    [ Filter / Search product ]*/
    $('.js-show-filter').on('click',function(){
        $(this).toggleClass('show-filter');
        $('.panel-filter').slideToggle(400);

        if($('.js-show-search').hasClass('show-search')) {
            $('.js-show-search').removeClass('show-search');
            $('.panel-search').slideUp(400);
        }    
    });

    $('.js-show-search').on('click',function(){
        $(this).toggleClass('show-search');
        $('.panel-search').slideToggle(400);

        if($('.js-show-filter').hasClass('show-filter')) {
            $('.js-show-filter').removeClass('show-filter');
            $('.panel-filter').slideUp(400);
        }    
    });




    /*==================================================================
    [ Cart ]*/
    $('.js-show-cart').on('click',function(){
        $('.js-panel-cart').addClass('show-header-cart');
    });

    $('.js-hide-cart').on('click',function(){
        $('.js-panel-cart').removeClass('show-header-cart');
    });

    /*==================================================================
    [ Cart ]*/
    $('.js-show-sidebar').on('click',function(){
        $('.js-sidebar').addClass('show-sidebar');
    });

    $('.js-hide-sidebar').on('click',function(){
        $('.js-sidebar').removeClass('show-sidebar');
    });

    /*==================================================================
    [ +/- num product ]*/
    $('.btn-num-product-down').on('click', function(){
        var numProduct = Number($(this).next().val());
         $(this).next().val(numProduct + 1);
    });

    $('.btn-num-product-up').on('click', function(){
        var numProduct = Number($(this).prev().val());
        if(numProduct > 1) $(this).prev().val(numProduct - 1);
    });

    /*==================================================================
    [ Rating ]*/
    $('.wrap-rating').each(function(){
        var item = $(this).find('.item-rating');
        var rated = -1;
        var input = $(this).find('input');
        $(input).val(0);

        $(item).on('mouseenter', function(){
            var index = item.index(this);
            var i = 0;
            for(i=0; i<=index; i++) {
                $(item[i]).removeClass('zmdi-star-outline');
                $(item[i]).addClass('zmdi-star');
            }

            for(var j=i; j<item.length; j++) {
                $(item[j]).addClass('zmdi-star-outline');
                $(item[j]).removeClass('zmdi-star');
            }
        });

        $(item).on('click', function(){
            var index = item.index(this);
            rated = index;
            $(input).val(index+1);
        });

        $(this).on('mouseleave', function(){
            var i = 0;
            for(i=0; i<=rated; i++) {
                $(item[i]).removeClass('zmdi-star-outline');
                $(item[i]).addClass('zmdi-star');
            }

            for(var j=i; j<item.length; j++) {
                $(item[j]).addClass('zmdi-star-outline');
                $(item[j]).removeClass('zmdi-star');
            }
        });
    });
    
    /*==================================================================
    [ Show modal1 ]*/
    $('.js-show-modal1').on('click',function(e){
        e.preventDefault();
        $('.js-modal1').addClass('show-modal1');
    });

    $('.js-hide-modal1').on('click',function(){
        $('.js-modal1').removeClass('show-modal1');
    });

    // Height Images

    var imgHeight = $(".block2-pic").outerWidth() + 43;
    $(".block2-pic").css("height", imgHeight);

    // ============= AJAX  ===================
    var limit = 12;
    var offset = 12;
    $("#load-more").click(function() {
    

        // let searchParams = new URLSearchParams(window.location.search);
        // console.log(window.location.search);
        // var cate = '';
        // if(searchParams.has('category')){
        //     cate = '?category=' + searchParams.get('category')
        // }else if (searchParams.has('q')){

        //     cate = '?q=' + searchParams.get('q')
        // }

        var cate = window.location.search;

        $("#load-more button").text("Loadding...");
        
        
        $.ajax({
            url: 'https://zed-store.vercel.app/json/api.php' + cate,
            type: 'GET',
            data: { limit: limit, offset:offset },
            success: function(response) {
            var products = response.products;
            // إضافة المزيد من المنتجات إلى العناصر الموجودة
            $.each(products, function(index, product) {
                var newProducts = '<div class="col-sm-6 col-md-4 col-lg-3 p-b-35 ' + product.category + '">';
                    newProducts     += '<div class="block2">';
		    if(product.isOffer == 1){
			    newProducts += '<div style="display:block;" class="ribbon ribbon-top-left"><span>خـصـم  20 %</span></div>';
		    }
                    newProducts         += '<div class="block2-pic hov-img0">';
                    newProducts             += '<a href="product-detail.php?id='+product.id+'" style="display:block; height:100%;"><img src="'+product.thump+'" alt="IMG-PRODUCT"></a>';
                    newProducts         += '</div>';
                    newProducts         += '<div class="block2-txt flex-w flex-t p-t-14">';
                    newProducts             += '<div class="block2-txt-child1 flex-col-l ">';
                    newProducts                 += '<a href="product-detail.php?id='+product.id+'" class="title-box stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">'+product.title+'</a>';
                    newProducts             += '</div>';
                    newProducts             += '<div class="row price-color-box">';
                    newProducts                 += '<div class="col-7" style="padding-left:5px;line-height: 3;">';
                    newProducts                     += '<span class="stext-105 price-box cl3">'+product.price+' <bdi>جنية</bdi></span>';
                    newProducts                 += '</div>';
                    newProducts             += '<div class="col-5 col-color-box" style="padding-right:5px;line-height: 1;">';
                    var myColors = product.color;
                    // عرض الألوان
                    for (var i = 0; i < myColors.length; i++) {
                        var cc = myColors[i]
                        newProducts += '<span style="background:' + colorCode[cc] + '" class="color-box"></span>';
                    }
                    newProducts             += '</div>';
                    newProducts         += '</div>';
                    newProducts     += '</div>';
                    newProducts   += '</div>';
                    newProducts += '</div>';

                    $('.all-pruducts').append(newProducts);
                    
                    
                    var imgHeight = $(".block2-pic").outerWidth() + 43;
                    $(".block2-pic").css("height", imgHeight);
                    
            });

            if(products.length < 12){
                $("#load-more").css('display','none');
            }else {
                $("#load-more").css('display','flex');
            }

            $("#load-more button").text("عرض المزيد");

            // زيادة الصفحة بمقدار 1
            offset = (offset + 12);

            }
        });

    });  

    // ===========================

    $(".click-to-whatsapp").click(function(){
        var zName = $(".zName").text();
        var zSizeVal = $(".zSize").val();
        var zSize = '';
        var zColorVal = $(".zColor").val();
        var zNum = $(".num-product").val();
        var zURL  = window.location.href;
        var zColor = '';
        if(zSizeVal != 0 && zSizeVal !== undefined){
            zSize = 'المقاس ' + zSizeVal;
        }
        if(zColorVal != 0 && zColorVal !== undefined){
            zColor = 'اللون ' + zColorVal;
        }
        if(zNum != 0 && zNum !== undefined){
            zNum = 'العدد ' + zNum;
        }

        var myURL = 'https://wa.me/201557996311?text=%D9%87%D9%84%20%D8%A7%D9%84%D9%85%D9%86%D8%AA%D8%AC%20%5B'+zName+'%5D%20%D9%85%D8%AA%D9%88%D9%81%D8%B1%20%D8%9F%0A'+zSize+'%0A'+zColor+'%0A'+zNum+'%0A' + zURL;

        window.open(myURL, '_blank');
    });

    $(".click-to-messanger").click(function(){
        var zName = $(".zName").text();
        var zSizeVal = $(".zSize").val();
        var zSize = '';
        var zColorVal = $(".zColor").val();
        var zURL  = window.location.href;
        var zColor = '';
        var zNum = $(".num-product").val();
        if(zSizeVal != 0 && zSizeVal !== undefined){
            console.log(typeof zSizeVal);
            zSize = 'المقاس ' + zSizeVal;
        }
        if(zColorVal != 0 && zColorVal !== undefined){
            console.log(typeof zColorVal);
            zColor = 'اللون ' + zColorVal;
        }
        if(zNum != 0 && zNum !== undefined){
            zNum = 'العدد ' + zNum;
        }

        var myURL = 'http://m.me/zed.store24?text=%D9%87%D9%84%20%D8%A7%D9%84%D9%85%D9%86%D8%AA%D8%AC%20%5B'+zName+'%5D%20%D9%85%D8%AA%D9%88%D9%81%D8%B1%20%D8%9F%0A'+zSize+'%0A'+zColor+'%0A'+zNum+'%0A' + zURL;

        window.open(myURL, '_blank');
    });



})(jQuery);
