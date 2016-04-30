import React from 'react'
import ListItem from './ListItem'

export default React.createClass({
	render(){
		const ListItems = this.props.data.map( (item) => {
			return (
				<ListItem key={item.id} listItemPath={this.props.listItemPath} data={item} />
			)
		})

		return (
			<ul>
				{ListItems}
			</ul>
		)
	}
})