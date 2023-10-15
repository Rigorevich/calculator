import { useState, useRef } from 'react';

import { useClickOutside } from '../../hooks';
import { themes } from '../../utils/theme';

import { DropDownContainer, DropDownLabel, DropDownHeader, DropDownList, DropDownItem } from './styled';

export const Dropdown = ({ theme, cb }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useClickOutside(ref, () => setIsOpen(false));

  const handleToggleTheme = (option) => {
    cb(option);
    setIsOpen(false);
  };

  return (
    <DropDownContainer ref={ref}>
      <DropDownLabel>Switch theme</DropDownLabel>
      <DropDownHeader
        data-test="settings-dropdown-button"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        {theme.label}
      </DropDownHeader>
      {isOpen && (
        <DropDownList>
          {Object.values(themes).map((option) => (
            <DropDownItem
              data-test={`theme-option-${option.label}`}
              key={option.label}
              onClick={() => handleToggleTheme({ ...option, label: `${option.label} Theme` })}
            >
              {option.label} Theme
            </DropDownItem>
          ))}
        </DropDownList>
      )}
    </DropDownContainer>
  );
};
