import {
	GET_STUDENTS,
	ADD_STUDENT,
	EDIT_STUDENT,
	REMOVE_STUDENT,
	GET_STUDENT
} from "./actionTypes";

import axios from "axios";

const dummyStudents = [
	{
		id: 1,
		firstName: "bob",
		lastName: "jones",
		email: "bobbyboy1234@yahoo.com",
		imageUrl: "https://i.stack.imgur.com/l60Hf.png",
		gpa: 3.7,
		campusId: 1
	},
	{
		id: 2,
		firstName: "bob2",
		lastName: "jones",
		email: "bobbyboy1234@yahoo.com",
		imageUrl: "https://i.stack.imgur.com/l60Hf.png",
		gpa: 3.7,
		campusId: 1
	},
	{
		id: 3,
		firstName: "bob3",
		lastName: "jones",
		email: "bobbyboy1234@yahoo.com",
		imageUrl: "https://i.stack.imgur.com/l60Hf.png",
		gpa: 3.7,
		campusId: 2
	},
	{
		id: 4,
		firstName: "bob4",
		lastName: "jones",
		email: "bobbyboy1234@yahoo.com",
		imageUrl: "https://i.stack.imgur.com/l60Hf.png",
		gpa: 3.7,
		campusId: 2
	}
];

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

export const addStudent = student => {
	dummyStudents.push(student);
	return {
		type: ADD_STUDENT,
		payload: student
	};
};

export const editStudent = (student, studentId) => {
	const oldStudent = dummyStudents.find(s => s.id === studentId);
	const oldStudentIndex = dummyStudents.indexOf(oldStudent);
	dummyStudents[oldStudentIndex] = student;
	return {
		type: EDIT_STUDENT,
		payload: student,
		studentId: studentId
	};
};

export const removeStudent = studentId => {
	const oldStudent = dummyStudents.find(s => s.id === studentId);
	const oldStudentIndex = dummyStudents.indexOf(oldStudent);
	dummyStudents.splice(oldStudentIndex, 1);
	return {
		type: REMOVE_STUDENT,
		payload: studentId
	};
};

export const getStudentsThunk = () => async dispatch => {
	const res = await axios.get("/api/students");
	dispatch(getStudents(res.data));
};

export const getStudentThunk = studentId => dispatch => {
	const student = dummyStudents.filter(item => item.id === studentId)[0];
	dispatch(getStudent(student));
};
