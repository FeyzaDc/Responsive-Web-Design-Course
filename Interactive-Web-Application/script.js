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

  $('#read-info').showMore({
    minheight: 55,
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

  ///////////////////////////////////////
  // Request to an external file
  $.ajax({
    url: 'header.txt',
    success: function (data) {
      $('.home-header h1').text(data);
    },
    error: function () {
      $('.home-header h1').text('Error retrieving external data.');
    }
  });

  // AJAX request to another website
  var websiteRequest = new XMLHttpRequest();
  websiteRequest.onreadystatechange = function () {
    if (websiteRequest.readyState === 4 && websiteRequest.status === 200) {
      var data = websiteRequest.responseText;
      document.getElementById('about-content').innerHTML = data;
    }
  };
  websiteRequest.open('GET', 'https://feyzadc.github.io/Responsive-Web-Design-Course/ajax-web-content/', true);
  websiteRequest.send();

});


// Phone Formatter
$(document).ready(function () {
  $(window).load(function () {
    var phones = [{
      "mask": "### ### ## ##"
    }];
    $('#phone').inputmask({
      mask: phones,
      greedy: false,
      definitions: {
        '#': {
          validator: "[0-9]",
          cardinality: 1
        }
      }
    });
  });
});