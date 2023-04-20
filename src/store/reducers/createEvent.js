import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  createEvent: {
    title: "",
    description: "",
    start_date: "",
    finish_date: "",
    start_hour: "12:00",
    finish_hour: "15:00",
    nb_participant: 1,
    equipement: "",
    price: 0,
    picture: "images/",
    organizer_id: JSON.parse(localStorage.getItem('userId')),
    number: "",
    street: "",
    zip_code: "",
    city: "",
    sport: "",
    level: ""
  },
};


export const saveEvent = createAction('createEvent/saveEvent');
export const changeField = createAction('createEvent/changeField');
export const resetFormField = createAction('createUser/resetFormField');

const createEventReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeField, (state, action) => {
      console.log(state.createEvent.organizer_id);
      const { value, name } = action.payload;
      state.createEvent[name] = value;
    })
    .addCase(saveEvent, (state, action) => {

      state.createEvent = action.payload;
    })
    .addCase(resetFormField, (state) => {
      state.createEvent = {
        title: "",
        description: "",
        start_date: "",
        finish_date: "",
        start_hour: "12:00",
        finish_hour: "15:00",
        nb_participant: 2,
        equipement: "",
        price: 5,
        picture: "images/",

        organizer_id: 3,

        number: "",
        street: "",
        zip_code: "",
        city: "",
        sport: "",
        level: "Débutant"
      };
    })

});


export default createEventReducer;

