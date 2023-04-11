import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  event: {
    title: "Event de handball",
    description: "Faire un Basket",
    start: "2023-04-01T10:00:44.880Z",
    finish: "2023-04-01T15:00:44.880Z",
    nb_participant: 2,
    equipement: "dqsfsefefsdfs",
    price: 5,
    picture: "/images/basket",
    organizer_id:3,
    number: 24,
    street: "rue des fleurs",
    zip_code: "73045",
    city: "Vrellis",
    sport: "BasketBall",
    level: "Débutant"
  },
};


export const getRandomEvents = createAction('event/getRandomEvents');
export const saveEvent = createAction('event/saveEvent');
export const changeField = createAction('event/changeField');

const eventReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getRandomEvents, (state, action) => {
      
      state.event = action.payload;
    })
    .addCase(changeField, (state, action) => {
      const { value, name } = action.payload;
      state.event[name] = value;
    })
    .addCase(saveEvent, (state, action) => {
      
      state.event = action.payload;
    })

});

export default eventReducer;