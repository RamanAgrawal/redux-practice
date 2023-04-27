import { createSlice } from '@reduxjs/toolkit'

const initialState = {
items:[],
totalAmount:0,
showCart:false,
quantity:0
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add:(state,actions)=>{
      const findIndex=state.items.findIndex(item=>item.id===actions.payload.id)
      if(findIndex!==-1){
        console.log(findIndex);
        state.items[findIndex].quantity+=1
      }else{
        state.items.push(actions.payload)
      }
        state.totalAmount+=+actions.payload.price
        state.quantity+=1
    },
    remove:(state,actions)=>{
      const findIndex=state.items.findIndex(item=>item.id===actions.payload.id)
      if(actions.payload.quantity===1){

        state.items=state.items.filter(item=>item.id!==actions.payload.id)
      }else{
        state.items[findIndex].quantity-=1
      }
      state.totalAmount-=+actions.payload.price
        state.quantity-=1
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