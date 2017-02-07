import axios from 'axios'; //LIBRERIA RICHIESTE AJAX

const API_KEY = '115f9985d5839d8e992d59d91a5d5b1f'; //API KEY
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; // API URL

export const FETCH_WEATHER = 'FETCH_WEATHER'; //ESPORTO VARIABILE PER CONVENZIONE PER NON SBAGLIARE NEL COPIA INCOLLA

export function fetchWeather(city) { //ACTION RESPONSABILE PER IL RECUPERO DATI API

	const url = `${ROOT_URL}&q=${city},it`; // URL DELLA GET
	const request = axios.get(url); // GET

	return {
		type: FETCH_WEATHER, //SEMPRE PRESENTE
		payload: request // PASSO LA REQUEST (GET) NELLA ACTION
		// PAYLOAD - OPTION DELLA ACTION CHE CONTIENE SPECIFICI DETTAGLI PER LA ACTION
	};
}

