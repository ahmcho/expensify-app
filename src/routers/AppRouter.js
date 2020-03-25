import React from 'react';
import ReactDOM from 'react-dom';
import ExpenceDashboardPage from '../components/ExpenceDashboardPage';
import AddExpencePage from '../components/AddExpencePage';
import EditExpencePage from '../components/EditExpencePage';
import HelpExpencePage from '../components/HelpExpencePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={ExpenceDashboardPage} exact={true}/>
				<Route path="/create" component={AddExpencePage} />
				<Route path="/edit/:id" component={EditExpencePage} />
				<Route path="/help" component={HelpExpencePage} />
				<Route component={NotFoundPage}/>
			</Switch>
		</div>
	</BrowserRouter>
)

export default AppRouter;