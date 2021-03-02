
// ---------------------Для кнопки GoTop
// Получить кнопку:
mybutton = document.getElementById("myBtn");
// Когда пользователь прокручивает вниз 20px от верхней части документа, покажите кнопку
window.onscroll = function () {
scrollFunction()
};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
// Когда пользователь нажимает на кнопку, прокрутите до верхней части документа
function topFunction() {
document.body.scrollTop = 0; // Для Safari
document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
}



// -----------------------Плавная прокрутка Lesson 08
let anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault()
        let blockID = anchor.getAttribute('href')  
        document.querySelector(blockID).scrollIntoView({
            behavior: "smooth",
            block: 'start'
        })
    })
}

// ------------------------QuerySelector Lesson 07
// <!-- при нажатии на кнопку buy будем увеличивать число элементов в корзине (header and products) -->

let buy_buttons = document.querySelectorAll('.products__btn-white')
let cart_count = document.getElementById('cart_count')

function addToCart() {
    cart_count.innerText = Number(cart_count.innerText)+1 //Number: строку переводим в номер 
}

// buy_buttons[0].addEventListener
// buy_buttons[1].addEventListener //и т.д. всем кнопкам

for(let i=0; i < buy_buttons.length; i++) {
    buy_buttons[i].addEventListener('click', addToCart)
}