$(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault(); // a에 링크된 이벤트를 차단
});

//gnb menu
$(function () {
    $('header .menuOpen').on('click', function () {
        $('.gnb').addClass('on');
    });
    $('.gnb .close, section').on('click', function () {
        $('.gnb').removeClass('on');
    });
});

/*
* header에 메뉴오픈 클래스를 클릭하면, .gnb의 on 이름의 class 를생성
* .close , section 부분을 클릭하면 on 클래스를 제거
* */

// fix header

var scrollTop = 0;
scrollTop = $(document).scrollTop();

fixHeader();

//윈도우창 조절시 이벤트
$(window).on('scroll resize', function () {
    scrollTop = $(document).scrollTop();
    fixHeader();
});

//고정헤더 함수
function fixHeader() {
    if(scrollTop > 150) {
        $('header').addClass('on');
    }
    else {
        $('header').removeClass('on');
    }
}

//스크롤 애니메이션
$(function () {
    $('.animate').scrolla({
        mobile: false,
        once: false
    });
});

//상단으로 부드럽게 이동하기
$(function () {
    $('.goTop').on('click',function () {
        $('html, body').animate({scrollTop:0}, 800); //800=0.8s
    });
});

//.top-visual image slide
$(function () {
    $(".visual .slide").slick({ // 클래스 이름이 일치해야 함
        arrows: true, // 화살표 보이게
        dots: false, // indicate 해제
        fade: true, // 서서히 나타나게(페이드 인 효과)
        autoplay: true, // 자동재생 효과
        autoplaySpeed: 4000, // 4s
        pauseOnHover: false,
        pauseOnFocus: false
    });
});