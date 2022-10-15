import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "basket",
    initialState: {
        basket: [],
        countProducts: 0,
        pricesBasket: 0,
        users: {},
    },
    reducers: {
        addProductToBasket(state, action) {
            state.basket.push(action.payload)
            state.pricesBasket = state.basket.reduce( (sum, current) => sum + current.price, 0)
            state.countProducts = state.basket.length
        },
        removeProductFromBasket(state, action) {
            state.basket = state.basket.filter( item => item.idx !== action.payload)
            state.pricesBasket = state.basket.reduce( (sum, current) => sum + current.price, 0)
            state.countProducts = state.basket.length
        },
        // addNewUser(state, key, value) {
        //     state.users[key] = state.users[value]
        // }
    }
})

export const {addProductToBasket, removeProductFromBasket, addNewUser} = basketSlice.actions
export default basketSlice.reducer