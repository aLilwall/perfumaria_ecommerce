function initiateCarrossel() {
    const images = document.querySelectorAll('.carrossel img');
    let i = 0;

    setInterval(() => {
        images[i].classList.remove('active');
        i = (i + 1) % images.length;
        images[i].classList.add('active');
    }, 3000)
}

window.onload = initiateCarrossel;