$(".gnb li").hover(
    function(){
        $(this).find(".sub").stop().fadeIn();
    },
    function(){
        $(this).find(".sub").stop().fadeOut();
    }
);


$(".open").click(
    function(){
        $("#popup").show();
    }
);
$(".close").click(
    function(){
        $("#popup").hide();
    }
);
