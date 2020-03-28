import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpencePage } from '../../components/EditExpencePage';

let startEditExpense, startRemoveExpense, history, wrapper;
beforeEach( () => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push : jest.fn() };
    wrapper = shallow(
        <EditExpencePage 
            startEditExpense={startEditExpense}
            startRemoveExpense={startRemoveExpense}
            history={history}
            expense={expenses[2]}
        />);
})

test('Should render ExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
})

test('Should handle startEditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
})

test('Should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id
    });
})