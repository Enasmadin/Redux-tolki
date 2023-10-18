const configureStore = require("@reduxjs/toolkit").configureStore;
const { getDefaultMiddleware } = require("@reduxjs/toolkit");
const cackeReducer= require("./feauture/cacke/CackeSlice");
const iccreanReducer = require("./feauture/Icecream/IcecreamSlice");
// const ReduxLogger = require("redux-logger");
// const logger = ReduxLogger.createLogger();

const store = configureStore({
    reducer:{
        cacke:cackeReducer,
        icecream:iccreanReducer
    },
    // middleware:(getDefaultMiddle)=>getDefaultMiddle().concat(logger)
})


module.exports = store;