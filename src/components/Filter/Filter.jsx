import React from "react";
import { useDispatch } from 'react-redux';
import { addFilter } from "components/redux/filterSlice";


const Filter = () => {
    const dispatch = useDispatch();
    const handleChange = event => {
        event.preventDefault();
        const name = event.target.value;
        dispatch(addFilter(name));
    }
    
    return (
        <div>
            <label>Find contacts by name: </label>
            <input
                type="text"
                autoComplete="off"
                onChange={handleChange}
                name="name"
            />
        </div>
    );
};
export default Filter;


