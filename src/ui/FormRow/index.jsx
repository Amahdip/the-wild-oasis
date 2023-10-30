/* eslint-disable react/prop-types */
/* eslint-disable  no-unused-vars */
import { StyledFormRow, Label, Error } from './style';

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
