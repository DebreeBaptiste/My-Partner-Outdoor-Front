import { createAction, createReducer } from '@reduxjs/toolkit';


const initialState = {
  edit: false,
  editPictureModal: false,
  updatePicture: Date.now(),
  event: {
    id: "",
    title: "",
    description: "",
    start_date: "",
    finish_date: "",
    start_hour: "",
    finish_hour: "",
    nb_participant: "",
    equipement: "",
    price: "",
    picture: "",
    organizer_id: "",
    sport_id: "",
    level_id: "",
    address_id: "",
    number: "",
    street: "",
    zip_code: "",
    city: "",
    sport: "",
    level: ""
  },
};

export const saveEvent = createAction('eventDetails/saveEvent');

export const openEventEdit = createAction('eventDetails/openEventEdit');
export const closeEventEdit = createAction('eventDetails/closeEventEdit');
export const toggleEventEdit = createAction('eventDetails/toggleEventEdit');

export const openEventPictureEdit = createAction('eventDetails/openEventPictureEdit');
export const closeEventPictureEdit = createAction('eventDetails/closeEventPictureEdit');
export const saveEventPicture = createAction('eventDetails/saveEventPicture');

export const updateEventPictureDate = createAction('eventDetails/updateEventPictureDate');


const eventDetailsReducer = createReducer(initialState, (builder) => {
  builder

    .addCase(saveEvent, (state, action) => {
      const {
        id,
        title,
        description,
        start_date,
        finish_date,
        start_hour,
        finish_hour,
        nb_participant,
        equipement,
        price,
        picture,
        organizer_id,
        sport_id,
        level_id,
        address_id,
        number,
        street,
        zip_code,
        city, sport,
        level
      } = action.payload;

      state.event = {
        id,
        title,
        description,
        start_date,
        finish_date,
        start_hour,
        finish_hour,
        nb_participant,
        equipement,
        price,
        picture,
        organizer_id,
        sport_id,
        level_id,
        address_id,
        number,
        street,
        zip_code,
        city,
        sport,
        level
      };
    })

    .addCase(openEventEdit, (state) => {
      state.edit = true;
    })
    .addCase(closeEventEdit, (state) => {
      state.edit = false;
    })
    .addCase(toggleEventEdit, (state) => {
      state.edit = !state.edit;
    })

    .addCase(openEventPictureEdit, (state) => {
      state.editPictureModal = true;
    })
    .addCase(closeEventPictureEdit, (state) => {
      state.editPictureModal = false;
    })
    .addCase(saveEventPicture, (state, action) => {
      state.event.picture = action.payload;
    })

    .addCase(updateEventPictureDate, (state, action) => {
      state.updatePicture = action.payload;
    });

});

export default eventDetailsReducer;
