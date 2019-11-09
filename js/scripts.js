document.getElementById("image1").addEventListener("click",function() {
    document.querySelector("#image1").style.display="none";
    document.querySelector("#design").style.display="block";
});
document.querySelector("#design").addEventListener("click",function() {
    document.querySelector("#design").style.display="none";
    document.querySelector("#image1").style.display="block";
});
document.getElementById("image2").addEventListener("click", function() {
    document.querySelector("#image2").style.display = "none";
    document.querySelector("#development").style.display = "block";
});
document.querySelector("#development").addEventListener("click", function() {
    document.querySelector("#development").style.display = "none";
    document.querySelector("#image2").style.display = "block";
});
document.getElementById("image3").addEventListener("click", function() {
    document.querySelector("#image3").style.display = "none";
    document.querySelector("#product").style.display = "block";
});
document.querySelector("#product").addEventListener("click", function() {
    document.querySelector("#product").style.display = "none";
    document.querySelector("#image3").style.display = "block";
});


document.querySelector(".work1").addEventListener("mouseover",function(){
    document.getElementById("image-1").style.display="block"
})

document.querySelector(".work1").addEventListener("mouseout",function(){
    document.getElementById("image-1").style.display="none"
})

document.querySelector(".work2").addEventListener("mouseover",function(){
    document.getElementById("image-2").style.display="block"
})

document.querySelector(".work2").addEventListener("mouseout",function(){
    document.getElementById("image-2").style.display="none"
})

document.querySelector(".work3").addEventListener("mouseover",function(){
    document.getElementById("image-3").style.display="block"
})

document.querySelector(".work3").addEventListener("mouseout",function(){
    document.getElementById("image-3").style.display="none"
})

document.querySelector(".work4").addEventListener("mouseover",function(){
    document.getElementById("image-4").style.display="block"
})

document.querySelector(".work4").addEventListener("mouseout",function(){
    document.getElementById("image-4").style.display="none"
})

document.querySelector(".work5").addEventListener("mouseover",function(){
    document.getElementById("image-5").style.display="block"
})

document.querySelector(".work5").addEventListener("mouseout",function(){
    document.getElementById("image-5").style.display="none"
})

document.querySelector(".work6").addEventListener("mouseover",function(){
    document.getElementById("image-6").style.display="block"
})

document.querySelector(".work6").addEventListener("mouseout",function(){
    document.getElementById("image-6").style.display="none"
})
document.querySelector(".work7").addEventListener("mouseover",function(){
    document.getElementById("image-7").style.display="block"
})

document.querySelector(".work7").addEventListener("mouseout",function(){
    document.getElementById("image-7").style.display="none"
})

document.querySelector(".work8").addEventListener("mouseover",function(){
    document.getElementById("image-8").style.display="block"
})

document.querySelector(".work8").addEventListener("mouseout",function(){
    document.getElementById("image-8").style.display="none"
})



// (document).ready(function() {
//     // **Portfolio1
//     $(".work1").hover(function() {
//      $("#image-1").show();
//     });
//     $(".portfolio1").mouseleave(function() {
//      $(".image1").hide(1000);
//     });
// });