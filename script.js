//HEADER
//Menu & Navigation
const menu_a = document.querySelector('.menu_a')
const menu_b = document.querySelector('.menu_b')
const navigation = document.querySelector('nav')


menu_a.addEventListener('click', ()=> {
    navigation.style = "display: block";
    menu_b.classList.remove ('unsee');
    menu_a.classList.add ('unsee');
})

menu_b.addEventListener('click', ()=> {
    navigation.style = "display: none";
    menu_b.classList.add ('unsee');
    menu_a.classList.remove ('unsee');
})


// TABS
const link1 = document.querySelector('.link_a')
const link2 = document.querySelector('.link_b')
const link3 = document.querySelector('.link_c')
const tab1 = document.querySelector('.t1')
const tab2 = document.querySelector('.t2')
const tab3 = document.querySelector('.t3')
const links = document.querySelectorAll('.items')


link1.addEventListener('click',()=> {
    tab1.classList.remove ('hidden');
    tab2.classList.add ('hidden');
    tab3.classList.add ('hidden');
    link1.classList.add ('link_hit');
    link2.classList.remove ('link_hit');
    link3.classList.remove ('link_hit');
})

link2.addEventListener('click',()=> {
    tab1.classList.add ('hidden');
    tab2.classList.remove ('hidden');
    tab3.classList.add ('hidden');
    link1.classList.remove ('link_hit');
    link2.classList.add ('link_hit');
    link3.classList.remove ('link_hit');
})

link3.addEventListener('click',()=> {
    tab1.classList.add ('hidden');
    tab2.classList.add ('hidden');
    tab3.classList.remove ('hidden');
    link1.classList.remove ('link_hit');
    link2.classList.remove ('link_hit');
    link3.classList.add ('link_hit');
})



//Accordion
const questions = document.querySelectorAll('.question');

for (i=0; i < questions.length; i++) {
    questions[i].addEventListener('click',change);
    function change() {
        this.classList.toggle ('active');
    };
}



// EMAIL VALIDITY CHECK
//check while typing and after clicking "contact us" button

const email = document.getElementById('mail');

email.addEventListener('keydown', validation);

function validation() {
    var form = document.getElementById('form');
    var email = document.getElementById('mail').value;
    var text = document.getElementById('validity');
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add ('valid');
        form.classList.remove ('invalid');
        text.innerHTML ="valid email address";
        text.style = "font-size: 14px; background-color: white; color: green; padding: 8px 16px; width: 100%; border-top: 2.5px solid green";
    }
    else {
        form.classList.remove ('valid');
        form.classList.add ('invalid');
        text.innerHTML ="invalid email address";
        text.style = "font-size: 14px; background-color: white; color: hsl(0, 94%, 66%); padding: 8px 16px; width: 100%; border-top: 2.5px solid hsl(0, 94%, 66%)";
    }
    if (email == "") {
        form.classList.remove ('valid');
        form.classList.remove ('invalid');
        text.innerHTML ="";
        text.style = "background-color: white; padding: 0; width: 100%; border-top: none";
    }
}


const submit = document.querySelector('.submit');

submit.addEventListener('click', submition);

function submition() {
    var form = document.getElementById('form');
    var email = document.getElementById('mail').value;
    var text = document.getElementById('validity');
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add ('valid');
        form.classList.remove ('invalid');
        text.innerHTML ="";
        text.style ="padding: 0; width: 100%; border-top: none";
    }
    else {
        form.classList.remove ('valid');
        form.classList.add ('invalid');
        text.innerHTML ="whoops, make sure it's an email <span><img src='images/icon-error.svg' alt='error'></span>";
        text.style = "display: flex; justify-content: space-between; align-items: center; font-size: 14px; background-color: hsl(0, 94%, 66%); color: white; padding: 8px 16px; width: 100%; border-top: 2.5px solid hsl(0, 94%, 66%)";
    }
    if (email == "") {
        form.classList.remove ('valid');
        form.classList.remove ('invalid');
        text.innerHTML ="";
        text.style = "background-color: white; padding: 0; width: 100%; border-top: none";
    }
}



