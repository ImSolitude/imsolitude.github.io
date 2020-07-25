/* global console, alert, confirm  */
const hamburger = document.querySelector('.hamburger');
const slideUp = document.querySelector('.slide-up');
const sidebar = document.querySelector('.sidebar');
const hero = document.querySelector('.hero');
const slideDown = document.querySelector('.slide-down a');
const img = slideDown.querySelector('svg');
const animateSpan = document.querySelector('.hero-animate');
let step = 1;
let steps;

window.addEventListener('scroll', () => {
  scrollY > 100
    ? hamburger.classList.add('hide')
    : hamburger.classList.remove('hide');
  scrollY > 100
    ? slideUp.classList.add('show')
    : slideUp.classList.remove('show');
});

const project = document.querySelector('.projects');
project.addEventListener('click', () => {
  hamburger.click();
});
const home = document.querySelector('.home');
home.addEventListener('click', () => {
  hamburger.click();
});

/* icons */
slideDown.addEventListener('mouseenter', () => {
  img.style.fill = 'white';
});
slideDown.addEventListener('mouseleave', () => {
  img.style.fill = 'black';
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('closed');
  sidebar.classList.toggle('sidebar-show');
});
/* icons */
function startAnimate() {
  step === 1
    ? (animateSpan.innerHTML = `I can solve <i class="muted">all</i> some of your problems.`)
    : '';
  step === 2
    ? (animateSpan.innerHTML = `I can solve <i class="muted">all</i> <i class="muted">some</i> one of your problems.`)
    : '';
  step === 3
    ? (animateSpan.innerHTML = `I can solve <i class="muted">all</i> <i class="muted">some</i> <i class="muted">one of your</i>  problems.`)
    : '';
  step === 4 ? clearInterval(steps) : '';
  step += 1;
}
steps = setInterval(startAnimate, 2000);
