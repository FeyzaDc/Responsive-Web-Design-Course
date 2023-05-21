$(document).ready(function () {

  // navbar -- Scroll up bar Plugin
  // https://plugins.jquery.com/scroll-up-bar/

  $('#topbar').scrollupbar();


  // Home -- Countdown Plugin, FadeThis Plugin
  // https://plugins.jquery.com/countdown/
  // https://plugins.jquery.com/fadethis/

  $(window).fadeThis();

  $('#countdown').countdown('2024/01/13', function (event) {
    $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));
  });


  // Projects -- Accordion Widget
  // https://jqueryui.com/accordion/

  $("#accordion").accordion({
    heightStyle: "content",
    collapsible: true
  });


  // About Us -- Show More Plugin
  // https://plugins.jquery.com/show-more/

  $('#about-content').showMore({
    minheight: 350,
    buttontxtmore: 'Read more...',
    buttontxtless: 'Read less..',
    buttoncss: 'show-more',
    animationspeed: 500
  });

  $('.show-more').css('cursor', 'grab');


  // Contact -- Dialog Widget
  // https://jqueryui.com/dialog/

  $('#dialog').hide();

  $('form').submit(function (event) {

    event.preventDefault();
    var name = $("#name").val();
    var surname = $("#surname").val();

    $("#dialog").dialog().text("✔️ " + name + " " + surname + " your message submitted successfully");

    setTimeout(function () {
      window.location.reload();
    }, 1500);

  });

});