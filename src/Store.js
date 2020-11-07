import { createStore,  
    // applyMiddleware
 } from "redux";
import middleware from "./Redux/Middleware/middleware";
import reducer from "./Redux/Reducer/userReducer";
// import {persistStore} from "redux-persist";
// import thunk from "redux-thunk";

// const enhancer = compose(
//     applyMiddleware(thunk, promise),
//     devTools({
//         name: "NativeStarterKit", realtime: true
//     }),
//     );

const Store = createStore(reducer, middleware);
// const Store = createStore(reducer, enhancer);
// persistStore(store, {storage: AsyncStorage}, onCompletion)

return Store;
