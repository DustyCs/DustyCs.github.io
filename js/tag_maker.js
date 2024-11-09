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
    var title = data[0].title
    var description = data[0].description
    var image = data[0].image
    var links = data[0].links

    $("#project-img").text(image);
    $("#project-title").text(title);
    $("#project-description").text(description);
    $("#project-links").text(links);

    var size = Object.keys(data[0]).length; 
    console.log(size)
    
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