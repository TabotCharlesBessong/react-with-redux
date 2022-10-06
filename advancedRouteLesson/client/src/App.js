import React from 'react'
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import { Header , StreamList , StreamCreate , StreamShow , StreamDelete , StreamEdit } from './components'

const App = () => {
	return (
		<div>
			<Header />
			<BrowserRouter>
				<Switch>
					<Route path="/"  component={StreamList} />
					<Route path="/stream/new" component={StreamCreate} />
					<Route path="/stream/edit" component={StreamEdit} />
					<Route path="/stream/delete" component={StreamDelete} />
					<Route path="/stream/show" component={StreamShow} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App
