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


    // Cut



    var size = Object.keys(data[0]).length; 
    var keys = Object.keys(data[0])
    var n = 0
   
    // C: this is for another page not the main content 
    // Object.keys(data[0]).forEach(function(key) {

    //     console.log(key, data[0][key].value); 
    //     if (data[0][key].type == "txt") {
    //         console.log("txt");
    //         $(".main-content").append($(`<div class='${"test"}'>${data[0][key].value}</div>`));
    //     }
    //     else if (data[0][key].type == "img") {
    //         console.log("img");
    //         $(".main-content").append($(`<img class='${data[0][key].class}' src=${data[0][key].value ? data[0][key].value:"/images/placeholder.png"}>`));
    //     }
    //     else{
    //         console.log("Error");
    //     }
      
    //   });

    // console.log(keys) // gives me the keys
    
    // Clean

    Object.keys(data[0]).forEach(function(key) {
        var data_value = data[0][key].value;
        var data_type = data[0][key].type;
        var data_class = data[0][key].class;

        console.log(key, data[0][key].value, data_value); 

        if (data_type == "txt") {
            console.log("txt");
            $(".main-content").append($(`<div class='${"test"}'>${data_value}</div>`));
        }
        else if (data_type == "img") {
            console.log("img");
            $(".main-content").append($(`<img class='${data_class}' src=${data_value ? data_value : "/images/placeholder.png"}>`));
        }
        else{
            console.log("Error");
        }
      
      });
    
}

export function setLatestUpdate(project) {
    $("#current_project").html(project);
}

function getMainData(){
    $.getJSON("../data/main_content-config.json", function( data ){ 
        setMainContent(data) 
    });
}



export function renderMainContent(){
    getMainData();
}