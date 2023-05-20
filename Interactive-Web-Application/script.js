// projects -- accordion

$(document).ready(function () {

  $("#accordion").accordion({
    heightStyle: "content",
    collapsible: true
  });

});


// about us -- read more

$(document).ready(function () {

  var time = 300;
  $('.show-more').css('cursor', 'grab');

  if ($('.ty-compact-list').length > 3) {
    $('.ty-compact-list:gt(2)').hide(time);
    $('.show-more').show(time);
  }

  $('.show-more').on('click', function () {
    $('.ty-compact-list:gt(2)').toggle(time);
    $(this).text() === 'Read less ...' ? $(this).text('Read more ...') : $(this).text('Read less ...');
  });

});


// contact us -- submission alert

$(document).ready(function () {
  $('#dialog').hide();

  $('form').submit(function (event) {

    event.preventDefault();

    $("#dialog").dialog({
      open: function (event, ui) {
        setTimeout("$('#dialog').dialog('close')", 4000);
      }
    });
  });

});