const app = {
  hercule: {
    name: 'Hercule',
    job: 'Demi-dieu',
    age: 35,
    department: 75,
    arm: 60.5,
    inRealtionship: true,
  },
  friends: ['Jupiter', 'Junon', 'Alcmène', 'Déjanire'],
  
  init: () => {
    app.printBannerTitle();
    app.displayProfilName(app.hercule.name, app.hercule.department);
    app.displayWorks();
    app.displayDisponibilty();
    base.fillProfil(app.hercule);
    base.printFriends(app.friends);
    base.setBestFriend(app.friends[0]);
    base.displayWork(2);
    
    // menu
    const menuToggler = document.getElementById('menu-toggler');
    menuToggler.addEventListener('click', function() {
      const headerBanner = document.getElementById('header-banner');
      headerBanner.classList.toggle('banner--open');
    });

    // chat
    const contactForm = document.getElementById('contact');
    //const inputForm = contactForm.querySelector('.contact__input');
    const inputButton = contactForm.querySelector('.contact__button');
    inputButton.addEventListener('click', function(e) {
      e.preventDefault();
      alert('Hercule ne souhaite pas être dérangé');
    });
  },

  // ------ Methods ------ //
  /**
   * Create and fill H1 title
   */
  printBannerTitle: () => {
    const bannerTitle = document.createElement('h1');
    const headerBanner = document.getElementById('header-banner');
    bannerTitle.classList.add('banner__title');
    bannerTitle.textContent = 'Vous consultez le profil de Hercule';
    headerBanner.appendChild(bannerTitle);
  },
  /**
   * display all 12 works
   */
  displayWorks: () => {
    for (let i = 0; i < 11 + 1; i++) {
      base.displayWork(i);
    }
  },
  /**
   * Get the current hour and display disponibility
   */
  displayDisponibilty: () => {
    const availabilityElement = document.getElementById('availability');
    let currentHour = base.getHour();
    // currentHour = 21 // test
    console.log(currentHour);
    if (currentHour >= 8 && currentHour <= 20) {
      availabilityElement.textContent = 'Disponible';
      availabilityElement.classList.remove('off');

    } else {
      availabilityElement.textContent = 'Non disponible';
      availabilityElement.classList.add('off');
    }
  },
  /**
   * display the created pseudo in #profil-name
   * @param {string} firstName 
   * @param {number} departmentNumber 
   */
  displayProfilName: (firstName, departmentNumber) => {
    const profilNameTitle = document.getElementById('profil-name');
    profilNameTitle.textContent = app.createPseudo(firstName, departmentNumber);
  },
  /**
   * create and return the pseudo
   * @param {string} firstName
   * @param {number} departmentNumber
   * @returns {string} pseudo
   */
  createPseudo: (firstName, departmentNumber) => {
    return `${firstName}-du-${departmentNumber}`;
  },
};

document.addEventListener('DOMContentLoaded', app.init);
