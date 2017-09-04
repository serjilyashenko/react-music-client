import React from 'react';
import {ButtonToolbar, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';

function Limits(props) {
  const {values, active, onChange} = props;
  const valueElements = values.map((value) => <ToggleButton key={value} value={value}>{value}</ToggleButton>);

  return (
    <ButtonToolbar className='pull-right'>
      <ToggleButtonGroup
        bsSize='small'
        type='radio'
        name='limits'
        value={active}
        onChange={onChange}
      >
        {valueElements}
      </ToggleButtonGroup>
    </ButtonToolbar>
  );
}

export default Limits;
