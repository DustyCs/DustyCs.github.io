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
        setActive(div);
        maxWidth(div);
    }
    else{
        removeActive(div);
        $(div).css({"width": "30%"});
    }

}

function maxWidth(div){
    $(div).css({"width": "90%"})
}

function setActive(div){
    $(div).addClass("active");
}

function removeActive(div){
    $(div).removeClass("active");
}

// TO DO
// Make active div 90% and others 10% - same 1 function? - Done
// When user click the other divs set it to 90% and others to 10% - same 1 function? - Scrapped

// Hide back button as it's unnecessary - Scrapped its necesasry

// Add html and css to the divs explaining whats within it
// Hide the redirect button and make it only appear when the tag is focused on
// When user is sent to the individual project sites load the appropriate JSON data within the site
// Add html and css design