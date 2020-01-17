import {
	GET_CAMPUSES,
	ADD_CAMPUS,
	REMOVE_CAMPUS,
	EDIT_CAMPUS,
	GET_CAMPUS
} from "../actions/actionTypes";

const initialState = {
	allCampuses: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_CAMPUSES:
			return {
				...state,
				allCampuses: action.payload,
				currCampus: null
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
				),
				currCampus: null
			};
		case EDIT_CAMPUS:
			return {
				...state,
				allCampuses: state.allCampuses.map((item, index) => {
					if (item.id === action.campusId) {
						return action.payload;
					}
					return item;
				}),
				currCampus: action.payload
			};
		case GET_CAMPUS:
			return {
				...state,
				currCampus: action.payload
			};
		default:
			return state;
	}
};
