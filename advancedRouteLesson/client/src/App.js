import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import {Header, StreamCreate, StreamDelete, StreamList, StreamShow, StreamShowDetail} from './components'

const App = () => {
  return (
		<div>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/" exact component={StreamList} />
					<Route path="/stream/show" component={StreamShow} />
					<Route path="/stream/show/detail" component={StreamShowDetail} />
					<Route path="/stream/edit" component={StreamShow} />
					<Route path="/stream/delete" component={StreamDelete} />
					<Route path="/stream/create" component={StreamCreate} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App
