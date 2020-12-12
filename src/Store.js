import { createStore,  combineReducers
    // applyMiddleware 
} from "redux";
import middleware from "./Redux/Middleware/middleware";
// import reducer from "./Redux/Reducer/userReducer";
import { reducer as reduxFormReducer } from 'redux-form';
// import {persistStore} from "redux-persist";
// import thunk from "redux-thunk";

// const enhancer = compose(
//     applyMiddleware(thunk, promise),
//     devTools({
//         name: "NativeStarterKit", realtime: true
//     }),
//     );

const reducer = combineReducers({
    form: reduxFormReducer, // mounted under "form"
  });

// const Store = (window.devToolsExtension
//     ? window.devToolsExtension()(createStore)
//     : createStore)(reducer);
const Store = createStore(reducer, middleware);
// persistStore(store, {storage: AsyncStorage}, onCompletion)

export default Store;
