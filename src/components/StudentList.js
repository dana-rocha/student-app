import React from 'react';
import './StudentList.css'
import Student from './Student';

const StudentList = () => {
    return (
        <section>
            <h2 className='student-list__heading'>Student List</h2>
            <ul className='student-list'>
                <li><Student></Student></li>
                <li><Student></Student></li>
                <li><Student></Student></li>
            </ul>
        </section>
    );
};

export default StudentList;