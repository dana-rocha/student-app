import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Student = (props) => {
    const [isPresent, setIsPresent] = useState(false);

    const togglePresence = () => {
        setIsPresent(!isPresent);
    };

    return (
        <div>
        <ul>
            <li>Nickname: {props.name}</li>
            <li>Email: {props.email}</li>
        </ul>
        <button onClick={togglePresence}>Toggle if {props.name} is present</button>
        </div>
    );
};

Student.propType = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};

export default Student;