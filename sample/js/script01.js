document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('body');
    let circle = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    let size = Math.random() * 100;
    circle.style.width = 20 + size + "px";
    circle.style.height = 20 + size + "px";
    body.appendChild(circle);
    setTimeout(function() {
      circle.remove();
    }, 1800);
  });
  
  $(function(){

    $("#button01").on("click",function(){
     $(".back-red").hide();
    })

    $("#button02").on("click",function(){
     $(".back-blue").hide();
    })

    $("#button03").on("click",function(){
     $("#box03,#box07,#box08").hide();
    })

    $("#button04").on("click",function(){
     $(".box").show();
    })

})