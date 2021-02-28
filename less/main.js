//main: ./main.less

let anchors = documents.querySelectorAll('a[href*="#"]')

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