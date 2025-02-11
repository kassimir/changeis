import {FC, useState} from 'react';
import {FakerData} from '../types/fakerData';

const enum FLIP_STATE {
  SHOW = 'show',
  HIDE = 'hide'
}

const ExpansionPanel: FC<FakerData> = ({title, description, url}: FakerData) => {
  const [display, setDisplay] = useState<FLIP_STATE.HIDE | FLIP_STATE.SHOW>(FLIP_STATE.HIDE);

  function toggleDescription(): void {
    const newDisplay = display === FLIP_STATE.HIDE ? FLIP_STATE.SHOW : FLIP_STATE.HIDE;
    setDisplay(newDisplay);
  }
  return (
    <div className="expansion">
      <div className="expansion-title" onClick={toggleDescription}>{title}</div>
      <div className={`expansion-description ${display}`}>
        <div className="description">{description}</div>
        <div>{url}</div>
      </div>
    </div>
  )
}

export default ExpansionPanel;
