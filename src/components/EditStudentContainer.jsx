import React, { Component } from 'react'
import {connect} from 'react-redux'
import {editStudent, fetchStudent} from './../store/utilities/student'
import EditStudentView from './EditStudentView'

class EditStudent extends Component{
    constructor(props){
        super(props);
        this.state = {
			id: 0,
			firstName: "",
			lastName: "",
			email: "",
			imageUrl: "https://i.stack.imgur.com/l60Hf.png",
			gpa: "",
			campusId: ""
		};
    }
   
    async componentDidMount() {
        const response = await this.props.getStudent(this.props.studentid);
        this.setState({
            id: this.props.currStudent.id,
			firstName: this.props.currStudent.firstName,
			lastName: this.props.currStudent.lastName,
			email: this.props.currStudent.email,
			imageUrl: "https://i.stack.imgur.com/l60Hf.png",
			gpa: this.props.currStudent.gpa,
			campusId: this.props.currStudent.campusId
        })
    }

class 

    handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		let student = {
			id: this.state.id,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			imageUrl: this.state.imageUrl,
			gpa: this.state.gpa,
			campusId: this.state.campusId
        };
        
        this.props.editStudent(student, this.state.id);
        console.log(student);
        console.log(this.props.studentid);
	};

	render() {
		return (
			<div>
                {console.log(this.props.studentid)}
				<EditStudentView
                    id={this.props.studentid}
					firstName={this.state.firstName}
					lastName={this.state.lastName}
					campusName={this.state.campusName}
					email={this.state.email}
					imageUrl={this.state.imageUrl}
					gpa={this.state.gpa}
					campusId={this.state.campusId}
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
				/>
			</div>
		);
	}
}

const mapState = state => {
	return {
        studentid: parseInt(window.location.pathname.split("/")[2]),
        currStudent: state.studentReducer.currStudent
	};
};

const mapDispatch = dispatch => {
	return {
        editStudent: (student, studentid) => dispatch(editStudent(student, studentid)),
        getStudent: id => dispatch(fetchStudent(id))
	};
};

export default connect(mapState, mapDispatch)(EditStudent);
