window.onload = function () {
    head();
    this.secondClock();
    this.loopScroll();
}

function head() {
    // 顶部滚动颜色变化效果
    // 获取元素
    // 顶部搜索框
    var header = document.getElementsByClassName("header")[0];
    // 获取轮播图高度
    var banner = document.getElementsByClassName('loop')[0];
    // 获取卷去的高度
    var height = banner.offsetHeight;

    window.onscroll = function () {
        // 先获取卷上去的高度
        var topHeight = document.documentElement.scrollTop;
        // if判断
        if (topHeight > height) {
            header.style.background = "rgba(201,21,35,0.7)";
        }
        else {
            var opacty = top / this.height * 0.7;
            header.style.background = "rgba(201,21,35,'+opacty+')";
        }
    }
}
//倒计时
function secondClock() {
    // 获取数字
    var str_num = document.getElementsByClassName('num');
    // 定义倒计时时间
    var times = 5 * 60 * 60;
    // 计时器
    var timer = setInterval(function () {
        times--;
        // 定义时分秒
        var hours = Math.floor(times / (60 * 60));
        var minutes = Math.floor(times / 60 % 60);
        var seconds = times % 60;
        str_num[0].innerHTML = hours > 10 ? Math.floor(hours / 10) : 0;
        str_num[1].innerHTML = hours % 10;
        str_num[2].innerHTML = minutes > 10 ? Math.floor(minutes / 10) : 0;
        str_num[3].innerHTML = minutes % 10;
        str_num[4].innerHTML = seconds > 10 ? Math.floor(seconds / 10) : 0;
        str_num[5].innerHTML = seconds % 10;

    }, 1000)
}

function loopScroll() {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}