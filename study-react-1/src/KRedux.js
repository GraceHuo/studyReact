export function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }
  let currentState = undefined;
  let currentListeners = [];
  function getState() {
    return currentState;
  }

  function dispatch(action) {
    currentState = reducer(currentState, action);
    currentListeners.map(listener => listener());
  }

  function subscribe(listener) {
    currentListeners.push(listener);
  }

  dispatch({ type: "@INIT/REDUX" });
  return {
    getState,
    dispatch,
    subscribe
  };
}

export function applyMiddleware(...middlewares) {
  return createStore => (...args) => {
    const store = createStore(...args);
    let dispatch = store.dispatch;
    const middleApi = {
      getState: store.getState,
      dispatch
    };
    // 给middleware参数，比如dispatch
    const middlewaresChain = middlewares.map(middleware =>
      middleware(middleApi)
    );

    dispatch = compose(...middlewaresChain)(dispatch);
    return {
      ...store,
      dispatch
    };
  };
}

function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
