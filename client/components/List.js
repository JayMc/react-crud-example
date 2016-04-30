import React from 'react'

export default React.createClass({
	render(){
		const ListItems = this.props.data.map(function(item){
			return (
				<li key={item.id} >{item.name}</li>
			)
		})

		return (
			<ul>
				{ListItems}
			</ul>
		)
	}
})