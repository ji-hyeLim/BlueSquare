$(function() {
    $('.seat-img-tab ul > li').click(function(e) {
        e.preventDefault();
        let idx = $(this).index();      
        console.log(idx);    
        $('.F_wrap > div').removeClass('on');
        $('.F_wrap > div').eq(idx).addClass('on');
    });

    //이미지1을 클릭하면 1층이 보이도록
    //id로 연결?
    //인덱스 번호로 연결?
    //흑백은 어떻게 처리할겨 ㅜ 
});