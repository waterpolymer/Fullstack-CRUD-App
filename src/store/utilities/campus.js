//ACTION TYPES
const ADD_CAMPUS = "ADD_CAMPUS";
const GET_CAMPUSES = "GET_CAMPUSES";
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
	allCampuses: [],
	currCampus: null
};

//ACTION CREATERS

//Used for ADD_CAMPUS
//No payload b/c we are only using this to add the campus to the array of allCampuses
export const addCampus = campus => {
	dummyCampuses.push(campus);
	return {
		type: ADD_CAMPUS,
		payload: campus
	};
};

//Used for SHOW_CAMPUS action type -- will return payload later on
//campus becomes the payload -- payload = data about campus!
const getCampuses = campsues => {
	return {
		type: GET_CAMPUSES,
		payload: campsues
	};
};

export const removeCampus = campusId => {
	console.log("remove");
	return {
		type: REMOVE_CAMPUS,
		payload: campusId
	};
};

//THUNKS, SKIP FOR NOW CAUSE WE DONT HAVE ANY ASYNCH STUFF YET LOL
export const getCampusesThunk = () => dispatch => {
	const arrayOfCampusesFromAPI = dummyCampuses;
	dispatch(getCampuses(arrayOfCampusesFromAPI));
};

//REDUCER FUNCTIONS
function campusReducer(state = initialState, action) {
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
}

export default campusReducer;
