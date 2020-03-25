import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpencePage } from '../../components/EditExpencePage';

let editExpense, removeExpense, history, wrapper;
beforeEach( () => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push : jest.fn() };
    wrapper = shallow(
        <EditExpencePage 
            editExpense={editExpense}
            removeExpense={removeExpense}
            history={history}
            expense={expenses[2]}
        />);
})

test('Should render ExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
})

test('Should handle EditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
})

test('Should handle RemoveExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id
    });
})