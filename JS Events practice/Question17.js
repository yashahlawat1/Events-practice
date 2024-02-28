const texttype = document.getElementById("textbox");
const buttontype = document.getElementById("clearbutton");

function clearit() {
    if (texttype.value !== "") {
        texttype.value = ""; 
    }
}

buttontype.addEventListener("click", function() {
    clearit();
});
