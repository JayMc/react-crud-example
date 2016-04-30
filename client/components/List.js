import React from 'react'
import ListItem from './ListItem'

export default React.createClass({
	render(){
		self = this
		const ListItems = this.props.data.map(function(item){
			return (
				<ListItem key={item.id} listItemPath={self.props.listItemPath} data={item} />
			)
		})

		return (
			<ul>
				{ListItems}
			</ul>
		)
	}
})