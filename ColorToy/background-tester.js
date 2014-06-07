$(document).ready(function () {
    $("#get-url").draggable();

    $("#get-url-form").on("submit", function (e) {
        var url = $("#bg-url").val();
        e.preventDefault();
        $("#url").html("<a href='" + url + "'>" + url + "</a>");
        $("body").css("background", "url('" + url + "')");
    });

    $("#bg-url-button").on("click", function (e) {
        $("#get-url-form").submit();
    });
});