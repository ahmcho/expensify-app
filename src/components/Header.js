import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
	<header>
		<h1>Expencify</h1>
		<ul>
			<li><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
			<li><NavLink to="/create"  activeClassName="is-active">Create Expense</NavLink></li>
			<li><button onClick={startLogout}>Logout</button></li>
		</ul>
	</header>
)

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);