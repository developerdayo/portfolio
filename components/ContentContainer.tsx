import { clsx } from 'clsx';

import contentContainerCss from '@styles/components/ContentContainer.module.scss';

type Props = {
  altText?: string;
  backgroundImage?: string;
  children: JSX.Element;
  size: string;
}

const ContentContainer = ({ altText, backgroundImage, children, size }: Props) => {
  return (
    <div className={ contentContainerCss['container'] }>
      {backgroundImage && <img className={ contentContainerCss['background-image'] } src={ backgroundImage } alt={ altText } />}
      <div className={ clsx(contentContainerCss.content, contentContainerCss[size]) }> { children } </div>
    </div>
  );
};

export default ContentContainer;