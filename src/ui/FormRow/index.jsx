import { StyledFormRow, Label, Error } from './style';

const FormRow = ({ label, error, children, orientation }) => {
  return (
    <StyledFormRow orientation={orientation}>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
};

export default FormRow;
