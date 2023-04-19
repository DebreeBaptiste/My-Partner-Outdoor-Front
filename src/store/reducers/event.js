import { createAction, createReducer } from '@reduxjs/toolkit';


const initialState = {

  loading: true,

  event: [{
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
    picture: "/images/basket",
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
  }],

  selectedLevel: "",

};

export const getRandomEvents = createAction('event/getRandomEvents');
export const getFilteredEvents = createAction('event/getFilteredEvents');

export const changeField = createAction('event/changeField');
export const saveEvent = createAction('event/saveEvent');


const eventReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getRandomEvents, (state, action) => {

      state.event = action.payload;
      state.loading = false;
    })
    .addCase(getFilteredEvents, (state, action) => {
      state.loading = false;
      state.selectedLevel = action.payload;
    })
    .addCase(changeField, (state, action) => {
      const { value, name } = action.payload;
      state.event[name] = value;
    })
    .addCase(saveEvent, (state, action) => {

      state.event = action.payload;
      state.loading = false;

    })

});

export default eventReducer;
