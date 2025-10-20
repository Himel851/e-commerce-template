"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TemplateName = "template1" | "template2";

export interface TemplateState {
  activeTemplate: TemplateName;
}

const initialState: TemplateState = {
  activeTemplate: "template2",
};

const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    setTemplate(state, action: PayloadAction<TemplateName>) {
      state.activeTemplate = action.payload;
    },
  },
});

export const { setTemplate } = templateSlice.actions;
export default templateSlice.reducer;

