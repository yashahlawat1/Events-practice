let newbox=document.getElementById("textbox");
let submitbtn=document.getElementById("selected")
submitbtn.addEventListener("click",function(){
    textbox1();
})
function textbox1(){
    if(newbox.value===""){
        alert("The text is empty");
    }else{
        alert("It has been submitted");
    }
}