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

export function getBlogData(div, json){
    // console.log("run")
    $.getJSON(json, function(data){
        var dataLength = Object.keys(data).length;
        // console.log(dataLength); 
        
        for (let i = 0; i < dataLength; i++) {
            Object.keys(data[i]).forEach(function() {
                // console.log(key, data[i][key].value); 
                renderBlogData(div, data[i]["title"].value, data[i]["description"].value, data[i]["image"].value);
             });
        }
    });
}

function renderBlogData(div, title, description, image){
    console.log(div, title, description, image);

    var blog_upload = $("<div class='blog-upload'></div>");

    var blog_title = title;
    var blog_overview = description.slice(0, 100) + "...";

    var title = $("<div class='upload-title'></div>").text(blog_title);
    var overview = $("<div class='upload-overview'></div>").text(blog_overview);

    blog_upload.append(title);
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
                if (data_type == "txt") {
                    // console.log("txt");
                    div_parent ? // console.log(data_parent_class):console.log("nope")
                    $(data_parent_class).append($(`<div class='${data_class}'>${data_value}</div>`)) :
                    $(div).append($(`<div class='${data_class}'>${data_value}</div>`));
                }
                else if (data_type == "img") {
                    // console.log("img");
                    $(data_parent_class).append($(`<img class='${data_class}' src=${data_value ? data_value : placeholder_img}>`));
                }
            }
          });
    } catch (error) {
        $(div).append($(`<div class='error'>${"NULL - NO DATA FOUND"}</div>`));
        console.log(error)
    }
   
}


export function renderMainContent(){
    getContentData(".main-content", "../data/main_content-config.json");
}