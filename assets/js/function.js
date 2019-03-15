let loader = document.querySelector('.loader');
let now = document.querySelector('.now');
let body = document.body;
now.innerHTML = ' ' + new Date().toString().substr(0, 24) + ' ';
loader.classList.remove('hidden');

for (let i = 1; i <= 7; i++) {
    (function (i) {
        setTimeout(function () {
            body.classList.remove('step-' + (i - 1));
            body.classList.add('step-' + i);
        }, i * 250 + ~~(Math.random() * 50));
    })(i);
}