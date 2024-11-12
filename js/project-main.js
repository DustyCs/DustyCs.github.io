import { renderProjectContent } from "./mainController.js";
import { activeTag, showTag } from "./siteEffects.js";


$(document).ready(function(){
    
    // Render Content

    // renderProjectContent();

    
    $(".project").click(function(){
        // console.log(this.id)
        // R
        // if (this.id == "blog"){
        //     $("#project").hide();
        //     $("#fun").hide();
        //     console.log("run")
        // }
        // if (this.id == "project"){
        //     $("#blog").hide();
        //     $("#fun").hide();
        //     console.log("run")
        // }
        // if (this.id == "fun"){
        //     $("#project").hide();
        //     $("#blog").hide();
        //     console.log("run")
        // }
        activeTag(this.id, "#blog", "#project", "#fun");

    })

    $("#back").click(function () {
        showTag("#blog", "#project", "#fun")
    })
    });