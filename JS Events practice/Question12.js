let count=0;
document.addEventListener("click",function(){
    incrementcounter();
});
function incrementcounter(){
    count++;
    document.getElementById("countDisplay").textContent=count;
}