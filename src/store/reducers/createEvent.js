import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  createEvent: {
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

    number: 24,
    street: "rue des fleurs",
    zip_code: "73045",
    city: "Vrellis",
    sport: "BasketBall",
    level: "Débutant"
  },
};


export const saveEvent = createAction('createEvent/saveEvent');
export const changeField = createAction('createEvent/changeField');
export const resetFormField = createAction('createUser/resetFormField');

const createEventReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeField, (state, action) => {
      const { value, name } = action.payload;
      state.createEvent[name] = value;
    })
    .addCase(saveEvent, (state, action) => {

      state.createEvent = action.payload;
    })
    .addCase(resetFormField, (state) => {
      state.createEvent = {
        title: " ",
        description: " ",
        start_date: " ",
        finish_date: " ",
        start_hour: " ",
        finish_hour: " ",
        nb_participant: 2,
        equipement: " ",
        price: 1,
        picture: " ",

        organizer_id: 1,

        number: 1,
        street: " ",
        zip_code: " ",
        city: " ",
        sport: " ",
        level: " "
      };
    })

});


export default createEventReducer;

