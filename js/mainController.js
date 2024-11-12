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

// R
// function setMainContent(data){
//     // var title = data[0].title.value;
//     // var description = data[0].description.value;
//     // var image = data[0].image.value;
//     // var links = data[0].links.value;

//     // $("#project-img").text(image);
//     // $("#project-title").text(title);
//     // $("#project-description").text(description);
//     // $("#project-links").text(links);

//     parseData(".main-content", data)
    
// }

function setContent(container, data, number){
    parseData(container, data, number)
}

export function setLatestUpdate(project) {
    $("#current_project").html(project);
}

// R
// function getMainData(json){
//     $.getJSON(json, function( data ){ 
//         setContent(".main-content", data) 
//     });
// }

function getContentData(container, json, number){
    $.getJSON(json, function(data){ 
        setContent(container, data, number) 
    });
}

function parseData(div, data, number=0){
    console.log(number)
    Object.keys(data[number]).forEach(function(key) {
        var data_value = data[number][key].value;
        var data_type = data[number][key].type;
        var data_class = data[number][key].class;
        var placeholder_img = "/images/placeholder.png";

        // console.log(key, data[number][key].value, data_value); // data[0][title].value 
        
        if (data_type == "txt") {
            console.log("txt");
            $(div).append($(`<div class='${data_class}'>${data_value}</div>`));
        }
        else if (data_type == "img") {
            console.log("img");
            $(div).append($(`<img class='${data_class}' src=${data_value ? data_value : placeholder_img}>`));
        }
        else{
            console.log("Error");
        }
      
      });
}


export function renderMainContent(){
    getContentData(".main-content", "../data/main_content-config.json");
}

export function renderProjectContent(){
    var number = 1;
    getContentData(".project-main", "../data/project-data.json", number);
}