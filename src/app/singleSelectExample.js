import React, { useState } from 'react';
import Dropdown from './Dropdown';

function SingleSelectExample() {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionChange = (updatedSelectedOptions) => {
        setSelectedOptions(updatedSelectedOptions);
    };

    return (
        <div>
            <Dropdown
                isDisabled={false}
                hasWarning={false}
                isMultiSelect={false}
                selectedOptions={selectedOptions}
                options={options}
                onOptionChange={handleOptionChange}
            />
        </div>
    );
}

export default SingleSelectExample;