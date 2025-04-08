import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './Sidesheet.module.css';
import { Close } from '../../assets/icons';

export interface SidesheetType {
  title?: string;
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  size?: 's' | 'm' | 'l';
}

function Sidesheet({
  title,
  className,
  children,
  isOpen,
  onClose,
  size = 'm',
}: SidesheetType) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleAnimationEnd = () => {
    const dialog = dialogRef.current;
    if (!isOpen) {
      if (dialog) {
        dialog.close();
      }
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Close the modal only if the click is directly on the backdrop
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && isOpen) {
      requestAnimationFrame(() => {
        dialog.showModal(); // Open the dialog
        document.body.classList.add('no-scroll');
        dialog.focus();
      });

      const handleCancel = (e: Event) => {
        e.preventDefault(); // Prevent closing via native behavior (solves some ESC state issues)
        document.body.classList.remove('no-scroll');
        onClose(); // Use custom close logic
      };

      dialog.addEventListener('cancel', handleCancel);

      return () => {
        dialog.removeEventListener('cancel', handleCancel);
        dialog.close(); // Clean up dialog state
        document.body.classList.remove('no-scroll');
      };
    }
  }, [isOpen, onClose]);

  return createPortal(
    <>
      <dialog
        className={`${styles.container} ${styles['size-' + size]} ${
          className || ''
        }`}
        ref={dialogRef}
        onAnimationEnd={handleAnimationEnd}
        onClick={handleBackdropClick}
      >
        <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
          <header className={styles.header}>
            {title && <h1 className={styles.headline}>{title}</h1>}
            <button
              onClick={onClose}
              className={styles.closeButton}
              aria-label='Click to Close this Dialog'
            >
              <Close />
            </button>
          </header>
          <div className={styles.content}>{children}</div>
        </div>
      </dialog>
    </>,
    document.body
  );
}
export default Sidesheet;
