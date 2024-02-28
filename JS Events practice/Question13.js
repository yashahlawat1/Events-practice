
document.addEventListener("DOMContentLoaded",function(){
    let count=0;
    const image=document.getElementById("checkit");
    const button=document.getElementById("checkbutton");
    function handleclick(){
        count++;
        alert(count);
        alert("Image clicked");
    }
    image.addEventListener("click",handleclick);
    button.addEventListener("click",function(){
        image.removeEventListener("click",handleclick);
        alert("Event listener removed from image");
    });
});
