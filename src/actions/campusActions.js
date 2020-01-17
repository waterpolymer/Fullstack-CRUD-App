import {
	ADD_CAMPUS,
	REMOVE_CAMPUS,
	GET_CAMPUSES,
	GET_CAMPUS,
	EDIT_CAMPUS
} from "./actionTypes";

import axios from "axios";

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

const addCampus = campus => {
	return {
		type: ADD_CAMPUS,
		payload: campus
	};
};

const editCampus = (campus, campusId) => {
	return {
		type: EDIT_CAMPUS,
		payload: campus,
		campusId: campusId
	};
};

const removeCampus = campusId => {
	return {
		type: REMOVE_CAMPUS,
		payload: campusId
	};
};

// Thunks
export const getCampusesThunk = () => async dispatch => {
	try {
		const res = await axios.get("/api/campuses");
		dispatch(getCampuses(res.data));
	} catch (err) {
		console.log(err);
	}
};

export const getCampusThunk = campusId => async dispatch => {
	try {
		const res = await axios.get(`/api/campuses/${campusId}`);
		dispatch(getCampus(res.data));
	} catch (err) {
		console.log(err);
	}
};

export const addCampusThunk = campus => async dispatch => {
	try {
		const res = await axios.post("/api/campuses", campus);
		dispatch(addCampus(res.data));
	} catch (err) {
		console.log(err);
	}
};

export const editCampusThunk = (campus, campusId) => async dispatch => {
	try {
		const res = await axios.put(`/api/campuses/${campusId}`, campus);
		dispatch(editCampus(res.data));
	} catch (err) {
		console.log(err);
	}
};

export const removeCampusThunk = campusId => async dispatch => {
	try {
		await axios.delete(`/api/campuses/${campusId}`);
		dispatch(removeCampus(campusId));
	} catch (err) {
		console.log(err);
	}
};
