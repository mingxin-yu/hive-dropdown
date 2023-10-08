import React, { useState } from 'react';
import Dropdown from './Dropdown';

function MultiSelectExample() {
    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionChange = (updatedSelectedOptions) => {
        setSelectedOptions(updatedSelectedOptions);
    };

    return (
        <div>
            <Dropdown
                isDisabled={false}
                hasWarning={false}
                isMultiSelect={true}
                selectedOptions={selectedOptions}
                options={options}
                onOptionChange={handleOptionChange}
            />
        </div>
    );
}

export default MultiSelectExample;