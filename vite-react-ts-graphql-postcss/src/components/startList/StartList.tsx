import { useStartListQuery } from './__generated__/StartListQuery';
import { MediaSort, MediaSeason, MediaType } from '__generated__/types';
import StartItem from 'components/startItem/StartItem';
import { Spinner } from 'shared/ui';
import styles from './StartList.module.css';

type Props = {
  title: string;
  variables: {
    sort: MediaSort;
    type: MediaType;
    seasonYear?: number;
    season?: MediaSeason;
  };
};

const StartList = ({ title, variables }: Props) => {
  const { data, loading, error } = useStartListQuery({
    variables: {
      ...variables,
    },
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <span>error {error.message}</span>;
  }

  if (data?.Page?.media) {
    return (
      <section className={styles.list__wrap}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.list}>
          {data.Page?.media.map((item) => (
            <StartItem
              key={item?.id}
              colorHover={item?.coverImage?.color as string}
              titleEng={item?.title?.english ?? ''}
              titleOriginal={item?.title?.romaji ?? ''}
              imageSrc={
                item?.coverImage?.large ??
                'https://ih1.redbubble.net/image.4870404907.6541/st,small,507x507-pad,600x600,f8f8f8.jpg'
              }
            />
          ))}
        </ul>
      </section>
    );
  }
};

export default StartList;
