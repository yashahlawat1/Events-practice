var anchor=document.querySelector('a');
anchor.addEventListener("click",function(event){
    event.preventDefault();
    alert("Default prevented");
})