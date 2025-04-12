import styles from './PropertyDetail.module.css';
import PropertyDetail from './PropertyDetail';
import { PropertyDataType } from '../../types/apiDataTypes';
import {
  propertyCategories,
  friendlyFeatureNames,
} from '../../util/propertyCategories';

export interface PropertyDetailBlockType {
  propertyData: PropertyDataType;
}

function PropertyDetailBlock({ propertyData }: PropertyDetailBlockType) {
  return (
    <div className={styles.detailBlock}>
      {propertyCategories.map((category) => {
        // Filter the keys to see if the propertyData has at least one valid value for the category
        const validKeys = category.keys.filter(
          (key) => propertyData[key as keyof PropertyDataType]
        );

        // If no valid keys are found, skip rendering this category
        if (validKeys.length === 0) return null;
        return (
          <div key={category.name} className={styles.category}>
            <h3 className={styles.categoryHeadline}>
              <span className={styles.categoryIcon}>
                {category.icon && <category.icon />}{' '}
              </span>
              {category.name}
            </h3>
            {validKeys.map((key) => {
              const detailType =
                friendlyFeatureNames[key as keyof typeof friendlyFeatureNames];
              const detailValue = propertyData[key as keyof PropertyDataType];

              // Skip rendering if detailValue is undefined
              if (detailValue === undefined || detailType === undefined)
                return null;

              return (
                <PropertyDetail
                  key={key}
                  detailType={detailType}
                  detailValue={String(detailValue)} // Ensure the value is a string
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
export default PropertyDetailBlock;
