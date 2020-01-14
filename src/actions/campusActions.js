import { ADD_CAMPUS, REMOVE_CAMPUS, GET_CAMPUSES } from "./actionTypes";

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

const getCampuses = campuses => {
	return {
		type: GET_CAMPUSES,
		payload: campuses
	};
};

export const addCampus = campus => {
	dummyCampuses.push(campus);
	return {
		type: ADD_CAMPUS,
		payload: campus
	};
};

export const removeCampus = campusId => {
	return {
		type: REMOVE_CAMPUS,
		payload: campusId
	};
};

export const getCampusesThunk = () => dispatch => {
	const arrayOfCampusesFromAPI = dummyCampuses;
	dispatch(getCampuses(arrayOfCampusesFromAPI));
};
