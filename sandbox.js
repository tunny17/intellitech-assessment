// grabbing the dropdown menus
let drop1 = document.getElementById('drop1');
let drop2 = document.getElementById('drop2');

// grabbing their respective nav
let nav1 = document.getElementById('services');
let nav2 = document.getElementById('company');

// grabbing the necessary things for the form
let openBtn = document.querySelector('button');
let form = document.querySelector('#quoteForm');
let closeBtn = document.querySelector('.close-btn')

// functions for the hover feature
nav1.addEventListener('mouseover', ()=>{
    drop1.classList.toggle('display');
});

nav2.addEventListener('mouseover', ()=>{
    drop2.classList.toggle('display');
});


// setting each function
function openForm() {
    form.classList.add('quote-display');
}

function closeForm() {
    form.classList.remove('quote-display');
}

// respective event listeners
openBtn.addEventListener('click', openForm);
closeBtn.addEventListener('click', closeForm);