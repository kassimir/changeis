import { useEffect, useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import { FakerData } from './types/fakerData';
import { FakerReturn } from './types/fakerReturn';
import FlipCard from './components/FlipCard';
import ExpansionPanel from './components/ExpansionPanel';

const APIURL = 'https://fakerapi.it/api/v1/images?_width=380';

const enum DATA_STATES {
  CARD = 'card',
  FLIP = 'flip card',
  PANEL = 'expansion panel'
}

function App() {
  const selectors: string[] = [DATA_STATES.CARD, DATA_STATES.FLIP, DATA_STATES.PANEL];
  const initialSelection: number = 0;
  const [selectedIndex, setSelectedIndex] = useState<number>(initialSelection);
  const [fakerData, setFakerData] = useState<FakerData[]>([]);

  useEffect(() => {
    fetch(APIURL)
      .then((response: Response): Promise<FakerReturn> => response.json())
      .then((data: FakerReturn): void => setFakerData(data.data));
  }, []);

  return (
    <>
      <Header selectors={selectors} setSelected={setSelectedIndex} defaultValue={initialSelection} />
      {fakerData.length > 0 ? (
        <main>
          {fakerData.map((data: FakerData, index: number) => (
            <div key={index}>
              {selectedIndex === 0 && <Card {...data} />}
              {selectedIndex === 1 && <FlipCard {...data} />}
              {selectedIndex === 2 && <ExpansionPanel {...data} />}
            </div>
          ))}
        </main>
      ) : (
        <p>No data here, man</p>
      )}
    </>
  );
}

export default App;
