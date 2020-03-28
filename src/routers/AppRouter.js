import React from 'react';
import ReactDOM from 'react-dom';
import ExpenceDashboardPage from '../components/ExpenceDashboardPage';
import AddExpencePage from '../components/AddExpencePage';
import EditExpencePage from '../components/EditExpencePage';
import HelpExpencePage from '../components/HelpExpencePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import { createBrowserHistory } from 'history'
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
export const history = createBrowserHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<Route path="/" component={LoginPage} exact={true}/>
				<PrivateRoute path="/dashboard" component={ExpenceDashboardPage} />
				<PrivateRoute path="/create" component={AddExpencePage} />
				<PrivateRoute path="/edit/:id" component={EditExpencePage} />
				<Route path="/help" component={HelpExpencePage} />
				<Route component={NotFoundPage}/>
			</Switch>
		</div>
	</Router>
)

export default AppRouter;