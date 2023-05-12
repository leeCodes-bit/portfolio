// Change icons

document.getElementById('postman').addEventListener('mouseenter', logoChange)
document.getElementById('postman').addEventListener('mouseleave', revertBack)

function logoChange() {
    document.getElementById('postman').src = 'img/postman.svg';
}

function revertBack() {
    document.getElementById('postman').src = 'img/postma.png'
}

// menu application
var hamBurger = document.querySelector('.burger');
var navLink = document.querySelector('.menu-items');
var navLinkItems = document.querySelectorAll('.menu-items.active>a');

hamBurger.addEventListener('click', openMenu)
navLinkItems.forEach(function(current) {

    current.addEventListener('click', openMenu);
})

function openMenu() {
    hamBurger.classList.toggle('open-menu');
    navLink.classList.toggle('active');
};

// mailer
function sendMail(){
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

const serviceID = 'service_6cnpxes';
const templateID = 'template_kl3qkwo';

emailjs.send(serviceID, templateID, params)
.then(
    res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        alert("Your message has been sent successfully")
    })
    .catch(err => console.log(err))
}

