const initialState = {
  tasks: [],
  task: {
     completed: false, 
     todo: ""
  },
  noTasks: false,
  fetching: false,
  fetched: false,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TASKS_START": {
      return { ...state, fetching: true };
    }

    case "FETCH_TASKS_ERROR": {
      return { ...state, fetching: false, error: action.payload };
    }
    case "RECEIVE_TASKS": {
      state = {
        ...state,
        fetching: true,
        fetched: true,
        tasks: action.payload,
      };
      break;
    }
    default: {
      break;
    }
  }
  return state;
};

export default taskReducer;
