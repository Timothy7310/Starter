import StartList from 'components/startList/StartList';
import { MediaType, MediaSort, MediaSeason } from '__generated__/types';
import { Wrapper } from 'shared/ui/wrapper';

import styles from './Anime.module.css';

const Anime = () => {
  return (
    <Wrapper className={styles.inner__anime}>
      <StartList
        title="Trending now"
        variables={{
          sort: MediaSort.TrendingDesc,
          type: MediaType.Anime,
        }}
      />
      <StartList
        title="Popular this season"
        variables={{
          sort: MediaSort.PopularityDesc,
          seasonYear: 2023,
          season: MediaSeason.Spring,
          type: MediaType.Anime,
        }}
      />
      <StartList
        title="Upcoming next season"
        variables={{
          sort: MediaSort.PopularityDesc,
          seasonYear: 2023,
          season: MediaSeason.Summer,
          type: MediaType.Anime,
        }}
      />
      <StartList
        title="All time popular"
        variables={{ sort: MediaSort.PopularityDesc, type: MediaType.Anime }}
      />
    </Wrapper>
  );
};

export default Anime;
