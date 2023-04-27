import { createSlice } from '@reduxjs/toolkit'

const initialState = {
items:[],
totalAmount:0,
showCart:false
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add:(state,actions)=>{
        state.items.push(actions.payload)
        state.totalAmount+=+actions.payload.price
    },
    remove:(state,actions)=>{
        state.items=state.items.filter(item=>item.id!==actions.payload.id)
    },
    showCart:(state)=>{
      state.showCart=true
    },
    hideCart:(state)=>{
      state.showCart=false
    },
  }
});

export const cartActions= CartSlice.actions

export default CartSlice.reducer