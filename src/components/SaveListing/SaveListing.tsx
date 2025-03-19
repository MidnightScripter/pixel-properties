import { ButtonHTMLAttributes } from 'react';
import Bookmark from '../../assets/bookmark-icon.svg?react';
import BookmarkUnsaved from '../../assets/bookmark-unsaved-icon.svg?react';

import styles from './SaveListing.module.css';

export interface SaveListingType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSaved?: boolean;
}

function SaveListing({ isSaved = false, ...props }: SaveListingType) {
  return (
    <button
      className={`${isSaved ? styles.saved : undefined} ${styles.saveListing} `}
      type={props.type}
      aria-label={isSaved ? 'Remove from Saved listings' : 'Save Listing'}
      {...props}
    >
      {isSaved ? <Bookmark /> : <BookmarkUnsaved />}
    </button>
  );
}
export default SaveListing;
