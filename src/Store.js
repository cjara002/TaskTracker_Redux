import {
  createStore,
  combineReducers,
  // applyMiddleware,
  // compose,
} from "redux";
import middleware from "./Redux/Middleware/middleware";
// import reducer from "./Redux/Reducer/userReducer";
import { reducer as reduxFormReducer } from "redux-form";
// import { persistStore } from "redux-persist";
// import {persistStore, persistReducer} from "redux-persist";
// import thunk from "redux-thunk";
// import storage from "redux-persist/lib/storage";
// import rootReducer from "./Redux/Reducer/userReducer";

// const persistConfig = {
//   key: "root",
//   storage
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const enhancer = compose(
//   middleware,
//   devTools({
//     name: "NativeStarterKit",
//     realtime: true,
//   })
// );

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
});

// const Store = (window.devToolsExtension
//     ? window.devToolsExtension()(createStore)
//     : createStore)(reducer);
const Store = createStore(reducer, middleware);
// persistStore(Store, { storage: AsyncStorage }, onCompletion);

export default Store;

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return {store, persistor}
// }
