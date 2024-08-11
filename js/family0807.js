// $(function(){
//     $('#family button').on('click',function(){
//         $('#family ul').toggleClass('slide');
//     });
// });

//바닐라자바스크립트
$(function(){
    document.querySelector('#family button').addEventListener('click',function(){
        document.querySelector('#family ul').classList.toggle('slide');
    });
});
