import React from 'react';
import './boardStyles.css'
import Listitem from './ListItem'

const list = (props) => {
	
	let list_items = (
		<div>
			{props.items.map((item, index) => {
				return(
					<Listitem text={item.text}/>
				);
			})}
		</div>
	);

	return(
		<div className="board-container">
			<form onSubmit={props.submit} >
				<input
					value={props.value}
					onChange={props.change}
					autoFocus
					/>
				<input 
					type="submit" 
					className="hidden" 
					/>
			</form>
			{list_items}
		</div>
	)
}

export default list;