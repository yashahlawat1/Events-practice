let counter = document.getElementById("countvalue");
let count = 0;

counter.addEventListener("click", function(event) {
    if (event.target === counter) { 
        count++;
    }
    alert(count);
});
