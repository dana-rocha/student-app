import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Student = (props) => {
    const [isPresent, setIsPresent] = useState(false);

    return (
        <div>
        <ul>
            <li>Nickname: {props.name}</li>
            <li>Email: {props.email}</li>
        </ul>
        <button>Toggle if {props.name} is present</button>
        </div>
    );
};

Student.propType = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};

export default Student;