   /*var i = 0;
   var images = []
   var time = 2500

   images[0] = '/Users/tripl/OneDrive/デスクトップ/HTML PRACTICE/HTML PRACTICE/site/ice&people/pexels-polina-tankilevitch-8217384.jpg';
   images[1] = '/Users/tripl/OneDrive/デスクトップ/HTML PRACTICE/HTML PRACTICE/site/ice&people/pexels-cottonbro-studio-6551710.jpg';
   
         function slideShow(){
             document.slide.src=images[i];

             if(i < images.length-1){
               i++
             }else{
               i = 0;
             }

             setTimeout("slideShow()", time);
         }

         window.onload = slideShow;
   var modal = document.getElementById("togimg1");
   var modal2 = document.getElementById("togimg2");
   var img1 = document.getElementById("modima1");
   var img2 = document.getElementById("modima2");
   var img3 = document.getElementById("modima3");
   var img4 = document.getElementById("modima4");
   var img5 = document.getElementById("modima5");
   var img6 = document.getElementById("modima6");
   var ModImg1 = document.getElementById("img01");
   var ModImg2 = document.getElementById("img02");*/
   






   $(document).ready(function(){
    $('.menu-btn').click(function(){
         $(".submenu1").toggleClass("another");
         $(".menu-content1 a").toggleClass("another");
         $(".menu-btn i").toggleClass("active");
     });
   });
 
   $(window).scroll(function(){
   $(".flavors").each(function(){
         var imgPos = $(this).offset().top;
         var scroll = $(window).scrollTop();
         var windowHeight = $(window).height();
         if (scroll > imgPos - windowHeight/3){
             $(this).addClass('fadein');
          $(this).removeClass('flavors');
         }
     });
 });

 document.addEventListener("DOMContentLoaded", function() {
  // 1. すべてのspan要素を取得
  const letters = document.querySelectorAll('.ranapp');
  
  // 2. ランダムに順番をシャッフルする関数
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
     
    }
  }
  
  // 3. ランダムにシャッフル
  const lettersArray = Array.from(letters);
  shuffleArray(lettersArray);
  
  // 4. シャッフルした順番でHTMLに表示する処理
  const container = document.getElementById('welcome-text');
  
  // HTMLが存在しない場合（nullのチェック）
  if (container) {
    container.innerHTML = '';  // 既存の内容を削除
    
    // 5. 一文字ずつ少しずつ表示する
    lettersArray.forEach(function(letter, index) {
      setTimeout(function() {
        container.appendChild(letter); // 一文字を追加
      }, 100 * index); // 100msごとに1文字を表示
    });
  } else {
    console.error("Element with id 'welcome-text' not found.");
  }
});
