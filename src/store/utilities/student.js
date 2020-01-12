//ACTION TYPES
const ADD_STUDENT = "ADD_STUDENT";
const SHOW_STUDENT = "SHOW_STUDENT";

//ACTION CREATERS

//Used for ADD_STUDENT
//No payload b/c we are only using this to add the student to the array of allStudents
export const addStudent = student => {
  return {
    type: ADD_STUDENT
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
function studentReducer(state = {}, action) {
  switch (action.type) {
    case SHOW_STUDENT:
      return action.payload;
    case ADD_STUDENT:
      return {};
    default:
      return state;
  }
}

export default studentReducer;
