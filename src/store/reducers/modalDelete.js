import { createReducer, createAction } from '@reduxjs/toolkit';

export const initialState = {
  modalOpen: false,
};

export const openModal = createAction('modalDelete/openModal');
export const closeModal = createAction('modalDelete/closeModal');


const modalDeleteReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(openModal, (state) => {
      state.modalOpen = true;
    })
    .addCase(closeModal, (state) => {
      state.modalOpen = false;
    })

});

export default modalDeleteReducer;
