import React, { useState } from 'react';
import Dropdown from './dropdown.js';

function disableExample() {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const [selectedOptions, setSelectedOptions] = useState([]);
    const label = 'Select an Option'; // Specify the label

    const handleOptionChange = (updatedSelectedOptions) => {
        setSelectedOptions(updatedSelectedOptions);
    };

    return (
        <div>
            <div className="h2">Disabled Example</div>
            <Dropdown
                isDisabled={true} // Set isDisabled to true
                hasWarning={false}
                isMultiSelect={false}
                selectedOptions={selectedOptions}
                options={options}
                onOptionChange={handleOptionChange}
                label={label}
            />
        </div>
    );
}

export default disableExample;
