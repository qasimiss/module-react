import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "basket",
    initialState: {
        basket: []
    },
    reducers: {
        addProductToBasket(state, action) {
            state.basket.push(action.payload)
        }
    }
})

export const {addProductToBasket} = basketSlice.actions
export default basketSlice.reducer