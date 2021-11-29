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
    base.fillProfil(app.hercule);
    base.printFriends(app.friends);
    base.setBestFriend(app.friends[0]);
  }
};

document.addEventListener('DOMContentLoaded', app.init);
