import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

	renderWeather(cityData) {
		
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp); // function (weather){ weather.main.temp }
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const {lon, lat} = cityData.city.coord; // const lon = cityData.city.coord.lon; - const lat = cityData.city.coord.lat;

		return (
			<tr key={name}>	
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={temps} color="orange" units="K" /></td>
				<td><Chart data={pressures} color="green" units="hPa" /></td>
				<td><Chart data={humidities} color="red" units="%" /></td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>	
						<th>Città</th>
						<th>Temperatura (K)</th>
						<th>Pressione (hPa)</th>
						<th>Umidità (%)</th>
					</tr>
				</thead>

				<tbody>
					{this.props.weather.map(this.renderWeather)} {/* per ogni elemento nell'array --> map --> richiama la funzione renderWeather */}
				</tbody>
			
			</table>
		);
	}

}


// mapStateToApp rende disponibile lo stato weather come props per questo container
// in ES6 -> ({ weather }) è come scrivere -> const weather = state.weather
function mapStateToProps({ weather }) { 
	return { weather: weather }; // { weather } totalmente uguale a { weather: weather }
}

//connetto il componente con mapStateToProps
export default connect(mapStateToProps)( WeatherList );