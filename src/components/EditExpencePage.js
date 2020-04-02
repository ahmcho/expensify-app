import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import DeleteModal from './DeleteModal';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpencePage extends React.Component{
	state = {
		isModalOpen: undefined
	}
	onSubmit = (expense)=>{
		this.props.startEditExpense(this.props.expense.id, expense);
		this.props.history.push('/');
		console.log('updated!', expense);
	}
	onRemove = () => {
		this.setState( () => ({ isModalOpen: true }));
	}
	handleDeleteSelectedOption = (e) => { 
		this.setState( () => ({ isModalOpen: undefined}) )
	}
	handleCloseAndDelete = () => {
		this.setState( () => ({ isModalOpen: true }));
		this.props.startRemoveExpense({id: this.props.expense.id});
		this.props.history.push('/');
	}
	handleCloseModalAndNotDelete = () => {
		this.setState( () => ({ isModalOpen: undefined	}));
	}
	render(){
		return(
			<div>
				<div className="page-header">
					<div className="content-container">
						<h1 className="page-header__title">Edit Expense</h1>
					</div>
				</div>
				<div className="content-container">
					<ExpenseForm
						expense={this.props.expense} 
						onSubmit={this.onSubmit}
					/>
					<button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
				</div>
				<DeleteModal 
					isModalOpen={this.state.isModalOpen}
					handleDeleteSelectedOption={this.handleDeleteSelectedOption}
					handleCloseAndDelete={this.handleCloseAndDelete}
					handleCloseModalAndNotDelete={this.handleCloseModalAndNotDelete}
				/>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch,props) => ({
	startEditExpense: (id, expense) => dispatch(startEditExpense(id,expense)),
	startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
})

const mapStateToProps = (state, props) => ({ expense: state.expenses.find((expense)=> expense.id === props.match.params.id) });

export default connect(mapStateToProps,mapDispatchToProps)(EditExpencePage);