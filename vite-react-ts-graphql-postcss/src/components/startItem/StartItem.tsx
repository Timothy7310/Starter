import styles from './StartItem.module.css';

type Props = {
  imageSrc: string;
  colorHover: string;
  titleEng: string;
  titleOriginal: string;
};

const StartItem = ({ imageSrc, colorHover, titleEng, titleOriginal }: Props) => {
  return (
    <li
      className={styles.item}
      style={{ '--color-hover': colorHover } as React.CSSProperties}
    >
      <a
        href=""
        className={styles.poster__wrap}
      >
        <img
          src={imageSrc}
          className={styles.poster}
          alt=""
        />
      </a>
      <a
        href=""
        className={styles.title__wrap}
      >
        <h3 className={styles.title}>{titleEng || titleOriginal}</h3>
        <span className={styles.title__original}>{titleEng ? titleOriginal : ''}</span>
      </a>
    </li>
  );
};

export default StartItem;
