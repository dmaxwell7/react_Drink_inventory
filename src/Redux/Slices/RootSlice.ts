import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        make: "Make",
        price: "Price",
        aged: "Aged",
    },
    reducers:{
        chooseName: (state, action) => { state.name = action.payload},
        chooseMake: (state, action) => { state.make = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseAged: (state, action) => { state.aged = action.payload},
    }
})

export const  reducer = rootSlice.reducer;
export const { chooseName, chooseMake, choosePrice, chooseAged } = rootSlice.actions;


