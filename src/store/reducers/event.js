import { createAction, createReducer } from '@reduxjs/toolkit';


const initialState = {

  loading: true,

  event: [{
    id: 10,
    title: "Event de handball",
    description: "Faire un Basket",
    start_date: "12/05/2023",
    finish_date: "12/05/2023",
    start_hour: "12:00",
    finish_hour: "15:00",
    nb_participant: 2,
    equipement: "dqsfsefefsdfs",
    price: 5,
    picture: "/images/basket",

    organizer_id: 6,

    sport_id: 3,
    level_id: 1,
    address_id: 10,
    number: 24,
    street: "rue des fleurs",
    zip_code: "73045",
    city: "Vrellis",
    sport: "BasketBall",
    level: "Débutant"
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
