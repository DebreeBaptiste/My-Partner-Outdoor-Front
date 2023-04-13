import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  event: [{
    id: 2,
    title: "Event de BasketBall",
    description: "Faire un Basket",
    start: "2023-04-01T10:00:44.880Z",
    finish: "2023-04-01T15:00:44.880Z",
    nb_participant: 2,
    equipement: "",
    price: "0.00",
    picture: "/images/basket",
    organizer_id: 2,
    sport_id: 3,
    level_id: 1,
    address_id: 2,
    number: 24,
    street: "rue des fleurs",
    zip_code: "73045",
    city: "Vrellis",
    pseudo: "JDo",
    sport: "BasketBall",
    level: "Débutant"
  }],
};


export const getRandomEvents = createAction('event/getRandomEvents');


const eventReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getRandomEvents, (state, action) => {
      
      state.event = action.payload;
    })

});

export default eventReducer;