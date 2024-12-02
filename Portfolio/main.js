$(".fa-bars").click(function(){
    $(this).toggleClass("fa-times");
    $(".menu").toggle();
});

$(document).ready(function () {
    // Scroll hadisəsini dinləyən funksiya
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 50) { // 50px-dən çox scroll edilibsə
        $("#navbar").addClass("scrolled"); // scrolled sinfini əlavə et
      } else {
        $("#navbar").removeClass("scrolled"); // scrolled sinfini sil
      }
    });
  });
  