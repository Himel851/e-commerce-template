"use client";

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import templateReducer from "./templateSlice";

export const store = configureStore({
    reducer: {
        template: templateReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
