document.addEventListener("DOMContentLoaded", function() {
    let findit = document.getElementById("changing");

   
    findit.addEventListener("click", findnew);

    function findnew(event) {
        let clickedButton = event.target;
        if (clickedButton.tagName === "BUTTON") {
            let newName = clickedButton.textContent;
            alert(newName);
        }
    }
});


