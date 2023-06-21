import { useRef } from 'react';
import cursor from '../styles/components/Cursor.module.scss';

const Cursor = () => {
  const spotlight = useRef<HTMLDivElement>(null);
  const spotlightSize = 'transparent 2%, rgba(0, 0, 0, .3) 100%';

  const updateSpotlight = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (spotlight.current) {
      spotlight.current.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;
    }
  }

  const mouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setTimeout(() => {
      updateSpotlight(e);  
    }, 100);
  }

  const mouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setTimeout(() => {
      updateSpotlight(e);
    }, 100);
  }

  const mouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setTimeout(() => {
      updateSpotlight(e);
    }, 100);
  }

  return (
    <div
      ref={spotlight}
      className={cursor.spotlight}
      onMouseMove={(e) => mouseMove(e)}
      onMouseDown={(e) => mouseDown(e)}
      onMouseUp={(e) => mouseUp(e)}
    ></div>
  )
}

export default Cursor;
