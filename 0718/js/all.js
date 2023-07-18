var light = true;

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