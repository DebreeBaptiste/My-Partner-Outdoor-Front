import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {

  myEvent: [{
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
  }],

};

export const getEventsWithID = createAction('myEvent/getEventsWithID');


const myEventReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getEventsWithID, (state, action) => {

      state.myEvent = action.payload;
    })

});

export default myEventReducer;
