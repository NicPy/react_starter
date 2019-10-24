import React from 'react';
import List from './List';

const lists = (props) => {
	let board_lists = (
		<React.Fragment>
				{props.lists.map((list, index) => {
						return (
							<List 
								id = {list.id}
								key = {index}
								items= {list.cards}
								submit = {props.submit}
								value = {props.value}
								change = {props.change}
							/>
						)
				})}
		</React.Fragment>
	)

	return (
		<React.Fragment>
			{board_lists}
		</React.Fragment>
	)
}

export default lists;