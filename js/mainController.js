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

export function setIndexContent(data) {

}

function setMainContent(data){
    var title = data[0].title.value;
    var description = data[0].description.value;
    var image = data[0].image.value;
    var links = data[0].links.value;

    $("#project-img").text(image);
    $("#project-title").text(title);
    $("#project-description").text(description);
    $("#project-links").text(links);

    parseData(".main-content", data)


    // R
    // Object.keys(data[0]).forEach(function(key) {
    //     var data_value = data[0][key].value;
    //     var data_type = data[0][key].type;
    //     var data_class = data[0][key].class;

    //     console.log(key, data[0][key].value, data_value); 

    //     if (data_type == "txt") {
    //         console.log("txt");
    //         $(".main-content").append($(`<div class='${"test"}'>${data_value}</div>`));
    //     }
    //     else if (data_type == "img") {
    //         console.log("img");
    //         $(".main-content").append($(`<img class='${data_class}' src=${data_value ? data_value : "/images/placeholder.png"}>`));
    //     }
    //     else{
    //         console.log("Error");
    //     }
      
    //   });
    
}

function setContent(data){
    parseData(".project-main", data)
}

export function setLatestUpdate(project) {
    $("#current_project").html(project);
}

function getMainData(json){
    $.getJSON(json, function( data ){ 
        setMainContent(data) 
    });
}

function getContentData(json){
    $.getJSON(json, function( data ){ 
        setContent(data) 
    });
}

function parseData(div, data){
    Object.keys(data[0]).forEach(function(key) {
        var data_value = data[0][key].value;
        var data_type = data[0][key].type;
        var data_class = data[0][key].class;

        console.log(key, data[0][key].value, data_value); 

        if (data_type == "txt") {
            console.log("txt");
            $(div).append($(`<div class='${"test"}'>${data_value}</div>`));
        }
        else if (data_type == "img") {
            console.log("img");
            $(div).append($(`<img class='${data_class}' src=${data_value ? data_value : "/images/placeholder.png"}>`));
        }
        else{
            console.log("Error");
        }
      
      });
}


export function renderMainContent(){
    getMainData("../data/main_content-config.json");
}

export function renderContet(){
    getContentData("../data/simple-data.json");
}