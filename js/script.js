$(document).ready(function() {

    $("p").click(function() {
        $("p").addClass("change-to-red");
    });
    $("h2").hover(function() {
        $("h2").addClass("lightblue-effect");
    });
    // $("#hr_html").hover(function() {
    // 	$("#hr_html").addClass("hr_html_hover");
    // });
    $("#hr_html").hover(function() {
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_html").addClass("h2_font_size");

    });

    $("#hr_mysql").hover(function() {
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_mysql").addClass("h2_font_size");
    });

    $("#hr_python").hover(function() {
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_python").addClass("h2_font_size");
    });

    $("#hr_jquery").hover(function() {
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_jquery").addClass("h2_font_size");
    });

    $("#hr_django").hover(function() {
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_django").addClass("h2_font_size");
    });

    $("#hr_css").hover(function() {
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_css").addClass("h2_font_size");
    });
    // $(".bottom_button").mouseenter(function() {
    // 	$("body").addClass(".mouseenter-background");
    // });
    // $(".bottom_button").mouseleave(function() {
    // 	$("body").addClass(".mouseleave-background");
    // });
    $(".bottom_button").mouseenter(function() {
        $("body").css("background-color", "black");
    });
    $(".bottom_button").mouseleave(function() {
        $("body").css("background-color", "#eee");
    });

    $("#first_button").click(function() {
        $("#first_button").hide("slow");
    });

    $("#second_button").click(function() {
        $("#second_para").toggle("slow");
    });
    $("#third_button").click(function() {
        $("#third_para").toggle("slow");
    });
    $("#fourth_button").click(function() {
        $("#fourth_para").toggle("slow");
    });
    $("#fifth_button").click(function() {
        $("#fifth_para").toggle("slow");
    });
    $("#sixth_button").click(function() {
        $("#sixth_para").toggle("slow");
    });    
});
