import {getContentData, getBlogData} from "./mainController.js";

export function getSelectedPost(id){
    getContentData(".blog-content", "../data/blog-data.json", id)
}

export function renderData(){
    getBlogData("../data/blog-data.json");
}

export function errorDataPage(){
    $(".error_data").hide();
}

export function selectPost(object){
    console.log(object.id);
}