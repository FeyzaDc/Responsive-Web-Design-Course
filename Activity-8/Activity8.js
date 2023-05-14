var languages = [
    "ActionScript",
    "AppleScript",
    "ASP",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python"
];

$(document).ready(function () {
    $("#birthday").click(function () {
        $(this).datepicker();
    });

    $("#languages").autocomplete({
        source: languages
    });

});
  