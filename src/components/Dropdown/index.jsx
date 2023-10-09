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
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        {theme.label}
      </DropDownHeader>
      {isOpen && (
        <DropDownList>
          {Object.values(themes).map((option) => (
            <DropDownItem key={option.label} onClick={() => handleToggleTheme(option)}>
              {option.label}
            </DropDownItem>
          ))}
        </DropDownList>
      )}
    </DropDownContainer>
  );
};
