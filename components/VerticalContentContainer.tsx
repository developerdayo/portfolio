// styles
import styles from '../styles/components/VerticalContentContainer.module.scss';

type Props = {
  altText?: string;
  backgroundImage?: string;
  children: JSX.Element;
  size: string;
}

const VerticalContentContainer = ({ altText, children, backgroundImage, size }: Props) => {
  return (
    <div className={styles['container']}>
      {backgroundImage !== '' ? <img className={styles['background-image']} src={backgroundImage} alt={altText} /> : <></>}
      <div className={`${styles.content} ${styles[size]}`}>
        {children}
      </div>
    </div>
  );
};

export default VerticalContentContainer;