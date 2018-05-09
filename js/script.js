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
    
    // Code below belongs to the HIDE challenge and it's now commented to avoid clashing effect with TOGGLE challenge

    // $("#first_button").click(function() {
    //     $("#first_button").hide("slow");
    // });

    $("#first_button").click(function() {
        $("#first_para").slideToggle("slow");
    });
    $("#second_button").click(function() {
        $("#second_para").slideToggle("slow");
    });
    $("#third_button").click(function() {
        $("#third_para").slideToggle("slow");
    });
    $("#fourth_button").click(function() {
        $("#fourth_para").slideToggle("slow");
    });
    $("#fifth_button").click(function() {
        $("#fifth_para").slideToggle("slow");
    });
    $("#sixth_button").click(function() {
        $("#sixth_para").slideToggle("slow");
    });
    
    $("#first_button").mouseenter(function(){
        $("#first_button").fadeTo("slow", 0.5);
    });
    $("#first_button").mouseleave(function(){
        $("first_button").fadeTo("slow", 1);
    });  
    
    $("#second_button").mouseenter(function(){
        $("#second_button").fadeTo("slow", 0.5);
    });
    $("#second_button").mouseleave(function(){
        $("#second_button").fadeTo("slow", 1);
    }); 
    
    $("#third_button").mouseenter(function(){
        $("#third_button").fadeTo("slow", 0.5);
    });
    $("#third_button").mouseleave(function(){
        $("#third_button").fadeTo("slow", 1);
    }); 
    
    $("#fourth_button").mouseenter(function(){
        $("#fourth_button").fadeTo("slow", 0.5);
    });
    $("#fourth_button").mouseleave(function(){
        $("#fourth_button").fadeTo("slow", 1);
    }); 
    
    $("#fifth_button").mouseenter(function(){
        $("#fifth_button").fadeTo("slow", 0.5);
    });
    $("#fifth_button").mouseleave(function(){
        $("#fifth_button").fadeTo("slow", 1);
    }); 
    
    $("sixth_button").mouseenter(function(){
        $("sixth_button").fadeTo("slow", 0.5);
    });
    $("sixth_button").mouseleave(function(){
        $("sixth_button").fadeTo("slow", 1);
    });     
});
