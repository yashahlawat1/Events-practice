let clickeditem=document.getElementById("clicked");
let taggle=document.getElementById("checkit");
clickeditem.addEventListener("click",function(){
    togglevis();
});
function togglevis(){
    if(taggle.hidden){
        taggle.hidden=false;

    }else{
        taggle.hidden=true;
    }
}