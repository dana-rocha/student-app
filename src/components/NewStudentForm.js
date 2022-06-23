import { useState } from 'react';

// New piece of state to hold the form data and input values read from state
// Creating an event handler for each input field
// Each event handler will update state

const NewStudentForm = () => {

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

    return (
        <form>
            <div>
                <label htmlFor="fullName"> Name: </label>
                <input 
                    name="fullName"
                    value={formFields.name}/>
            </div>
            <div>
                <label htmlFor="email"> Email: </label>
                <input 
                    name="email"
                    value={formFields.email}/>
            </div>
            <input
                type="submit"
                value="Add Student" 
            />
        </form>
    );
};

export default NewStudentForm;