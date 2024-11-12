export function activeTag(this2, blog, project, fun){
    if (this2 == "blog"){
        hideTags(project, fun);
        maxTag(blog);
    }
    else if (this2 == "project"){
        hideTags(blog, fun);
        maxTag(project);
    }
    else{
        hideTags(blog, project);
        maxTag(fun);
    }


}

function hideTags(div1, div2){
    $(div1).hide();
    $(div2).hide();
}

export function showTag(blog, project, fun){
    var tags_array = [blog, project, fun];
    $(tags_array).each(function (element) {
        console.log(tags_array[element])
        $(tags_array[element]).show();
        $(tags_array[element]).css({"width": "30%", "justify-content": "center"})
    });
    console.log("pressed")
}

function maxTag(div){
    if (div == "#blog"){
        $(div).css({"width": "90%", "justify-content": "flex-start"})
    }

    if (div == "#project"){
        $(div).css({"width": "90%"})
    }

    if (div == "#fun"){
        $(div).css({"width": "90%", "justify-content": "flex-end"})
    } 
}