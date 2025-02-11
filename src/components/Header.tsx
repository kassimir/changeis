import { FC } from 'react';

const Header: FC = ({selectors, setSelected, defaultValue}) => {

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
