import { FC, useState } from 'react';
import { FakerData } from '../types/fakerData';

const FlipCard: FC<FakerData> = ({ title, description, url }) => {
  const [flipped, setFlipped] = useState(false);

  const handleMouseOver = () => setFlipped(true);
  const handleMouseOut = () => setFlipped(false);

  return (
    <div
      className={`flip-card ${flipped ? 'flipped' : ''}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div>{title}</div>
        </div>
        <div className="flip-card-back">
          <div className="flip-card-description">{description}</div>
          <div>{url}</div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
