$(function(){
    $('#open-btn').on('click',function(){
        $('#popup-box').addClass('show');
    });
    $('#popup-box > span').on('click',function(){
        $('#popup-box').removeClass('show');
    });
});