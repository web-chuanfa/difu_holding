/**
 * Created by chenliyan on 2015/12/30.
 */
//页面加载loading-start
var intValue = 20;
var intTimer;
var objPro = document.getElementById("loading");
var objTip = document.getElementById("percent");
function loadingNum(){
    if(intValue >= objPro.max){
        //页面加载状态
        if(document.readyState == 'complete'){
            objTip.innerHTML = intValue;
            objPro.value = intValue;
            clearInterval(intTimer);
            setTimeout(function () {
                $(".loadPage").hide('slow');
                $(".swiper-container").show("slow");
                var mySwiper = new Swiper ('.swiper-container', {
                    pagination: '.swiper-pagination',
                    paginationType: 'fraction',
                    lazyLoading : true,
                    // 设置为true允许将延迟加载应用到最接近的slide的图片（前一个和后一个slide）。
                    lazyLoadingInPrevNext : true,
                    // 设置在延迟加载图片时提前多少个slide。个数不可少于slidesPerView的数量。
// 默认为1，提前1个slide加载图片，例如切换到第三个slide时加载第四个slide里面的图片。
                    lazyLoadingInPrevNextAmount : 2,
                    direction : 'vertical',
                    speed:600,
                    // 设置为true时，能使用鼠标滚轮控制slide滑动。
                    mousewheelControl : true,
                    onInit: function(swiper){
                        swiperAnimateCache(swiper);
                        swiperAnimate(swiper);
                    },
                    onSlideChangeEnd: function(swiper){
                        swiperAnimate(swiper);
                    },
                    onReachEnd:function(swiper){
                        //最后页隐藏滑动提示块
                        $("#array").hide();
                    }
                })
            }, 500);
        }
    }else{
        objTip.innerHTML = intValue;
        objPro.value = intValue;
        intValue ++;
    }
}
intTimer = setInterval(loadingNum,20);

$(function(){
    //控制音乐
    $("#music_icon").click(function(){
        var icon1 = $(".icon1");
        var icon2 = $(".icon2");
        if(icon1.hasClass("cur")){
            $("#page_music")[0].pause();
            icon1.removeClass("cur").hide();
            icon2.show()
        }else{
            $("#page_music")[0].play();
            icon1.addClass("cur").show();
            icon2.hide()
        }
    });

});
