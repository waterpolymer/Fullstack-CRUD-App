import React from 'react'
import LinkButton from './LinkButton'

const AddStudentView = (props) => {
    const {firstName, lastName, email, imageUrl, gpa, campusId, handleSubmit, handleChange} = props;

    return(
        <div>
            <h1>Add Student</h1>
            <LinkButton to="/"> Home </LinkButton>
            <form style={{
                display: 'flex',
                flexDirection: "column",
            }} onSubmit={handleSubmit}>
                <div> first name:<input name="firstName" type="text" value={firstName} onChange={handleChange}/> </div>
                <div> last name: <input name="lastName" type="text" value={lastName} onChange={handleChange}/> </div>
                <div> email: <input name="email" type="email" value={email} onChange={handleChange} /></div>
                <div> image url: <input name="imageUrl" type="text" value="https://i.stack.imgur.com/l60Hf.png" onChange={handleChange} /></div>
                <div> gpa: <input name="gpa" type="text" value={gpa} onChange={handleChange} /></div>
                <div> campus Id: <input name="campusId" type="text" value={campusId} onChange={handleChange}/></div>
                <div> <input type="submit" value="submit"/></div>
            </form>
        </div>
    );
}

/*
	{
		id: 1,
		firstName: "bob",
		lastName: "jones",
		email: "bobbyboy1234@yahoo.com",
		imageUrl: "https://i.stack.imgur.com/l60Hf.png",
		gpa: 3.7,
		campusId: 1
	},

*/

export default AddStudentView;