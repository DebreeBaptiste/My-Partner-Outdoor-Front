import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {

  myEvent: [{
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
    organizer_id : 3,
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

};

export const getEventsWithID = createAction('myEvent/getEventsWithID');


const myEventReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getEventsWithID, (state, action) => {

      state.myEvent = action.payload;
    })

});

export default myEventReducer;
