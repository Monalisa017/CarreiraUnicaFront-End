let time = 1000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#carrossel img")
    max = images.length;

function rotate(){

    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex].classList.add("selected")
}

function start (){
    setInterval(() => {
        rotate()
    }, time)
}

window.addEventListener("load", start)

