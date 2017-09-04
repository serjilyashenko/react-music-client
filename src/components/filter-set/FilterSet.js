import React from 'react';
import {Panel} from 'react-bootstrap';

function FilterSet(props) {
  const {filters, onChange} = props;
  const filterElements = filters.map(({Component, property, props}) => <Component
    key={props.title}
    {...props}
    onChange={handleOnChangeBy(property)}
  />);

  function handleOnChangeBy(property) {
    return (value) => onChange(property, value);
  }

  return (
    <Panel>
      <form>
        {filterElements}
      </form>
    </Panel>
  );
}

export default FilterSet;
