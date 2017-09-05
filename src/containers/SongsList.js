import React, {Component} from 'react';
import {Table, Col, Row} from 'react-bootstrap';
import Pagination from '../components/Pagination';
import Header from './songs-list-components/Header';
import Limits from '../components/Limits';
import {orderBy} from 'lodash';

class SongsList extends Component {

  constructor() {
    super();

    this.state = {
      page: 1,
      limit: 10,
      sort: {
        property: 'title',
        value: 'asc'
      }
    };

    this.handleSortChange = this.handleSortChange.bind(this);
    this.handlePaginationChange = this.handlePaginationChange.bind(this);
    this.handleLimitChange = this.handleLimitChange.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({
      page: 1
    });
  }

  handlePaginationChange(page) {
    this.setState({page});
  }

  handleSortChange(sort) {
    this.setState({sort, page: 1});
  }

  handleLimitChange(limit) {
    this.setState({limit, page: 1});
  }

  getSongs() {
    const {songs} = this.props;
    const {sort: {property, value}} = this.state;
    const {page, limit} = this.state;
    const sortedSongs = orderBy(songs, property, value);

    return sortedSongs.slice((page - 1) * limit, page * limit);
  }

  renderRow(row) {
    return (
      <tr key={row.title}>
        <td>{row.artist}</td>
        <td>{row.title}</td>
        <td>{row.genre}</td>
        <td>{row.year}</td>
      </tr>
    );
  }

  render() {
    const {songs} = this.props;
    const {limit, sort} = this.state;
    const total = songs.length;
    const limitValues = [10, 25, 50, 100];
    const paginatedSongs = this.getSongs();
    const rows = paginatedSongs.map(this.renderRow);

    return (
      <div>

        <Table striped bordered condensed hover>
          <thead>
          <Header sort={sort} onChange={this.handleSortChange}/>
          </thead>
          <tbody>
          {rows}
          </tbody>
        </Table>

        <Row>
          <Col xsOffset={4} mdOffset={4} xs={5} md={4}>
            <Pagination
              total={total}
              limit={limit}
              page={this.state.page}
              onChange={this.handlePaginationChange}
            />
          </Col>
          <Col xsOffset={4} mdOffset={1} xs={4} md={3}>
            <Limits
              values={limitValues}
              active={limit}
              onChange={this.handleLimitChange}
            />
          </Col>
        </Row>

      </div>
    );
  }
}

export default SongsList;
