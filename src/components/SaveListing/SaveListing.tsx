import { ButtonHTMLAttributes } from 'react';
import { Bookmark, BookmarkSaved } from '../../assets/icons';

import styles from './SaveListing.module.css';
import { useFavorites } from '../../context/FavoritesContext';

export interface SaveListingType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSaved?: boolean;
  propId?: number;
}

function SaveListing({
  isSaved = false,
  className,
  propId,
  ...props
}: SaveListingType) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorited = propId ? isFavorite(propId) : null;
  return (
    <button
      className={`${favorited ? styles.saved : ''} ${styles.saveListing} ${
        className || ''
      }`}
      type={props.type}
      aria-label={isSaved ? 'Remove from Saved listings' : 'Save Listing'}
      {...props}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        if (propId) {
          toggleFavorite(propId);
        }
      }}
    >
      {favorited ? <BookmarkSaved /> : <Bookmark />}
    </button>
  );
}
export default SaveListing;
