// import { renderProjectContent } from "./mainController.js";
import { setActive, removeActive,showTag } from "./siteEffects.js";


$(document).ready(function(){
    
    // Render Content

    // renderProjectContent();

    
    $(".project").click(function(){
        if(!$(this).hasClass('active')){
            setActive("#" + this.id);
        }
        else(
            removeActive("#" + this.id)
        )
        // console.log($(this).attr("class")) ;
        // console.log($(this).hasClass('active'));
    })

    // $("#back").click(function () {
    //     showTag("#blog", "#project", "#fun")
    // })

});