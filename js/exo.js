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
    app.displayTasksDone(app.hercule.name);
    app.displayWorks();
    app.displayDisponibilty();
    base.fillProfil(app.hercule);
    base.printFriends(app.friends);
    base.setBestFriend(app.friends[0]);
    base.displayWork(2);

    app.displayPopularityTrend(base.vote.hercule, base.vote.cesar);
    
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
  /**
   * Calcul and display popularity trends
   * @param {number} herculeVotes number of votes for Hercule
   * @param {number} cesarVotes number of votes for Cesar
   */
  displayPopularityTrend: (herculeVotes, cesarVotes) => {
    const totalVotes = herculeVotes + cesarVotes;
    const herculePercent = herculeVotes / totalVotes * 100;
    const cesarPercent = cesarVotes / totalVotes *100;
    const trendsPercentHercule = document.getElementById('trends-hercule').querySelector('.people__popularity');
    const trendsBarHercule = document.getElementById('trends-hercule').querySelector('.people__bar');
    const trendsPercentCesar = document.getElementById('trends-cesar').querySelector('.people__popularity');
    const trendsBarCesar = document.getElementById('trends-cesar').querySelector('.people__bar');
    //console.log('h:', herculePercent.toFixed(1), '/C:', cesarPercent.toFixed(1));
    trendsPercentHercule.textContent = `${herculePercent.toFixed(1)} %`;
    trendsBarHercule.style.width = `${herculePercent.toFixed(1)}%`;
    trendsPercentCesar.textContent = `${cesarPercent.toFixed(1)} %`;
    trendsBarCesar.style.width = `${cesarPercent.toFixed(1)}%`;
  },
  /**
   * create a li in the list for each task done by the hero
   * @param {string} heroName name of the hero we want to display activities
   */
  displayTasksDone: (heroName) => {
    const activitiesPanel = document.getElementById('activities');
    const activitiesList = activitiesPanel.querySelector('.tasks');
    activitiesPanel.classList.remove('hidden');
    console.log(base.activities.length);
    for (let i = 0; i < base.activities.length; i++) {
      if (base.activities[i].author === heroName && base.activities[i].finished) {
        
        const activitiesListElement = document.createElement('li');
        activitiesListElement.textContent = base.activities[i].title;
        //console.log(activitiesListElement);
        activitiesList.appendChild(activitiesListElement);
      }
      
    }
  }
};

document.addEventListener('DOMContentLoaded', app.init);
