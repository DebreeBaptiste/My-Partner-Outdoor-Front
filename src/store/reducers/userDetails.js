import { createReducer, createAction } from '@reduxjs/toolkit';

export const initialState = {
  edit: false,
  user: {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    pseudo: '',
    picture: 'photo',
    birthday: '',
    bio: 'your bio',
    sport: ["Football"],
    address: {
      id: '',
      zip_code: '',
      city: '',
      street: '',
      number: '',
    },
  },
};

export const saveUser = createAction('userDetails/saveUser');
export const updateUserDetails = createAction('userDetails/updateUserDetails');
export const updateUserField = createAction('userDetails/updateUserField');

export const saveUserAddress = createAction('userDetails/saveUserAddress');
export const updateUserAddress = createAction('userDetails/updateUserAddress');
export const deleteUserAddress = createAction('userDetails/deleteUserAddress');

export const addSport = createAction('userDetails/addSport');
export const removeSport = createAction('userDetails/removeSport');

export const openProfilEdit = createAction('userDetails/openProfilEdit');
export const closeProfilEdit = createAction('userDetails/closeProfilEdit');

const userDetailsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(saveUser, (state, action) => {
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

    .addCase(updateUserDetails, (state, action) => {
      const { firstname, lastname, pseudo, email, picture, bio } = action.payload;
      state.user = {
        firstname,
        lastname,
        pseudo,
        picture,
        email,
        bio,
        sport: state.user.sport,
        address: state.user.address,
      };
    })
    .addCase(updateUserField, (state, action) => {
      const { value, name } = action.payload;
      state.user[name] = value;
    })
    .addCase(saveUserAddress, (state, action) => {
      state.user.address = {
        id: action.payload[0].id,
        zip_code: action.payload[0].zip_code,
        city: action.payload[0].city,
        street: action.payload[0].street,
        number: action.payload[0].number,
      };
    })
    .addCase(updateUserAddress, (state, action) => {
      const { value, name } = action.payload;
      state.user.address[name] = value;
    })
    .addCase(deleteUserAddress, (state) => {
      state.user.address = {
        id: '',
        zip_code: '',
        city: '',
        street: '',
        number: '',
      };
    })

    .addCase(addSport, (state, action) => {
      state.user.sport.push(action.payload);
    })
    .addCase(removeSport, (state, action) => {
      state.user.sport = state.user.sport.filter(
        (sport) => sport !== action.payload
      );
    })

    .addCase(openProfilEdit, (state) => {
      state.edit = true;
    })
    .addCase(closeProfilEdit, (state) => {
      state.edit = false;
    });



});

export default userDetailsReducer;
