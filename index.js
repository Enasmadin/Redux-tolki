const cackeActions = require("./app/feauture/cacke/CackeSlice").CackeAction;
 const icecreamActions= require("./app/feauture/Icecream/IcecreamSlice").icecreamActions;
const store = require("./app/store");
const fetchUsers = require("./app/feauture/user/usersSlice").fetchUsers
console.log("initalstate",store.getState());

const unsubscribe= store.subscribe(()=>
 
{console.log("updatestate",store.getState())}
)

// store.dispatch(cackeActions.orderd())
// store.dispatch(cackeActions.orderd())
// store.dispatch(cackeActions.orderd())
// store.dispatch(cackeActions.orderd())
// store.dispatch(cackeActions.reStocked(6))
// store.dispatch(icecreamActions.orderd())
// store.dispatch(icecreamActions.restocked(6))
store.dispatch(fetchUsers())
store.dispatch(fetchUsers())
store.dispatch(fetchUsers())

