const ADD_CAMPUS = "ADD_CAMPUS";
const SET_CAMPUSES = "SET_CAMPUSES";
const REMOVE_CAMPUS = "REMOVE_CAMPUS";

const dummyCampuses = [
	{
		id: 1,
		name: "campus1",
		email: "campus1@yahoo.com",
		imageUrl:
			"https://s3.amazonaws.com/freestock-prod/450/freestock_565622158.jpg",
		campusId: 1
	},
	{
		id: 2,
		name: "campus2",
		email: "campus2@yahoo.com",
		imageUrl:
			"https://s3.amazonaws.com/freestock-prod/450/freestock_565622158.jpg",
		campusId: 2
	}
];

const initialState = {
	allCampuses: []
};

//ACTION CREATERS

export const addCampus = campus => {
	return {
		/*
    type: ADD_STUDENT,
    allStudents: [...state.allStudents, student]
    */
		type: ADD_CAMPUS,
		payload: campus
	};
};

const setCampuses = campuses => {
	return {
		type: SET_CAMPUSES,
		payload: campuses
	};
};

export const removeCampus = campusId => {
	return {
		type: REMOVE_CAMPUS,
		payload: campusId
	};
};

//THUNKS, SKIP FOR NOW CAUSE WE DONT HAVE ANY ASYNCH STUFF YET LOL
export const fetchCampusesThunk = () => dispatch => {
	const arrayOfCampusesFromAPI = dummyCampuses;

	dispatch(setCampuses(arrayOfCampusesFromAPI));
};

//REDUCER FUNCTIONS
function campusReducer(state = initialState, action) {
	switch (action.type) {
		case SET_CAMPUSES:
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
}

export default campusReducer;
