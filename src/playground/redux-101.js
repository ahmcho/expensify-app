import {createStore} from 'redux';

//Action Generators
const incrementCount = ({incrementBy = 1} = {}) => ({
		type: 'INCREMENT',
		incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
	type: 'DECREMENT',
	decrementBy
})

const setCount = ({count}) => ({
	type: 'SET',
	count
})

const resetCount = () => ({
	type: 'RESET'
})

//Reducers
//1.Reducers are pure functions. 
//2. Never change state or action
let a = 10;
const add  = (b) => {
	return a + b;
}
const contReducer = (state = { count: 0 }, action) =>{
	switch(action.type){
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy
			}
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy
			}
		case 'RESET':
			return {
				count: state.count = 0
			}
		case 'SET':
			return {
				count: action.count
			}
		default:
			return state;
	}
};

const store = createStore(contReducer);

const unsubscribe = store.subscribe(()=>{
	console.log(store.getState());
})


store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10} ));
store.dispatch(setCount({ count:101 }));