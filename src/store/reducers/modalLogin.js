import { createReducer, createAction } from '@reduxjs/toolkit';

export const initialState = {
  modalOpen: false,
};

export const openModal = createAction('modalLogin/openModal');
export const closeModal = createAction('modalLogin/closeModal');


const modalLoginReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(openModal, (state) => {
      state.modalOpen = true;
    })
    .addCase(closeModal, (state) => {
      state.modalOpen = false;
    })

});

export default modalLoginReducer;
