import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	goToStore(event) {
		event.preventDefault();
		console.log('URL');
		// get text from the box 
		const storeId = this.storeInput.value;
		console.log( this.storeInput );
		// redirect
		this.context.router.transitionTo(`/store/${storeId}`);
	}
	render() {
		return (
			<form className="store-selector" onSubmit={ (e) => this.goToStore(e) }>
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
				<button type="Submit">Visit Store →</button>
			</form>
		)
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;