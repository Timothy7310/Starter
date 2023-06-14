import styles from './Header.module.css';
import { HeaderNavigation } from 'widgets/header-navigation';
import { Wrapper } from 'shared/ui/wrapper';
export const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
        header
        <HeaderNavigation />
      </Wrapper>
    </header>
  );
};
