const checkit = document.getElementById("inputdata");
const dataset = document.getElementById("ulid");
const listItems = dataset.getElementsByTagName("li");

checkit.addEventListener("input", findsimilar);

function findsimilar(event) {
    const inputText = event.target.value.toLowerCase();

    Array.from(listItems).forEach(item => {
        const itemText = item.textContent.toLowerCase();
        if (itemText.includes(inputText)) {
            item.style.display = "block";
        } else {
            item.style.display ="none";
        }
    });
}
