let buttonnew = document.getElementById("buttonchange");
let imagenew = document.getElementById("hasto");

function changeimage() {
    let span = document.createElement("span");
    span.textContent = "https://wallpapers.com/images/hd/cute-bird-pictures-b9o7wbuyvkjoleln.jpg";
    
    let newImage = document.createElement("img");
    newImage.src = span.textContent;

    imagenew.parentNode.replaceChild(newImage, imagenew);
}

buttonnew.addEventListener("click", changeimage);
