let new1 = document.getElementById("colorit");
new1.addEventListener("click", function() {
    changecolor();
});

function changecolor() {
    // Generate random RGB values
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    // Construct the RGB color string
    let color = `rgb(${red}, ${green}, ${blue})`;
    // Apply the color to the body background
    document.body.style.backgroundColor = color;
}