import { useState } from 'react';

const useFrom = (callback) => {
    const [values, setValues] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        callback(values);
        setValues({})
        
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleInput = {
        onChange: (e) => {
            setValues({ ...values, [e.target.name]: e.target.value })
        }
    }

    return [
        handleSubmit,
        handleChange,
        handleInput,
        values
    ];
}

export default useFrom;
