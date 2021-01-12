/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbarList = document.querySelector('#navbar__list');
const allSections = document.querySelectorAll('section[data-nav]');


/**
 * End Global Variables
 * Begin Main Functions
 * 
*/

// build the nav

allSections.forEach( (section, index) => {
    const newAnchor = document.createElement('a');
    const newListElements = document.createElement('li');
    
    newAnchor.classList.add("menu__link");
    newAnchor.setAttribute('data-nav-item', `nav-item-${index + 1}`);
    newAnchor.innerText = section.getAttribute('data-nav');
    newAnchor.href = `#${section.getAttribute('id')}`;
    newListElements.appendChild(newAnchor);

    newListElements.classList.add("menu-items");
    newListElements.setAttribute("id", `menu-${index +1}`);   
    navbarList.appendChild(newListElements);

});

// Add class 'active' to section when near top of viewport

const allNavbarItems = document.querySelectorAll('a[data-nav-item]');

window.onscroll = () => { 

    for (let i = 0; i < allSections.length; i++) {
        if (allSections[i].getBoundingClientRect().top <= 150 && allSections[i].getBoundingClientRect().top >= -150) {
            allSections.forEach(section => {
                if (section === allSections[i]) {
                    section.classList.add('active');                  
                    for (let j = 0; j < allNavbarItems.length; j++) {
                        if (allNavbarItems[j].innerText === section.getAttribute('data-nav')) {
                           allNavbarItems[j].classList.add('active');
                       } else {
                           allNavbarItems[j].classList.remove('active');
                       }
                   }
                } else {
                    section.classList.remove('active');
                }
            })
            return;
        }
    }
}

// Add the smooth scroll behavior to link to the correct section

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// End Main Functions
