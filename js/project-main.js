import {getSelectedPost, errorDataPage, renderData} from "./projectController.js";
import { activeTag } from "./siteEffects.js";


$(document).ready(function(){
   
  getSelectedPost(0);
  errorDataPage();

  renderData();

  
});

// Apparantly called event delegation see this for more -> https://stackoverflow.com/questions/203198/event-binding-on-dynamically-created-elements
$(".recent-uploads").on('click', ".blog-upload",function(){
  $(".post-title").empty();
  $(".post-content").empty();
  $(".error").remove();

  getSelectedPost(this.id);
})

$(".project").click(function(){
  activeTag(this.id)
})

$("#back").click(function(){
window.open("../index.html");
})

$(".site-title").click(function(){
window.location.replace("../index.html");
})


