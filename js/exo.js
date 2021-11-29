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
    app.displayWorks();
    app.displayDisponibilty();
    base.fillProfil(app.hercule);
    base.printFriends(app.friends);
    base.setBestFriend(app.friends[0]);
    base.displayWork(2);
  },

  // ------ Methods ------ //
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
};

document.addEventListener('DOMContentLoaded', app.init);
