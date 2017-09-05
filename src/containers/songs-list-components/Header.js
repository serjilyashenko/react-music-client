import React from 'react';

function getSortIcon(headerProperty, {property, value}) {
  const notSort = <span className='glyphicon glyphicon-option-horizontal'></span>;
  const ascSort = <span className='glyphicon glyphicon-menu-down'></span>;
  const descSort = <span className='glyphicon glyphicon-menu-up'></span>;

  if (headerProperty !== property) {
    return notSort;
  }

  return value === 'asc' ? ascSort : descSort;
}

function handleOnClick(headerProperty, {value, property}, callback) {
  return () => {
    if (headerProperty !== property) {
      return callback({value: 'asc', property: headerProperty});
    }

    const newValue = value !== 'asc' ? 'asc' : 'desc';
    callback({property, value: newValue});
  };
}

function Header(props) {
  const {sort, onChange} = props;

  const headers = [
    {title: 'Испольнитель', property: 'artist'},
    {title: 'Песня', property: 'title'},
    {title: 'Жанр', property: 'genre'},
    {title: 'Год', property: 'year'},
  ].map(({title, property}) => (
    <th onClick={handleOnClick(property, sort, onChange)} key={property}>
      {title} {getSortIcon(property, sort)}
    </th>
  ));

  return (
    <tr>
      {headers}
    </tr>
  );
}

export default Header;
