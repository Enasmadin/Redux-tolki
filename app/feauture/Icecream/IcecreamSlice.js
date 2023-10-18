const createSlice = require("@reduxjs/toolkit").createSlice;
const { CackeAction } = require("../cacke/CackeSlice");

const initialState = {
  numberOfIcKream: 19,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    orderd: (state) => {
      state.numberOfIcKream--;
    },
    restocked: (state, action) => {
      state.numberOfIcKream += action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(CackeAction.orderd, (state) => {
  //     state.numberOfIcKream--;
  //   });
  // },
  extraReducers:{
    ["Cacke/orderd"]:(state)=>{
      state.numberOfIcKream--;
    }
  }
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;