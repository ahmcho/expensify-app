import {v4 as uuidv4} from 'uuid';
import db from '../firebase/firebase';
import { database } from 'firebase';
//ADD_EXPENSE
export const addExpense = (expense) => ({
	type: 'ADD_EXPENSE',
	expense
})

export const startAddExpense = (expenseData = {}) => {
	return (dispatch) => {
		const {
			description = '',
			note = '',
			amount = 0,
			createdAt = 0
		} = expenseData;
		const expense  = { description, note, amount, createdAt };
		return db.ref('expenses').push(expense).then((ref) => {
			dispatch(addExpense({
				id: ref.key,
				...expense
			}))
		});
	}
}

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => (
	{	
		type: 'REMOVE_EXPENSE',
		id	
	}
);

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});

//SET_EXPENSES
export const setExpenses = (expenses) => ({
	type: 'SET_EXPENSES',
	expenses
});

export const startSetExpenses = () => {
	return (dispatch) => {
		return db.ref('expenses').once('value').then((snapshot) => {
			let expenses = [];

			snapshot.forEach( (childSnapshot) => {
				expenses.push({
					id: childSnapshot.key,
					...childSnapshot.val()
				})
			});

			dispatch(setExpenses(expenses));
		})
	}
};

export const startRemoveExpense = ({id}={}) => {
	return (dispatch) => {
		return db.ref(`expenses/${id}`).remove().then( () => {
			dispatch(removeExpense({ id }));
		})
	}
};