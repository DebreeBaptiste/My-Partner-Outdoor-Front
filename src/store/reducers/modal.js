import { createReducer, createAction } from '@reduxjs/toolkit';

export const initialState = {
  modalOpen: false,
};

export const openModal = createAction('modal/openModal');
export const closeModal = createAction('modal/closeModal');


const modalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(openModal, (state) => {
      state.modalOpen = true;
    })
    .addCase(closeModal, (state) => {
      state.modalOpen = false;
    })

});

export default modalReducer;
