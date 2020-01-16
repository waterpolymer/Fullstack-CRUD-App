import {
	ADD_CAMPUS,
	REMOVE_CAMPUS,
	GET_CAMPUSES,
	GET_CAMPUS,
	EDIT_CAMPUS
} from "./actionTypes";

import axios from "axios";

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

// Actions
const getCampuses = campuses => {
	return {
		type: GET_CAMPUSES,
		payload: campuses
	};
};

const getCampus = campus => {
	return {
		type: GET_CAMPUS,
		payload: campus
	};
};

export const addCampus = campus => {
	dummyCampuses.push(campus);
	return {
		type: ADD_CAMPUS,
		payload: campus
	};
};

export const editCampus = (campus, campusId) => {
	const oldCampus = dummyCampuses.find(s => s.id === campusId);
	const oldCampusIndex = dummyCampuses.indexOf(oldCampus);
	dummyCampuses[oldCampusIndex] = campus;
	return {
		type: EDIT_CAMPUS,
		payload: campus,
		campusId: campusId
	};
};

export const removeCampus = campusId => {
	const oldCampus = dummyCampuses.find(s => s.id === campusId);
	const oldCampusIndex = dummyCampuses.indexOf(oldCampus);
	dummyCampuses.splice(oldCampusIndex, 1);
	return {
		type: REMOVE_CAMPUS,
		payload: campusId
	};
};

// Thunks
export const getCampusesThunk = () => async dispatch => {
	const res = await axios.get("/api/campuses");
	dispatch(getCampuses(res.data));
};

export const getCampusThunk = campusId => async dispatch => {
	const res = await axios.get(`/api/campuses/${campusId}`);
	dispatch(getCampus(res.data));
};
