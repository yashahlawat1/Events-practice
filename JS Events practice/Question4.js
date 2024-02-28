let new1 = document.getElementById("buttonnew");
let new2 = document.getElementById("clickedbutton");
let new3 = document.getElementById("insertit");
let new4 = document.getElementById("deletebutton");

function todoit() {
    let answer = document.createElement("li");
    answer.textContent = new1.value;
    new3.appendChild(answer);
}

function deleteelement() {
    let selected = document.querySelector("#insertit li");
    if (selected) {
        selected.remove();
    }
}
