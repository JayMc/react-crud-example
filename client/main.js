import 'babel-polyfill' // for es6 promise required for fetch
import React from 'react'
import { render } from 'react-dom'
import Post from './containers/Post'
import Author from './containers/Author'
import Layout from './containers/Layout'

import ListPosts from './components/ListPosts'
import FormPost from './components/FormPost'
import ViewPost from './components/ViewPost'
import {Router, Route, hashHistory} from 'react-router'

render(
	<Router history={hashHistory}>
  		<Route path="/" component={Layout} >
			<Route path="posts" component={Post}>
				<Route path="post/:id" component={ViewPost} />
				<Route path="new" component={FormPost} />
			</Route>
			<Route path="authors" component={Author} />
		</Route>
	</Router>,
  document.getElementById('root')
)