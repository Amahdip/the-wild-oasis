import Button from '../Button';
import Heading from '../Heading';
import PropTypes from 'prop-types';
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

ConfirmDelete.propTypes = {
  resource: PropTypes.object,
  onConfirm: PropTypes.func,
  disabled: PropTypes.bool,
  onCloseModal: PropTypes.func,
};

export default ConfirmDelete;
