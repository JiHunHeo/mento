/* 저작권 메세지 표시하기 */
/* function ready() {
    if (!confirm('본 사이트는 상업적 목적이 아닌 강의 설명 용도로 제작되었습니다. 홈페이지 일부 내용과 기타 이미지 등은 출처가 따로 있음을 밝힙니다.')) {
        window.close();
    } else {
        alert('웹 / 프론트앤드 강사 허지훈의 웹 페이지를 보러와주셔서 감사합니다! 바로 시작하겠습니다!');
    }
} 
document.addEventListener('DOMContentLoaded', ready); */
/* 전체 풀페이지 */
const layOut = new Swiper('.cont_list', {
    direction: 'vertical',
    pagination: {
        el: '.cont_pager',
        clickable: true,
    },
    mousewheel: {},
});
/* 마우스 글자 깜빡이는 효과 */
/* $('.txt_point').mouseover(function () {
    let point_bold = $('.txt_point > span > strong').css('fontWeight');
    if (point_bold === '700') {
        $('.txt_point > span > strong').css({
            fontWeight: 900,
        });
        return false;
    } else {
        $('.txt_point > span > strong').css({
            fontWeight: 700,
        });
        return false;
    }
}); */
/* 스킬 그래프 */
$('.m3 > .m3_skill').mousemove(function () {
    $('.html').animate({ width: '96%' }, { duration: 100000 });
    $('.javascript').animate({ width: '96%' }, { duration: 100000 });
    $('.photoshop').animate({ width: '96%' }, { duration: 100000 });
    $('.figma').animate({ width: '96%' }, { duration: 100000 });
    $('.drive').animate({ width: '96%' }, { duration: 100000 });
});
/* 제작 스토리 */
/* 몬드리안 */
$('.story_btn_mondrian').click(function () {
    let display_mond = $('.mond').css('display');
    if (display_mond === 'none') {
        $('.mond').slideDown();
        $('.story_btn_mondrian').siblings('.site_view_mondrian').css({
            opacity: 0,
        });
    } else {
        $('.mond').slideUp();
        $('.story_btn_mondrian').siblings('.site_view_mondrian').css({
            opacity: 1,
        });
    }
});
/* 메타즈 */
$('.story_btn_metaz').click(function () {
    let display_meta = $('.meta').css('display');
    if (display_meta === 'none') {
        $('.meta').slideDown();
        $('.story_btn_metaz').siblings('.site_view_metaz').css({
            opacity: 0,
        });
    } else {
        $('.meta').slideUp();
        $('.story_btn_metaz').siblings('.site_view_metaz').css({
            opacity: 1,
        });
    }
});
/* 루체예술단 */
$('.story_btn_luceart').click(function () {
    let display_luce = $('.luce').css('display');
    if (display_luce === 'none') {
        $('.luce').slideDown();
        $('.story_btn_luceart').siblings('.site_view_luce').css({
            opacity: 0,
        });
    } else {
        $('.luce').slideUp();
        $('.story_btn_luceart').siblings('.site_view_luce').css({
            opacity: 1,
        });
    }
});
