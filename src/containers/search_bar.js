import React, { Component } from 'react';
import { connect } from 'react-redux'; // connect è un metodo
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = { term: '' };

		this.onInputChange = this.onInputChange.bind(this);
		// this è un istanza di SearchBar che ha una funzione che si chiama onInputChange
		// binda questa funzione al (this) che è SearchBar - bind(this) -> legalo al this
		// 
		this.onFormSubmit = this.onFormSubmit.bind(this); 
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault(); //Non inviare la form ne con submit ne con enter
		this.props.fetchWeather(this.state.term); //funzione di action creator
		this.setState({ term: '' }); //Clean
	}

	render() {

		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Digita il nome della tua città!"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				 />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

 //state è null ma cmq mapDispatchToProps deve eseere il secondo argomento

export default connect( null, mapDispatchToProps)(SearchBar);