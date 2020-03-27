import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import db from '../../firebase/firebase';
import { database } from 'firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expenseData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expenseData[id] = {description, note, amount, createdAt};
    });
    db.ref('expenses').set(expenseData).then(() => done());
});

test('Should set up remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('Should set up edit expense action object', () => {
    const edit = editExpense('123abc', {note: 'Some note data'});
    expect(edit).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'Some note data'
        }
    })
})

test('Should set up add expense action object with provided values', () => {
   const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 10000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        return db.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then( (snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done(); 
    });
})

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        })
        return db.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then( (snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done(); 
    });
})

test('Should set up setExpense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSE',
        expenses
    })
})