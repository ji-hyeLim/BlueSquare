
// years
$(function() {
    $(".year a").removeAttr("href");
    $(".2021").hide();
    $(".2020").hide();
    $(".2021_title").hide();
    $(".2020_title").hide();

    // 2022
    $("#prev_arrow22").click(function() {
        $(".2021_title").show();
        $(".2022_title").hide();
        $(".2021").show();
        $(".2022").hide();
    });

    $("#next_arrow22").click(function() {
        $(".2020_title").show();
        $(".2022_title").hide();
        $(".2020").show();
        $(".2022").hide();
    });

    // 2021
    $("#prev_arrow21").click(function() {
        $(".2020_title").show();
        $(".2021_title").hide();
        $(".2020").show();
        $(".2021").hide();
    });

    $("#next_arrow21").click(function() {
        $(".2022_title").show();
        $(".2021_title").hide();
        $(".2022").show();
        $(".2021").hide();
    });

    // 2020
    $("#prev_arrow20").click(function() {
        $(".2022_title").show();
        $(".2020_title").hide();
        $(".2022").show();
        $(".2020").hide();
    });

    $("#next_arrow20").click(function() {
        $(".2021_title").show();
        $(".2020_title").hide();
        $(".2021").show();
        $(".2020").hide();
    });
});


// category
$(function() {
    $(document).ready(function(){
        $("input").click(function() {
            $("input[type=checkbox]:checked").each(function(){
                var category = $(this).val();

                if(category == "all") {
                    $("#all_list").find("li").fadeIn("slow");
                } else { 
                    $("#all_list div li").fadeOut("slow");
                    $("#all_list div li[class*="+category+"]").fadeIn("slow");   
                }
                $("#all_list").find("li").length;
                console.log($("li").length); 

            });

        }); 
    });
});


// search
$(function() {
    $(document).ready(function(){
        $("#search").on("keyup", function() {
          var value = $(this).val().toLowerCase();
    
          $("#all_list div li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
    });
});