import {
	GET_CAMPUSES,
	ADD_CAMPUS,
	REMOVE_CAMPUS
} from "../actions/actionTypes";

const initialState = {
	allCampuses: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_CAMPUSES:
			return {
				...state,
				allCampuses: action.payload
			};
		case ADD_CAMPUS:
			return {
				...state,
				allCampuses: [...state.allCampuses, action.payload]
			};
		case REMOVE_CAMPUS:
			return {
				...state,
				allCampuses: state.allCampuses.filter(
					campus => campus.id !== action.payload
				)
			};
		default:
			return state;
	}
};
