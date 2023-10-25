import { StyledDataItem, Label } from './style';
import PropTypes from 'prop-types';

const DataItem = ({ icon, label, children }) => {
  return (
    <StyledDataItem>
      <Label>
        {icon}
        <span>{label}</span>
      </Label>
      {children}
    </StyledDataItem>
  );
};

DataItem.propTypes = {
  // icon: PropTypes.,
  // label: PropTypes.func,
  children: PropTypes.node,
};

export default DataItem;
