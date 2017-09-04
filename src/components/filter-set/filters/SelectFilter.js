import React from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

function Filter(props) {
  const {options, value, title, onChange} = props;
  const optionElements = options.map(it => <option key={it} value={it}>{it}</option>);

  return (
    <FormGroup>
      <ControlLabel>{title}</ControlLabel>
      <FormControl
        componentClass='select'
        placeholder='select'
        value={value}
        onChange={(e) => onChange(e.target.value || undefined)}
      >
        <option value=''>All</option>
        {optionElements}
      </FormControl>
    </FormGroup>

  );
}

export default Filter;
