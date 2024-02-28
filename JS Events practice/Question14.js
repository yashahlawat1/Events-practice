document.addEventListener("DOMContentLoaded", function() {
    let buttonnew = document.getElementById("thisbutton");
    let textContainer=document.getElementById("text-container");
    let content=document.createElement("p");
    content.setAttribute("id","paragraph");
    content.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, sunt illum, quas unde tempore repellat consequatur alias enim numquam ratione iusto, facere fugit obcaecati ea dolore voluptatibus. Qui, adipisci dolor";

    buttonnew.addEventListener("mouseup", function() {
        changeText();
    });

    function changeText() {
        content.textContent = "Button clicked!";
        console.log("hello");
        textContainer.appendChild(content);
    }
    function changeText2(){
        textContainer.appendChild(content);
    }
    buttonnew.addEventListener("mousedown",function(){
        changeText2();
    })
});


