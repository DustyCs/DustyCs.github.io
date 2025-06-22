import { create_activity, setLatestUpdate, renderMainContent } from "./mainController.js";

var maintenance = false

if (!maintenance) {
    $(document).ready(function(){

        // Latest Update
        const latest_project = "BLOG SITE"; // Should change this from config.json(make it)

        setLatestUpdate(latest_project);
    
        // Activity
        var test = create_activity(); // fix this tmr
        $(".activity-list").append(test);

        // Content
    
        renderMainContent();
        
    
    });
}
else {
    $(".container").hide()
}
