import { create_activity, setLatestUpdate, renderMainContent } from "./tag_maker.js";

$(document).ready(function(){

    // Latest Update
    const latest_project = "This Site";
    setLatestUpdate(latest_project);

    // Activity
    var test = create_activity();
    $(".activity-list").append(test);

    // Content

    renderMainContent();
    

});