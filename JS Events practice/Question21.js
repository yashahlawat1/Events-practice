const textInput=document.getElementById("textInput");
const keypressCount=document.getElementById("keypressCount");
let count=0;
textInput.addEventListener("keyup",function(){
    count++;
    keypressCount.textContent=count;
});