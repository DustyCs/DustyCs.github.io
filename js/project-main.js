// import { renderProjectContent } from "./mainController.js";
import { activeTag } from "./siteEffects.js";


$(document).ready(function(){
    
    // Render Content

    // renderProjectContent();

    
    $(".project").click(function(){
        activeTag(this.id)
    })

    $("#back").click(function(){
      window.open("../index.html");
    })

    // $(".max-description").hide();
    // console.log($("#blog").find(".max-description"));
    // $("#blog").find(".max-description").show(); // this works
});

