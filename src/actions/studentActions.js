import {
	GET_STUDENTS,
	ADD_STUDENT,
	EDIT_STUDENT,
	REMOVE_STUDENT,
	GET_STUDENT
} from "./actionTypes";

import axios from "axios";

// Action creator
const getStudents = students => {
	return {
		type: GET_STUDENTS,
		payload: students
	};
};

const getStudent = student => {
	return {
		type: GET_STUDENT,
		payload: student
	};
};

const addStudent = student => {
	return {
		type: ADD_STUDENT,
		payload: student
	};
};

const editStudent = (student, studentId) => {
	return {
		type: EDIT_STUDENT,
		payload: student,
		studentId: studentId
	};
};

const removeStudent = studentId => {
	return {
		type: REMOVE_STUDENT,
		payload: studentId
	};
};

// Thunks
export const getStudentsThunk = () => async dispatch => {
	try {
		const res = await axios.get("/api/students");
		dispatch(getStudents(res.data));
	} catch (err) {
		console.log(err);
	}
};

export const getStudentThunk = studentId => async dispatch => {
	try {
		const res = await axios.get(`/api/students/${studentId}`);
		dispatch(getStudent(res.data));
	} catch (err) {
		console.log(err);
	}
};

export const addStudentThunk = student => async dispatch => {
	try {
		await axios.post("/api/students", student);
		dispatch(addStudent(student));
	} catch (err) {
		console.log(err);
	}
};

export const editStudentThunk = (student, studentId) => async dispatch => {
	try {
		const res = await axios.put(`/api/students/${studentId}`, student);
		dispatch(editStudent(res.data));
	} catch (err) {
		console.log(err);
	}
};

export const removeStudentThunk = studentId => async dispatch => {
	try {
		await axios.delete(`/api/students/${studentId}`);
		dispatch(removeStudent(studentId));
	} catch (err) {
		console.log(err);
	}
};
