import { ComponentType } from 'react';
import styles from './PropertyDetail.module.css';

export interface PropertyDetailType {
  icon?: ComponentType;
  detailType: string;
  detailValue: string;
}

function PropertyDetail({
  icon: Icon,
  detailType,
  detailValue,
}: PropertyDetailType) {
  return (
    <p className={styles.detailContainer}>
      {Icon && (
        <span className={styles.icon} role='presentation'>
          <Icon />
        </span>
      )}
      <span className={styles.detailType}>{detailType}</span>{' '}
      <span className={styles.detailValue}>{detailValue}</span>
    </p>
  );
}
export default PropertyDetail;
