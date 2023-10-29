import { StyledSelect } from './style';

const Select = ({ options, value, onChange, ...props }) => {
  return (
    <StyledSelect value={value} onChange={onChange} {...props}>
      {options.map((option) => (
        <option value={option?.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
