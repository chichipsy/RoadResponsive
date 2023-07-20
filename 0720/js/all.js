var light = true;
var about_carousel_count = 1;
$(".dark").click(function () { 
    if(light){
        $(".circle").css("transform", "translateX(130%)");
        $(":root").css({
            "--60_color": "#c74138",
            "--30_color": "#37AEDD",
            "--b": "#fffbff",
            "--w": "#23262d",
        });
    }else{
        $(".circle").css("transform", "translateX(0%)");
        $(":root").css({
            "--60_color": "#37AEDD",
            "--30_color": "#c74138",
            "--b": "#23262d",
            "--w": "#fffbff",
        });
    }
    light = !light;
});

$("#about_top").click(function () { 
    if(about_carousel_count != 1){
        about_carousel_count-=1;
        $("#about_down").removeClass("active");
        $(".about_carousel_con li").css("transform", "translateY(-" + (about_carousel_count-1)*100 + "%)");
        $("#about .content .txt li").css("transform", "translate(" + (about_carousel_count-1)*100 + "%)");
        if(about_carousel_count == 1){
            $("#about_top").addClass("active");
        }
    }
});
 
$("#about_down").click(function () { 
    if(about_carousel_count != 3){
        $("#about_top").removeClass("active");
        about_carousel_count+=1;
        $(".about_carousel_con li").css("transform", "translateY(-" + (about_carousel_count-1)*100 + "%)");
        $("#about .content .txt li").css("transform", "translate(" + (about_carousel_count-1)*100 + "%)");
        if(about_carousel_count == 3){
            $("#about_down").addClass("active");
        }
    }
});
