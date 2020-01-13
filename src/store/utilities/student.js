//ACTION TYPES
const ADD_STUDENT = "ADD_STUDENT";
const SET_STUDENTS = "SET_STUDENTS";

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
	},
	{
		id: 5,
		firstName: "bob5",
		lastName: "jones",
		email: "bobbyboy1234@yahoo.com",
		imageUrl: "https://i.stack.imgur.com/l60Hf.png",
		gpa: 3.7,
		campusId: 1
	},
	{
		id: 6,
		firstName: "bob6",
		lastName: "jones",
		email: "bobbyboy1234@yahoo.com",
		imageUrl: "https://i.stack.imgur.com/l60Hf.png",
		gpa: 3.7,
		campusId: 1
	},
	{
		id: 7,
		firstName: "bob7",
		lastName: "jones",
		email: "bobbyboy1234@yahoo.com",
		imageUrl: "https://i.stack.imgur.com/l60Hf.png",
		gpa: 3.7,
		campusId: 2
	},
	{
		id: 8,
		firstName: "bob8",
		lastName: "jones",
		email: "bobbyboy1234@yahoo.com",
		imageUrl: "https://i.stack.imgur.com/l60Hf.png",
		gpa: 3.7,
		campusId: 2
	},
	{
		id: 9,
		firstName: "bob9",
		lastName: "jones",
		email: "bobbyboy1234@yahoo.com",
		imageUrl: "https://i.stack.imgur.com/l60Hf.png",
		gpa: 3.7,
		campusId: 1
	},
	{
		id: 10,
		firstName: "bob9",
		lastName: "jones",
		email: "bobbyboy1234@yahoo.com",
		imageUrl: "https://i.stack.imgur.com/l60Hf.png",
		gpa: 3.7,
		campusId: 2
	}
];

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
const setStudents = students => {
	return {
		type: SET_STUDENTS,
		payload: students
	};
};

//THUNKS, SKIP FOR NOW CAUSE WE DONT HAVE ANY ASYNCH STUFF YET LOL
export const fetchStudents = () => dispatch => {
	const arrayOfStudentsFromAPI = dummyStudents;

	dispatch(setStudents(arrayOfStudentsFromAPI));
};

//REDUCER FUNCTIONS
function studentReducer(state = [], action) {
	switch (action.type) {
		case SET_STUDENTS:
			return {
				...state,
				allStudents: action.payload
			};
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
