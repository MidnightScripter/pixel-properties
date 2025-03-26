import { ButtonHTMLAttributes } from 'react';
import { Bookmark, BookmarkSaved } from '../../assets/icons';

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
      {isSaved ? <BookmarkSaved /> : <Bookmark />}
    </button>
  );
}
export default SaveListing;
