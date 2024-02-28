const new1 = document.getElementById("text1");
const ulid = document.getElementById("Listitems");
const watchout = ulid.querySelectorAll("button");

new1.addEventListener("input", itemsgiven);

function itemsgiven(event) {
    let searchedItem = event.target.value.toLowerCase();
    watchout.forEach(item => {
        let itemText = item.textContent.toLowerCase();
        if (itemText.includes(searchedItem)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
