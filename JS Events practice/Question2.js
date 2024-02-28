let oldtext=document.getElementById("selectnew");
oldtext.addEventListener("dblclick",function(){
    let new1=document.createElement("div");
    new1.textContent="New Text";
    oldtext.replaceChildren(new1);
    alert("new text added");
    alert(new1.outerHTML);
})