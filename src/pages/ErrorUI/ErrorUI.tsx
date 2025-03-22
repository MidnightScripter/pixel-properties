import { ReactNode } from 'react';
import { Link } from 'react-router';
import Hero from '../../components/layout/Hero/Hero';
import styles from './ErrorUI.module.css';
export interface ErrorUIPropsType {
  errorImage?: string;
  errorHeadline?: string;
  messageBody?: ReactNode;
}

function ErrorUI({
  errorImage = '/missing.webp',
  errorHeadline = 'Something has gone wrong',
  messageBody = (
    <>
      <p>We could not connect you to the page you were looking for.</p>
      <p>
        {' '}
        <p>
          Please{' '}
          <Link className='link' to={{ pathname: '/' }}>
            Return Home
          </Link>{' '}
          or{' '}
          <Link className='link' to={{ pathname: '/search' }}>
            Head to our Property Search
          </Link>
        </p>
      </p>
    </>
  ),
}: ErrorUIPropsType) {
  return (
    <>
      <Hero heroImage={errorImage} heroHeadline={errorHeadline} />
      <div className={styles.container}>{messageBody}</div>
    </>
  );
}
export default ErrorUI;
