import { FC, Dispatch, SetStateAction } from 'react';

type HeaderProps = {
  selectors: string[];
  setSelected: Dispatch<SetStateAction<number>>;
  defaultValue: number;
}

const Header: FC<HeaderProps> = ({selectors, setSelected, defaultValue}) => {
  return (
    <div id="header">
      <ul>
        {selectors.length && selectors.map( (selector, ind) =>
          <li
            key={ind}
            onClick={() => setSelected(ind)}
          >
            <label>
              <input type="radio" name="selector" defaultChecked={ind === defaultValue}/>
              {selector}
            </label>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Header;
