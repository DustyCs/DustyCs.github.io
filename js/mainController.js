// import placeholder from "/images/placeholder.png";

export function create_activity() {
    var container = $("<div class='activity'></div>")

    var title_text = "test"
    var title_overview = "test"

    var title = $("<div class='activity-title'></div>").text(title_text);
    var overview = $("<div class='activity-overview'></div>").text(title_overview);

    container.append(title)
    container.append(overview)

    return container
}

function setContent(container, data, number){
    parseData(container, data, number)
}

export function setLatestUpdate(project) {
    $("#current_project").html(project);
}

export function getContentData(container, json, number){
    $.getJSON(json, function(data){ 
        setContent(container, data, number) 
    });
}

export function getBlogData(json){
    $.getJSON(json, function(data){
        var dataLength = Object.keys(data).length;
        // console.log(data[0]["title"].value,data[0]["description"].value,data[0]["image"].value);
        for (let i = 0; i < dataLength; i++) {
            // Object.keys(data[i]).forEach(function() {
            //     // console.log(key, data[i][key].value);
            //     console.log("1") 
            //         // console.log("1")
            //     renderBlogData(data[i]["title"].value, data[i]["description"].value, data[i]["image"].value);
                
            //  });
            renderBlogData(data[i]["title"].value,data[i]["description"].value,data[i]["image"].value,data[i]["id"].value)
            // console.log(data[i]["title"].value,data[i]["description"].value,data[i]["image"].value)
            //  console.log(Object.keys(data[i]["title"]),data[Object.keys(data[i]["title"].value)])
        }
    });
}

function renderBlogData(title, description, image, id){
    var blog_upload = $(`<div class='blog-upload' id="${id}"></div>`);
    var blog_title = title;
    var blog_overview = description.slice(0, 100) + "...";
    var blog_image = image

    var title = $("<div class='upload-title'></div>").text(blog_title);
    var overview = $("<div class='upload-overview'></div>").text(blog_overview);
    var smallImage = $(`<img class='upload-img' src=${setImageSource(blog_image)} />`)
    
    blog_upload.append(title);
    blog_upload.append(smallImage);
    blog_upload.append(overview);

    $(".recent-uploads").append(blog_upload);
}

function parseData(div, data, number=0){
    // console.log(number)
    try {
        Object.keys(data[number]).forEach(function(key) {
            var data_value = data[number][key].value;
            var data_type = data[number][key].type;
            var data_class = data[number][key].class;
            var data_parent_class = data[number][key].parent_class; 
            var data_id = data[number]["id"].value;
            var div_parent = data[number]["parent"].value;
            var placeholder_img = "/images/placeholder.png";
    
            // console.log(key, data[number][key].parent_class, data_value); // data[0][title].value 
            // console.log(data[number]["id"].value)
            if(data_id == number){
                renderSelectedPost(data_type, div_parent, div, data_parent_class, data_class, data_value, placeholder_img)
                // Cleaned
                // R
                // if (data_type == "txt") {
                //     div_parent ? 
                //     $(data_parent_class).append($(`<div class='${data_class}'>${data_value}</div>`)) :
                //     $(div).append($(`<div class='${data_class}'>${data_value}</div>`));
                // }
                // if (data_type == "img") {
                //     div_parent ? 
                //     $(data_parent_class).append($(`<img class='${data_class}' src=${data_value ? data_value : placeholder_img}>`)):
                //     $(div).append($(`<img class='${data_class}' src=${data_value ? data_value : placeholder_img}>`));
                // }
            }
          });
    } catch (error) {
        $(div).append($(`<div class='error'>${"NULL - NO DATA FOUND"}</div>`));
        console.log(error);
    }
   
}

function renderSelectedPost(dataType, hasParent, div, parentDiv, dataClass, dataValue, placeholderImage){
    if(dataType == "txt"){
        hasParent ? $(parentDiv).append($(`<div class='${dataClass}'>${dataValue}</div>`)) : 
        $(div).append($(`<div class='${dataClass}'>${dataValue}</div>`));
    }
    if(dataType == "img"){
        hasParent ? $(parentDiv).append($(`<img class='${dataClass}' src=${setImageSource(dataValue)}>`)) : 
        $(div).append($(`<img class='${dataClass}' src=${setImageSource(dataValue)}>`));
    }

    // Trying to simplify it more but makes no sense to do it...  
    // if (hasParent){
    //     dataType == "txt" ? 
    //     $(parentDiv).append($(`<div class='${dataClass}'>${dataValue}</div>`)) : 
    //     $(parentDiv).append($(`<img class='${dataClass}' src=${dataValue ? dataValue : placeholderImage}>`));
    // }

}

function setImageSource(src){
    if(!src){ return "/images/placeholder.png"; }    
    return src
}

export function renderMainContent(){
    getContentData(".main-content", "../data/main_content-config.json");
}