import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { UndoMessage, UndoTimer, IconButton } from './CommonStyles';
import { RotateCcw } from 'react-feather';

const UndoNotification = ({ deletedItem, onUndo, onTimeout }) => {
  const [timerWidth, setTimerWidth] = useState(100);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (deletedItem) {
      setIsVisible(true);
      setTimerWidth(100);

      const intervalId = setInterval(() => {
        setTimerWidth((prevWidth) => Math.max(prevWidth - 2.5, 0));
      }, 100);

      const timeoutId = setTimeout(() => {
        onTimeout();
        setIsVisible(false);
        clearInterval(intervalId);
      }, 4000);

      return () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      };
    }
  }, [deletedItem, onTimeout]);

  if (!isVisible) return null;

  return (
    <UndoMessage>
      <span>{deletedItem.name} deleted</span>
      <IconButton type="button" onClick={onUndo}>
        <RotateCcw size={16} /> Undo
      </IconButton>
      <UndoTimer style={{ width: `${timerWidth}%` }} />
    </UndoMessage>
  );
};

UndoNotification.propTypes = {
  deletedItem: PropTypes.object.isRequired,
  onUndo: PropTypes.func.isRequired,
  onTimeout: PropTypes.func.isRequired,
};

export default UndoNotification;
