import styles from './SkeletonLoader.module.css';

export interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  isCircle?: boolean;
}

const SkeletonLoader = ({
  width = '100%',
  height = '100%',
  isCircle = false,
}: SkeletonLoaderProps) => (
  <div
    className={`skeleton-loader ${isCircle ? 'circle' : ''}`}
    style={{
      width,
      height,
    }}
  />
);
export default SkeletonLoader;
