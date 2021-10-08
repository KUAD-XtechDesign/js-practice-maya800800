$(function(){
 let txt1 = "おはようございます！";
 let txt2 = "お元気ですか？";
 let num1 = 20;
 let num2 = 32;

   $("#botton01").on("click",function(){
     $("#content").text("こんにちは！");
   })

   $("#botton02").on("click",function(){
     $("#content").text("txt1");
   })

   $("#botton03").on("click",function(){
     $("#content").text(txt1 + txt2);
   })

   $("#botton04").on("click",function(){
     $("#content").text(num1 + num2);
   })

   $("#botton05").on("click",function(){
     $("#content").text(num1+ "たす" + num2 + "は" + (num1 + num2) + "です");
   })

})