import {
	GET_STUDENTS,
	ADD_STUDENT,
	REMOVE_STUDENT,
	GET_STUDENT
} from "../actions/actionTypes";

const initialState = {
	allStudents: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_STUDENTS:
			return {
				...state,
				allStudents: action.payload
			};
		case ADD_STUDENT:
			return {
				...state,
				allStudents: [...state.allStudents, action.payload]
			};
		case GET_STUDENT:
			return {
				...state,
				currStudent: action.payload
			};
		case REMOVE_STUDENT:
			return {
				...state,
				allStudents: state.allStudents.filter(
					student => student.id !== action.payload
				)
			};
		default:
			return state;
	}
};
