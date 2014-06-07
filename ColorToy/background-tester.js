$(document).ready(function () {
    $("#get-url").draggable();

    $("#bg-url").on("change", function () {
        $("#url").html("<a href='" + this.value + "'>" + this.value + "</a>");
        $("body").css("background", "url('" + this.value + "')");
    });
});