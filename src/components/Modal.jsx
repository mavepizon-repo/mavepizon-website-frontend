// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div
//       className={`modal-overlay${isOpen ? ' open' : ''}`}
//       onClick={(e) => {
//         if (e.target.classList.contains('modal-overlay')) {
//           onClose();
//         }
//       }}
//     >
//       <div className="modal-box">
//         <button className="modal-close" onClick={onClose}>
//           ✕
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Modal;
import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-3xl font-bold hover:scale-110 transition-transform"
          >
            ×
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

