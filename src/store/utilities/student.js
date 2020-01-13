//ACTION TYPES
const ADD_STUDENT = "ADD_STUDENT";
const SHOW_STUDENT = "SHOW_STUDENT";

const dummyStudents = [
	{
		id: 1,
		firstName: "bob",
		lastName: "jones",
		email: "bobbyboy1234@yahoo.com",
		gpa: 3.7,
		campusId: 1
	},
	{
		id: 2,
		firstName: "bob2",
		lastName: "jones",
		email: "bobbyboy1234@yahoo.com",
		gpa: 3.7,
		campusId: 1
	},
	{
		id: 3,
		firstName: "bob4",
		lastName: "jones",
		email: "bobbyboy1234@yahoo.com",
		gpa: 3.7,
		campusId: 2
	},
	{
		id: 4,
		firstName: "bob4",
		lastName: "jones",
		email: "bobbyboy1234@yahoo.com",
		gpa: 3.7,
		campusId: 2
	}
];

//INITIAL STATE
//allStudents and allCampuses will start off as empty
const initialState = {
	allStudents: dummyStudents
};

//ACTION CREATERS

//Used for ADD_STUDENT
//No payload b/c we are only using this to add the student to the array of allStudents
export const addStudent = student => {
	return {
		/*
    type: ADD_STUDENT,
    allStudents: [...state.allStudents, student]
    */
		type: ADD_STUDENT,
		payload: student
	};
};

//Used for SHOW_STUDENT action type -- will return payload later on
//student becomes the payload -- payload = data about student!
export const fetchStudent = student => {
	return {
		type: SHOW_STUDENT,
		payload: student
	};
};

//THUNKS, SKIP FOR NOW CAUSE WE DONT HAVE ANY ASYNCH STUFF YET LOL

//REDUCER FUNCTIONS
function studentReducer(state = initialState, action) {
	switch (action.type) {
		case SHOW_STUDENT:
			return action.payload;
		case ADD_STUDENT:
			return {
				...state,
				allStudents: [...state.allStudents, action.payload]
			};
		default:
			return state;
	}
}

export default studentReducer;
