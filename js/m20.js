"use strict";

let slideIndex = 1;
showSlides(slideIndex);

// Предыдущее/следущее изображение
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  // let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  // captionText.innerHTML = dots[slideIndex - 1].name;
}

// +1 в корзину

// $(function () {
//   $("#increment").on("click", function () {
//     let current = $("#total").text();
//     let new_val = parseInt(current) + 1;
//     $("#total").text(new_val);
//   });
// });



//смена картинки по цвету
//M2
$(".m2red").click(function (e) {
  e.preventDefault();
  $(".mySlides").attr("class", "mySlides").addClass("m2-red");
  $(".column").attr("class", "column").addClass("m2-red");
});

$(".m2pink").click(function (e) {
  e.preventDefault();
  $(".mySlides").attr("class", "mySlides").addClass("m2-pink");
  $(".column").attr("class", "column").addClass("m2-pink");
});

$(".m2purple").click(function (e) {
  e.preventDefault();
  $(".mySlides").attr("class", "mySlides").addClass("m2-purple");
  $(".column").attr("class", "column").addClass("m2-purple");
});

$(".m2white").click(function (e) {
  e.preventDefault();
  $(".mySlides").attr("class", "mySlides").addClass("m2-white");
  $(".column").attr("class", "column").addClass("m2-white");
});

$(".m2darkblue").click(function (e) {
  e.preventDefault();
  $(".mySlides").attr("class", "mySlides").addClass("m2-darkBlue");
  $(".column").attr("class", "column").addClass("m2-darkBlue");
});

$(".m2green").click(function (e) {
  e.preventDefault();
  $(".mySlides").attr("class", "mySlides").addClass("m2-green");
  $(".column").attr("class", "column").addClass("m2-green");
});

$(".m2black").click(function (e) {
  e.preventDefault();
  $(".mySlides").attr("class", "mySlides").addClass("m2-black");
  $(".column").attr("class", "column").addClass("m2-black");
});

//смена картинки по цвету
//M20

$(".m20pink").click(function (e) {
  e.preventDefault();
  $(".mySlides").attr("class", "mySlides").addClass("m20-pink");
  $(".column").attr("class", "column").addClass("m20-pink");
});

$(".m20black").click(function (e) {
  e.preventDefault();
  $(".mySlides").attr("class", "mySlides").addClass("m20-black");
  $(".column").attr("class", "column").addClass("m20-black");
});

$(".m20cyan").click(function (e) {
  e.preventDefault();
  $(".mySlides").attr("class", "mySlides").addClass("m20-cyan");
  $(".column").attr("class", "column").addClass("m20-cyan");
});

$(".m20whitegold").click(function (e) {
  e.preventDefault();
  $(".mySlides").attr("class", "mySlides").addClass("m20-whiteGold");
  $(".column").attr("class", "column").addClass("m20-whiteGold");
});

$(".m20whitesilver").click(function (e) {
  e.preventDefault();
  $(".mySlides").attr("class", "mySlides").addClass("m20-whiteSilver");
  $(".column").attr("class", "column").addClass("m20-whiteSilver");
});