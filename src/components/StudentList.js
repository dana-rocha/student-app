import React from 'react';
import './StudentList.css';
import Student from './Student';
import PropTypes from 'prop-types';

const StudentList = (props) => {

    const studentComponents = props.students.map((student) => {
    return (
        <li>
        <Student name={student.nameData} email={student.emailData}></Student>
        </li>
    );
    });

    return (
    <section>
        <h2>Student List</h2>
        <ul> {studentComponents}</ul>
    </section>
    );
};

StudentList.propTypes = {
    students: PropTypes.arrayOf(
    PropTypes.shape({
        nameData: PropTypes.string.isRequired,
        emailData: PropTypes.string.isRequired,
    })
    ),
};

export default StudentList;
