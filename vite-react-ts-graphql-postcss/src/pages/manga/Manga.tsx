import StartList from 'components/startList/StartList';
import { MediaType, MediaSort } from '__generated__/types';
import { Wrapper } from 'shared/ui/wrapper';

import styles from './Manga.module.css';

const Manga = () => {
  return (
    <Wrapper className={styles.inner__manga}>
      <StartList
        title="Trending now"
        variables={{
          sort: MediaSort.TrendingDesc,
          type: MediaType.Manga,
        }}
      />
      <StartList
        title="All time popular"
        variables={{ sort: MediaSort.PopularityDesc, type: MediaType.Manga }}
      />
    </Wrapper>
  );
};

export default Manga;
