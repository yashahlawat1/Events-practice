var btn = document.getElementById('btn'); 

var dialogBox = document.querySelector('.dialog');

console.log(dialogBox);

btn.addEventListener('click', function () {
  dialogBox.classList.add('show');
})

document.body.addEventListener('click', function (event) {
  console.log(event.target.nodeName);
  if(event.target.nodeName === 'BODY') {
    dialogBox.classList.remove('show'); 
    event.stopPropagation();
    event.preventDefault();
  }
    
    
},true)
    
    