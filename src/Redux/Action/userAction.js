// action will go Headers. Ussually this is where my axios call goes
//Action creator (function that returns an action), action, action payload (action type, payload)
//An action is just a payload of information in the form of an object
//Redux Loop : dispatch an action -> action calls reducer -> reducer updates state -> react "reacts" to change in state
//reducer specifies state changes inside of React
//what areguments does createstore take? root reducer, initial state (optional), enhancer(middleware)
// thunk is needed for ascyn actions