
var btn = document.querySelector('.btn');

var img = document.querySelector('img');

var removeBtn = document.querySelector('.remove-btn');

var showImage = function() {
  var img = document.querySelector('img');
 if(img === null) {
  console.log('image does not exist'); 
  }
  else {
  img.classList.add('js-show');
  }

}


var hideImage = function() {
  var img = document.querySelector('img');
  img.className = 'js-hidden';
}

var remove = function() {
  var img = document.querySelector('img');
   var parent =img.parentNode;
  parent.removeChild(img); 
  removeBtn.removeEventListener('click', remove);
}

btn.addEventListener('click', showImage);

img.addEventListener('click', hideImage); 

removeBtn.addEventListener('click', remove);


