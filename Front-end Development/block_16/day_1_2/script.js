const INITIAL_STATE = 0; // estado INICIAL

const actionIncrDecreOne = (value) => {
  return {
    type: 'INCREMENT',
    payload: {
      amount: 1,
    }
  }
}



const counterReducer = (state = INITIAL_STATE, action) => {
  // No reducer, recebe como param o ESTADO e a ACTION
  switch(action.type) { // SWITCH no type para ver qual ação tomar
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'INCREMENT_TEN':
      return state + 10;
    default:
      return state;

  }
}
const store = Redux.createStore(counterReducer);
// Cria a store e como parametro recebe os REDUCERS
// Usar o combineReducers({reducer, outroReducer}) quando são varios reducers.


const buttonIncrement = document.querySelector('#increment');
buttonIncrement.addEventListener('click',() => {
  const incrementAction = {
    type: 'INCREMENT',
    payload: {
      amount: 1,
    }
  }
  store.dispatch(incrementAction);
})

const buttonDecrement = document.querySelector('#decrement');
buttonDecrement.addEventListener('click',() => {
  const decrementAction = {
    type: 'DECREMENT',
    payload: {
      amount: 1,
    }
  }
  store.dispatch(decrementAction);
})

const buttonIncrementTen = document.querySelector('#increment-ten');
buttonIncrementTen.addEventListener('click',() => {
  const decrementAction = {
    type: 'INCREMENT_TEN',
    payload: {
      amount: 10,
    }
  }
  store.dispatch(decrementAction);
})

store.subscribe( () => { // Aqui é como se fosse um 'onChange'
  const value = document.querySelector('#value');
  value.innerHTML = store.getState();
});
