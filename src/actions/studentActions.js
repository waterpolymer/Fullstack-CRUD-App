import {
	GET_STUDENTS,
	ADD_STUDENT,
	REMOVE_STUDENT,
	SET_STUDENT
} from "./actionTypes";

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

export const addStudent = student => {
	dummyStudents.push(student);
	return {
		type: ADD_STUDENT,
		payload: student
	};
};

export const setStudent = student => {
	return {
		type: SET_STUDENT,
		payload: student
	};
};
export const removeStudent = studentId => {
	return {
		type: REMOVE_STUDENT,
		payload: studentId
	};
};

export const getStudentsThunk = () => dispatch => {
	const arrayOfStudentsFromAPI = dummyStudents;
	dispatch(getStudents(arrayOfStudentsFromAPI));
};

export const setStudentThunk = studentId => dispatch => {
	const student = dummyStudents.filter(item => item.id === studentId)[0];
	dispatch(setStudent(student));
};
