import {FC} from 'react';
import {FakerData} from '../types/fakerData';

const Card: FC<FakerData> = ({title, description, url}) => {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
      <div className="card-url">{url}</div>
    </div>
  )
}

export default Card;
