import React, { useState } from 'react';
import Dropdown from './dropdown.js';

function WarningExample() {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const [selectedOptions, setSelectedOptions] = useState([]);
    const label = 'Select an Option';

    const handleOptionChange = (updatedSelectedOptions) => {
        setSelectedOptions(updatedSelectedOptions);
    };

    return (
        <div>
            <div className="h2">Warning Example</div>
            <Dropdown
                isDisabled={false}
                hasWarning={true} // Set hasWarning to true
                isMultiSelect={false}
                selectedOptions={selectedOptions}
                options={options}
                onOptionChange={handleOptionChange}
                label={label}
            />
        </div>
    );
}

export default WarningExample;
