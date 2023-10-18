const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numberOfCake: 10,
};


const cakeSlice = createSlice({
  name: "Cacke",
  initialState,
  reducers: {
    orderd: (state) => {
      state.numberOfCake--;
    },
    reStocked: (state, action) => {
      state.numberOfCake += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer ;
module.exports.CackeAction = cakeSlice.actions ;