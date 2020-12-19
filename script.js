function imgSlider(anything) {
    document.querySelector('.juice').src = anything;
}
function changeColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

//Navigation bar
const hamburger = document.getElementsByClassName('hamburger')[0];
const navigator = document.getElementsByClassName('navigator')[0];

hamburger.addEventListener('click', () => {
    navigator.classList.toggle('active')
})