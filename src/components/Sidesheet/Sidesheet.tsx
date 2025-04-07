import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './Sidesheet.module.css';

export interface SidesheetType {
  title?: string;
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

function Sidesheet({
  title,
  className,
  children,
  isOpen = false,
  onClose,
}: SidesheetType) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;

    if (isOpen && dialog) {
      dialog.showModal(); // Open the dialog
      dialog.focus();

      const handleCancel = (e: Event) => {
        e.preventDefault(); // Prevent closing via native behavior (solves some ESC state issues)
        onClose(); // Use custom close logic
      };

      dialog.addEventListener('cancel', handleCancel);

      return () => {
        dialog.removeEventListener('cancel', handleCancel);
        dialog.close(); // Clean up dialog state
      };
    }
  }, [isOpen, onClose]);

  return createPortal(
    <>
      {isOpen && (
        <dialog
          className={`${styles.container} ${className || ''}`}
          ref={dialogRef}
        >
          <header className={styles.header}>
            {title && <h1>{title}</h1>}
            <button onClick={onClose} className={styles.closeButton}>
              &times;
            </button>
          </header>
          {children}
          <button>OK</button>
        </dialog>
      )}
    </>,
    document.body
  );
}
export default Sidesheet;
