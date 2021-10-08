$(function(){

 let txt1 = "にゃもにゃも";
 let txt2 = "は？";
 let num1 = 100000000000000000;
 let num2 = 10000000000000;

   $("#button01").on("click",function(){
     $("#content").text("にゃもにゃも");
   })

   $("#button02").on("click",function(){
     $("#content").text(txt1);
   })

   $("#buton03").on("click",function(){
     $("#content").text(txt1 + txt2);
   })

   $("#button04").on("click",function(){
     $("#content").text(num1 + num2);
   })

   $("#button05").on("click",function(){
     $("#content").text(num1+ "たす" + num2 + "は" + (num1 + num2) + "です");
   })

})