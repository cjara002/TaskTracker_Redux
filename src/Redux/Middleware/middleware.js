import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const logger = (Store) => (next) => (action) => {
    console.log("action fired middleware:", action);
    next(action);
}

const error = (Store) => (next) => (action) => {
    try {
        next(action);
    }
    catch (e) {
        console.log("action not completed middleware:", e)
    }
}

const middleware = applyMiddleware(thunk, logger, error);

export default middleware;