import React, { useState } from 'react';
import Dropdown from './Dropdown';

function LotsOptionsExample() {
    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8', 'Option 9', 'Option 10'];
    const [selectedOptions, setSelectedOptions] = useState([]);
    const label = 'Lots of options';

    const handleOptionChange = (updatedSelectedOptions) => {
        setSelectedOptions(updatedSelectedOptions);
    };

    return (
        <div>
            <div className="h2">10 options dropdown scrolling demo</div>
            <Dropdown
                isDisabled={false}
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

export default LotsOptionsExample;