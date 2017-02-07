import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) { //NUOVO REDUCER PER GESTIRE L'ACTION FETCH_WEATHER
	switch (action.type) {
	case 'FETCH_WEATHER':
		return [ action.payload.data, ...state ]; // creazione array con elenco città [ city, city, city ] fusione di dati da chiamata + dati esistenti

	}
	return state;
}