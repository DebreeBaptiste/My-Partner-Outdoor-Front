import { useEffect, useRef } from 'react';
import { Button } from '../Button';

export const FeatureReverse = ({
  className,
  title,
  primaryText,
  secondaryText,
  button,
  onClick,
  image,
  alt
}) => {
  const pictureRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: [0, 0.01],
    };

    const intersectionHandler = function (entries) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.01) {
          entry.target.classList.add('visible');
        }
      })
    };

    const pictureObserver = new IntersectionObserver(
      (entries) => intersectionHandler(entries),
      options
    );

    const contentObserver = new IntersectionObserver(
      (entries) => intersectionHandler(entries),
      options
    );

    pictureObserver.observe(pictureRef.current);
    contentObserver.observe(contentRef.current);
  });

  return (
    <div className={`feature ${className}`}>
      <div className='feature-content' ref={contentRef}>
        <h4 className='feature-title'>{title}</h4>
        <p className='feature-subtitle'><span className='feature-subtitle-text'>{primaryText}</span> <span className='feature-subtitle-text'>{secondaryText}</span></p>
        <Button className={"landing-button feature-button"} onClick={onClick}>{button}</Button>
      </div>
      <div className="feature-picture-container" ref={pictureRef}>
        <img src={image} alt={alt} className='features-picture' />
      </div>
    </div>
  );
};
