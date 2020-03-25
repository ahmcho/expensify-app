import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({  id, description, amount, createdAt,note }) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>Description: {description}</h3>
		</Link>
		<p>Amount: {amount} </p>
		<p>Created at: {createdAt} </p>
		<p>Note: {note}</p>

	</div>
);

export default ExpenseListItem;