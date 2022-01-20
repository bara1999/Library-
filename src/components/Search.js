import React, { useState } from 'react';

const Search = (props) => {
    const [value, setValue] = useState("");
    const handleSubmit = () => {
        if (props.onSubmit) {
            props.onSubmit(value);
            console.log(value)
           
        }
    }
    return (
        <div className="form">
            <input
                placeholder="Enter Search Query"
                value={value}
                onChange={(e) =>{ setValue(e.target.value);
                    handleSubmit()
                }}
                onKeyUp={(e) => e.key === "Enter" && handleSubmit()}       
            />
           
        </div>
    )
}

export default Search
