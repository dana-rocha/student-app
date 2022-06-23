import { useState } from 'react';
import PropTypes from 'prop-types';

// NewStudentForm component is responsible for containing a form to add a new student

// New piece of state to hold the form data and input values read from state
// Creating an event handler for each input field
// Each event handler will update state

const NewStudentForm = (props) => {

    const [formFields, setFormFields] = useState({
        name: '',
        email: ''
    });

    // One event handler to read current value inside the input field
    // Another event handler to update state to that current value

    const onNameChange = (event) => {
        setFormFields({
            // Cloning the original formFields object
            // Clone will already have a name and key but the new 
            // value will overwrite the cloned value
            ...formFields,
            name: event.target.value
        })
    };

    const onEmailChange = (event) => {
        setFormFields({
            ...formFields,
            email: event.target.value
        })
    };

    const onFormSubmit = (event) => {
        // onFormSubmit is an event handler, an Event object will be passed in as first param
        event.preventDefault();

        props.addStudentCallback({
            nameData: formFields.name,
            emailData: formFields.email
        });

        setFormFields({
            name: '',
            email: '',
        });
    };

    return (
        <form onSubmit={onFormSubmit}>
            <div>
                <label htmlFor="fullName"> Name: </label>
                <input 
                    name="fullName"
                    value={formFields.name}
                    onChange={onNameChange}/>
            </div>
            <div>
                <label htmlFor="email"> Email: </label>
                <input 
                    name="email"
                    value={formFields.email}
                    onChange={onNameChange}/>
            </div>
            <input
                type="submit"
                value="Add Student"/>
        </form>
    );
};

NewStudentForm.propTypes = {
    addStudentCallback: PropTypes.func.isRequired
};

export default NewStudentForm;