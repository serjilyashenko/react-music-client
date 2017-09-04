import React from 'react';
import {Pagination as BootstrapPagination} from 'react-bootstrap';

function Pagination(props) {
  const {total, limit, page, onChange} = props;
  const pagesAmount = Math.ceil(total / limit);

  return (
    <BootstrapPagination
      prev
      next
      ellipsis
      boundaryLinks
      items={pagesAmount}
      maxButtons={3}
      activePage={page}
      onSelect={onChange}
      bsSize='small'
    />
  );
}

export default Pagination;
