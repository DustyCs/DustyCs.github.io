export function showTag(blog, project, fun){
    var tags_array = [blog, project, fun];
    $(tags_array).each(function (element) {
        console.log(tags_array[element])
        $(tags_array[element]).show();
        $(tags_array[element]).css({"width": "30%", "justify-content": "center"})
    });
    console.log("pressed")
}

export function activeTag(div){
    div = "#" + div
    if(!$(div).hasClass('active')){
        $("div.project").removeClass("active").css({"width": "30%"});
        $("div.project").find(".max-description").hide();

        $(div).addClass("active").css({"width": "90%"});
        $(div).find(".max-description").show();
        // console.log($("div.project"));
        // setActive(div);
        // maxWidth(div);
    }
    //R
    // else{
    //     removeActive(div);
    //     $(div).css({"width": "30%"});
    // }

    showDescription(div);
}

// R
// function maxWidth(div){
//     $(div).css({"width": "90%"})
// }

// function setActive(div){
//     $(div).addClass("active");
// }

// R
// function removeActive(div){
//     $(div).removeClass("active");
// }

// function showDescription(div){
//     // $("#blog").find(".max-description").show();
//     $(div).find(".max-description").show();

// }
