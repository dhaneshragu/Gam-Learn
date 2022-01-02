const darkModeCheckBox = document.querySelector('.dark-mode-checkbox');
const toggleMover = document.querySelector('.toggle-mover');
const body = document.body;
const navLinks = document.querySelectorAll('.nav-link');
const header = document.querySelector('#header');
const logo = document.querySelector('#logo');
const cardBig = document.querySelector('.card-big');
const knowMoreHeading = document.querySelector('.know-more-heading');
const cardMedium = document.querySelector('.card-medium');
const cardContact = document.querySelector('.card-contact');
const cardSubjects = document.querySelector('.card-subjects');
const subcard = document.querySelectorAll('.subcard');
const cardSmall = document.querySelector('.card-small');
const subscribeForm = document.querySelector('.subscribe-form');
const navigationPane = document.querySelector('.navigation-pane');
const rightsNotice = document.querySelector('.rights-notice');


darkModeCheckBox.addEventListener('click', () => {
    let ui=localStorage.getItem("ui");
    let uiclk=localStorage.getItem("uiclk");
    body.classList.toggle('dark-mode-body');
    header.classList.toggle('dark-mode-header');
    logo.classList.toggle('dark-mode-logo');
    navLinks.forEach(link => {
        link.classList.toggle('dark-mode-navlink');
    })
    loggedUser.classList.toggle('dark-mode-logged-user');
    knowMoreHeading.classList.toggle('dark-mode-know-more-heading');
    cardBig.classList.toggle('dark-mode-card-big');
    cardMedium.classList.toggle('dark-mode-card-medium');
    cardContact.classList.toggle('dark-mode-card-contact');
    cardSubjects.classList.toggle('dark-mode-card-subjects');
    subcard.forEach(card => {
        card.classList.toggle('dark-mode-sub-card');
    })
    cardSmall.classList.toggle('dark-mode-card-small');
    navigationPane.classList.toggle('dark-mode-navigation-pane');
    subscribeForm.classList.toggle('dark-mode-subscribe-form');
    rightsNotice.classList.toggle('dark-mode-rights-notice');
    if (ui==="dark"){if(uiclk==="jsb"){   
        localStorage.removeItem("ui");
        localStorage.setItem("ui","light");}
    }else{
        localStorage.setItem("ui","dark");
    }
    localStorage.removeItem("uiclk");
})
