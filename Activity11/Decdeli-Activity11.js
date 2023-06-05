$(document).ready(function () {

    $("#nav_list a").click(function (e) {

        e.preventDefault();
        $("main").empty();

        var fileName = $(this).attr("title");
        var jsonUrl = "json_files/" + fileName + ".json";

        $.getJSON(jsonUrl, function (data) {

            var speaker = data.speakers[0];

            var speakerTitle = $("<h1>").text(speaker.title);
            var speakerImage = $("<img>").attr("src", speaker.image);
            var speakerMonth = $("<h2>").text(speaker.month);
            var speakerText = $("<p>").text(speaker.text);

            $("main").append(speakerTitle, speakerImage, speakerMonth, speakerText);

        }).fail(function () {
            console.log("Failed to load JSON data");
        });
    });
});