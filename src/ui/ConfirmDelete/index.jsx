/* eslint-disable react/prop-types */
/* eslint-disable  no-unused-vars */
import Button from '../Button';
import Heading from '../Heading';
import { StyledConfirmDelete } from './style';

const ConfirmDelete = ({ resource, onConfirm, disabled, onCloseModal }) => {
  return (
    <StyledConfirmDelete>
      <Heading type="h3">Delete {resource}</Heading>
      <p>
        Are you sure you want to delete this {resource} permanently? This action
        cannot be undone.
      </p>

      <div>
        <Button variation="secondary" onClick={onCloseModal}>
          Cancel
        </Button>
        <Button variation="danger" onClick={onConfirm} disabled={disabled}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
};

export default ConfirmDelete;
