var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
     scrollbar: {
      el: '.swiper-scrollbar',
    },
     navigation: {
      nextEl: '.swiper-button-next',
 },
on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    }});

var music = document.getElementById("music");
var img1 = document.querySelector(".music_bg");
var img2 = document.querySelector(".music_tu");
var audio = document.getElementById("audio");
var flag = 1;
music.onclick = function(){
   
    if(flag==1){
        img1.style.display="none";
        img2.style.animation="none";
        audio.pause();
        flag=0;
    }else{
        img1.style.display="block";
        img2.style.animation="move 1s infinite";
        audio.play();
        flag=1;
    }
}