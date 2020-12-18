function imgSlider(anything) {
    document.querySelector('.juice').src = anything;
}
function changeColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}
function hamburger() {
    var hamburger = document.querySelector('.hamburger');
    var navigator = document.querySelector('.navigator')
    hamburger.classList.toggle('active');
    navigator.classList.toggle('active');
}