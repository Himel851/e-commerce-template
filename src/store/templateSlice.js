"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeTemplate: "template2",
};

const templateSlice = createSlice({
    name: "template",
    initialState,
    reducers: {
        setTemplate(state, action) {
            state.activeTemplate = action.payload;
        },
    },
});

export const { setTemplate } = templateSlice.actions;
export default templateSlice.reducer;
