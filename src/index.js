console.log('%c HI', 'color: firebrick')

function getImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(data => addImageToPage(data))
}

function addImageToPage(){
    image.forEach(function(img))
}