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

    

    var size = Object.keys(data[0]).length; 
    var keys = Object.keys(data[0])
    var n = 0
    // while (n < size) {
    //     if (keys[n] == "title" || "description" || "image" || "links"){
            
    //     }
    //     console.log(data[0].title.value)

    //     n++;
    // } no idea what do with this
   
    Object.keys(data[0]).forEach(function(key) {

        console.log(key, data[0][key].value); // WORKS!!!!!
      
      });
    // console.log(keys) // gives me the keys
    
}

export function setLatestUpdate(project) {
    $("#current_project").html(project);
}

function getMainData(){
    $.getJSON("../data/main_content-config.json", function( data ){ // Can't find a way to 
        setMainContent(data) 
    });
}



export function renderMainContent(){
    getMainData();
}