import {getSelectedPost, errorDataPage, renderData} from "./projectController.js";
import { activeTag } from "./siteEffects.js";


$(document).ready(function(){
   
  getSelectedPost(0);
  errorDataPage();

  renderData();

});

$(".project").click(function(){
  activeTag(this.id)
})

$("#back").click(function(){
window.open("../index.html");
})

$(".site-title").click(function(){
window.location.replace("../index.html");
})


