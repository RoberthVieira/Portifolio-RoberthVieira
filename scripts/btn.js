window.addEventListener('scroll', function(){

    const scrollToTopButton = document.querySelector("#scrollToTopBtn");

    if(window.scrollY > 300){
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
})

window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
})