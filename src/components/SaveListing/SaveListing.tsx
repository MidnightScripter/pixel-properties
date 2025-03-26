import { ButtonHTMLAttributes } from 'react';
import { Bookmark, BookmarkSaved } from '../../assets/icons';

import styles from './SaveListing.module.css';

export interface SaveListingType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSaved?: boolean;
}

function SaveListing({
  isSaved = false,
  className,
  ...props
}: SaveListingType) {
  return (
    <button
      className={`${isSaved ? styles.saved : ''} ${styles.saveListing} ${
        className || ''
      }`}
      type={props.type}
      aria-label={isSaved ? 'Remove from Saved listings' : 'Save Listing'}
      {...props}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log('button pressed');
        // props.onClick?.(e);
      }}
    >
      {isSaved ? <BookmarkSaved /> : <Bookmark />}
    </button>
  );
}
export default SaveListing;
