// import { renderProjectContent } from "./mainController.js";
import { activeTag } from "./siteEffects.js";


$(document).ready(function(){
    $(".project").click(function(){
        activeTag(this.id)
    })

    $("#back").click(function(){
      window.open("../index.html");
    })

    $(".site-title").click(function(){
      window.location.replace("../index.html");
    })

});

