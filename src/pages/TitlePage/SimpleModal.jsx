const SimpleModal = ({isOpen, onClose, children}) => {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="model-wrapper">
            <div className="modal-content">
              <button onClick={() => onClose()} className="modal-close-button">
                x
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SimpleModal;
