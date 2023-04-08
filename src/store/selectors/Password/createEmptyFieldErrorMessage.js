export const createEmptyFieldErrorMessage = (state) => {

  // check all property of state and if one is undefined or empty string return error message
  for (const property in state) {

    if (state[property] === undefined || state[property] === '') {

      switch (property) {
        case 'firstname':
          return 'Le champ prénom est vide';
        case 'lastname':
          return 'Le champ nom est vide';
        case 'pseudo':
          return 'Le champ pseudo est vide';
        case 'sport':
          return 'Le champ sport est vide';
        case 'email':
          return 'Le champ email est vide';
        case 'password':
          return 'Le champ mot de passe est vide';
        case 'repeat_password':
          return 'Le champ Confirmer le mot de passe est vide';
        default:
          return;
      }
    }
  }
}
