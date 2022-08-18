import { useState } from 'react';
import { store } from '../../mobx/store';
import * as Style from './Toggle.style';

const ToggleTemp = () => {
  const [temp, setTemp] = useState('C');

  const check = (temperature: string) => (): void => {
    setTemp(temperature);

    store.currentTemp(temp);
  }

  return (
    <Style.InputWrapper>
      <input
        name="toggle"
        type="radio"
        onChange={check('C')}
        checked={temp === 'C'}
      />
      <label>°C</label>

      <input
        name="toggle"
        type="radio"
        onChange={check('F')}
        checked={temp === 'F'}
      />
      <label>°F</label>
    </Style.InputWrapper>
  )
}

export default ToggleTemp
