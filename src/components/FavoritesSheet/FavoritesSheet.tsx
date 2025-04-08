import { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './FavoritesSheet.module.css';

export interface FavoritesSheetType {
  title?: string;
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

function FavoritesSheet({
  title,
  className,
  children,
  isOpen,
  onClose,
}: FavoritesSheetType) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [shouldRender, setShouldRender] = useState(isOpen);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setShouldRender(false); // Remove dialog from DOM after exit animation
    }
  };

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && isOpen) {
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
      {shouldRender && (
        <dialog
          className={`${styles.container} ${className || ''}`}
          ref={dialogRef}
          onAnimationEnd={handleAnimationEnd}
          onClick={(e) => {
            // Close if clicking on the backdrop
            if (e.target === dialogRef.current) {
              onClose();
            }
          }}
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
export default FavoritesSheet;
