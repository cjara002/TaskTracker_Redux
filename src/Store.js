import { createStore } from "redux";
import middleware from "./Redux/Middleware/middleware";
import reducer from "./Redux/Reducer/userReducer";

const Store = createStore(reducer, middleware);

export default Store;
