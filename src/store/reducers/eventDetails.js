import { createAction, createReducer } from '@reduxjs/toolkit';


const initialState = {

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
    });

});

export default eventDetailsReducer;
