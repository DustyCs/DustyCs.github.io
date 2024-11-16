
// Scrapped
// export function activeTag(this2, blog, project, fun){
//     if (this2 == "blog"){
//         hideTags(project, fun);
//         maxTag(blog);
//     }
//     else if (this2 == "project"){
//         hideTags(blog, fun);
//         maxTag(project);
//     }
//     else{
//         hideTags(blog, project);
//         maxTag(fun);
//     }
// }

// Scrapped design isn't good for me

// function hideTags(div1, div2){
//     var array = [div]
//     // $(...div).each(function(element){
//     //     $(div).hide();
//     // });
//     // array.forEach(element => {
//     //     $(element).hide();
//     // });
//     $(div1).hide();
//     $(div2).hide();
//     // this does not work but the effect is amazing 
//     // redesign later
// }

export function showTag(blog, project, fun){
    var tags_array = [blog, project, fun];
    $(tags_array).each(function (element) {
        console.log(tags_array[element])
        $(tags_array[element]).show();
        $(tags_array[element]).css({"width": "30%", "justify-content": "center"})
    });
    console.log("pressed")
}


function minTag(div){
    $(div).css({"width": "10%"})
}

function maxTag(div){
    $(div).css({"width": "90%"})
}

export function setActive(div){
    $(div).addClass("active");
}

export function removeActive(div){
    $(div).removeClass("active");
}

// TO DO
// Make active div 90% and others 10% - same 1 function?
// When user click the other divs set it to 90% and others to 10% - same 1 function?
// Add html and css to the divs explaining whats within it
// Hide back button as it's unnecessary

// When user is sent to the individual project sites 
// Load the appropriate JSON data within the site
// Add html and css design