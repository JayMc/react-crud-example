import 'babel-polyfill' // for es6 promise required for fetch
import React from 'react'
import { render } from 'react-dom'
import Post from './containers/Post'
import Authors from './containers/Authors'
import Author from './containers/Author'
import Layout from './containers/Layout'

import ListPosts from './components/ListPosts'
import FormPost from './components/FormPost'
import ViewPost from './components/ViewPost'
import {Router, Route, hashHistory} from 'react-router'

render(
	<Router history={hashHistory}>
  		<Route path="/" component={Layout} > /* main Layout - header, footer, menu etc */
			<Route path="posts" component={Post}>  /* container for getting and sending data for post components */
				<Route path="post/:id" component={ViewPost} /> /* display details of a single post */
				<Route path="new" component={FormPost} /> /* form for creating a new post*/
			</Route>
			<Route path="authors" component={Authors} />
			<Route path="author/:id" component={Author} />
		</Route>
	</Router>,
  document.getElementById('root')
)