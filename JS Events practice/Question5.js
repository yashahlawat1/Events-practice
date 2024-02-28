let dataset=document.getElementById("dataset");
dataset.addEventListener("click",function(event){
    let clickeditem=event.target;
    if(clickeditem.tagName==="LI"){
        toogglebackground(clickeditem)
    }
});
function toogglebackground(element){
    let count=element.dataset.clickCount || 0;
    count++;
    if(count===1){
        element.style.backgroundColor = "red";
    }else if(count === 2){
        element.style.backgroundColor = "yellow";
    }else{
        count = 1;
        element.style.backgroundColor = "red";
    }
    element.dataset.clickCount=count;
}