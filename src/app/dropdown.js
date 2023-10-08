import React, { useState } from 'react';

function Dropdown({ isDisabled, hasWarning, isMultiSelect, selectedOptions, options, onOptionChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    if (!isDisabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionClick = (option) => {
    if (!isDisabled) {
      let updatedSelectedOptions = [...selectedOptions];
      if (isMultiSelect) {
        if (option === 'Select All') {
          // If "Select All" is clicked, select all options
          if (selectedOptions.length === options.length) {
            updatedSelectedOptions = [];
          } else {
            updatedSelectedOptions = options.slice();
          }
        } else if (option === 'Clear All') {
          // If "Clear All" is clicked, clear all selected options
          updatedSelectedOptions = [];
        } else {
          // Toggle the selected state of an option
          if (selectedOptions.includes(option)) {
            updatedSelectedOptions = updatedSelectedOptions.filter((selectedOption) => selectedOption !== option);
          } else {
            updatedSelectedOptions.push(option);
          }
        }
      } else {
        // Single-select behavior: Only one option can be selected
        updatedSelectedOptions = [option];
      }

      onOptionChange(updatedSelectedOptions);
    }
  };

  const headerText = selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Select option(s)';

  const renderOptions = () => {
    return (
        <ul className="dropdown-list">
          {isMultiSelect && selectedOptions.length > 0 && (
              <li
                  key="Clear All"
                  onClick={() => handleOptionClick('Clear All')}
                  className="clear-all"
              >
                Clear All
              </li>
          )}
          {isMultiSelect && (
              <li
                  key="Select All"
                  onClick={() => handleOptionClick('Select All')}
                  className={selectedOptions.length === options.length ? 'selected' : ''}
              >
                Select All
              </li>
          )}
          {options.map((option) => (
              <li
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className={selectedOptions.includes(option) ? 'selected' : ''}
              >
                {option}
              </li>
          ))}
        </ul>
    );
  };

  return (
      <div className={`dropdown ${isDisabled ? 'disabled' : ''} ${hasWarning ? 'warning' : ''}`}>
        <div
            className={`dropdown-header ${isOpen ? 'open' : ''}`}
            onClick={toggleDropdown}
            onMouseEnter={toggleDropdown}
        >
          {headerText}
        </div>
        {isOpen && !isDisabled && renderOptions()}
      </div>
  );
}

export default Dropdown;