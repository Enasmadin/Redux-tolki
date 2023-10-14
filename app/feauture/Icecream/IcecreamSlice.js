const createSlice = require("@reduxjs/toolkit").createSlice;


const initialState = {
    numberOfIcKream: 30,
  };
const icecreamSlice = createSlice({
   name:"icecream" ,
   initialState,
   reducers:{
    orderd:(state)=>{
     state.numberOfIcKream--;
    },
    restocked:(state,action)=>{
     state.numberOfIcKream += action.payload
    }
   }
})

module.exports  = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions