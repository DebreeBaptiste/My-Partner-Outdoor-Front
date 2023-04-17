import { createReducer, createAction } from '@reduxjs/toolkit';

export const initialState = {
  user: {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    pseudo: '',
    picture: '',
    birthday: '',
    bio: '',
    sport: [],
    address: {
      id: '',
      zip_code: '',
      city: '',
      street: '',
      number: '',
    },
  },
};

export const saveOtherUser = createAction('userProfil/saveOtherUser');

export const saveOtherUserAddress = createAction('userProfil/saveOtherUserAddress');

export const saveOtherUserSport = createAction('userProfil/saveOtherUserSport');

const userProfilReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(saveOtherUser, (state, action) => {
      const { firstname, lastname, pseudo, email, picture, bio, id, birthday } =
        action.payload;
      state.user = {
        id,
        firstname,
        lastname,
        email,
        pseudo,
        picture,
        bio,
        birthday,
        sport: state.user.sport,
        address: state.user.address,
      };
    })
    .addCase(saveOtherUserAddress, (state, action) => {
      const { id, zip_code, city, street, number } = action.payload;
      state.user.address = {
        id,
        zip_code,
        city,
        street,
        number,
      };
    })
    .addCase(saveOtherUserSport, (state, action) => {
      state.user.sport = action.payload;
    });
});

export default userProfilReducer;
