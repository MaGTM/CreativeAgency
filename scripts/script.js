// Scrolling to blocks

let scrollFun = (selector) => {
    let selectedElem = document.querySelector(selector)
    window.scrollTo({
        top: selectedElem.getBoundingClientRect().y + window.scrollY,
        behavior: "smooth"
    })
}

// Contact Form Animations
let inputs = document.querySelectorAll('.contact-input'),
    fullnameLabel = document.querySelector("#fullname__label"),
    emailLabel = document.querySelector("#email__label"),
    messageLabel = document.querySelector("#message__label");
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("focus", (e) => {
        switch (e.target.name) {
            case "fullname":
                fullnameLabel.style.top = "0"
                break
            case "email":
                emailLabel.style.top = "0"
                break
            case "message":
                console.log('hi');
                messageLabel.style.top = "0"
                break
        }
    })
}

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("blur", (e) => {
        switch (e.target.name) {
            case "fullname":
                if (inputs[i].value) {
                    break
                }
                fullnameLabel.style.top = "50%"
                break
            case "email":
                if (inputs[i].value) {
                    break
                }
                emailLabel.style.top = "50%"
                break
            case "message":
                if (inputs[i].value) {
                    break
                }
                messageLabel.style.top = "35px"
                break
        }
    })
}

document.querySelector('form').addEventListener("submit", (e) => {
    e.preventDefault()
    document.querySelector('#error').style.opacity = "1"
    document.querySelector('#form-btn').disabled = true
    setTimeout(() => {
        document.querySelector('#error').style.opacity = "0"
        document.querySelector('#form-btn').disabled = false
    }, 5000)
})

// Slider Animations
let nextSlide = () => {
    let currentLeft = Number(getComputedStyle(document.querySelector('.slider__box')).left.split("px")[0]),
        itemWidth = Number(getComputedStyle(document.querySelector('.slider__item')).width.split("px")[0]),
        maxRange = itemWidth * (document.querySelectorAll('.slider__item').length-1) * -1;
    if(currentLeft % itemWidth  === 0) {
        if(currentLeft > maxRange) {
            document.querySelector('.slider__box').style.left = String(currentLeft - itemWidth) + "px";
        } else {
            document.querySelector('.slider__box').style.left = 0
        }
    }
}

let prevSlide = () => {
    let currentLeft = Number(getComputedStyle(document.querySelector('.slider__box')).left.split("px")[0]),
        itemWidth = Number(getComputedStyle(document.querySelector('.slider__item')).width.split("px")[0]),
        itemCount = document.querySelectorAll('.slider__item').length;
    if(currentLeft % itemWidth  === 0) {
        if(currentLeft < 0) {
            document.querySelector('.slider__box').style.left = String(currentLeft + itemWidth) + "px";
        } else {
            document.querySelector('.slider__box').style.left = String(itemWidth * (itemCount-1) * -1) + "px"
        }
    }
}