import { ErrorBoundary } from 'react-error-boundary';
import { Header, Footer } from 'components';
import styles from './Layout.module.css';
import { Fallback, logError } from 'shared/libs';
import type { FCProps } from 'app/types';

export const Layout = ({ children }: FCProps) => (
  <div className={styles.app}>
    <ErrorBoundary
      FallbackComponent={Fallback}
      onError={logError}
    >
      <Header />
    </ErrorBoundary>
    <ErrorBoundary
      FallbackComponent={Fallback}
      onError={logError}
    >
      <main className={styles.main}>{children}</main>
    </ErrorBoundary>
    <Footer />
  </div>
);
