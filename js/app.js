$(function(){

  var appendthis =  ("<div class='modal-overlay js-modal-close'></div>");

  $('a[data-modal-id]').click(function(e) {
    e.preventDefault();
    $("landing-page-btn").fadeOut(500, function() {
      $("landing-page-btn").remove();
    });
    $("body").append(appendthis);
    $(".modal-overlay").fadeTo(500, 0.7);
    //$(".js-modalbox").fadeIn(500);
    var modalBox = $(this).attr('data-modal-id');
    $('#'+modalBox).fadeIn($(this).data());
  });


  $(".js-modal-close, .modal-overlay").click(function(e) {
    e.preventDefault();
    $(".modal-box, .modal-overlay").fadeOut(500, function() {
      $(".modal-overlay").remove();
    });

  });

  $(window).resize(function() {
    $(".modal-box").css({
      top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
      left: ($(window).width() - $(".modal-box").outerWidth()) / 2
    });
  });

  $(window).resize();
});
