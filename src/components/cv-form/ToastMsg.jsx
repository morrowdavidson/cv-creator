// ToastMsg.jsx
import PropTypes from 'prop-types';
import { ToastButton } from './CommonStyles';
import { RotateCcw } from 'react-feather';

const ToastMsg = ({ itemName, handleUndo }) => {
  return (
    <ToastButton type="button" onClick={handleUndo}>
      <span>Item {itemName ? `(${itemName})` : ''} deleted</span>
      <a>
        <RotateCcw size={12} /> Undo
      </a>
    </ToastButton>
  );
};

ToastMsg.propTypes = {
  itemName: PropTypes.string,
  handleUndo: PropTypes.func.isRequired,
};

export default ToastMsg;
