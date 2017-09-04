import React, {Component} from 'react';
import {Table, Col, Row} from 'react-bootstrap';
import Pagination from '../components/Pagination';
import Limits from '../components/Limits';

class SongsList extends Component {

  constructor() {
    super();

    this.state = {
      page: 1,
      limit: 10
    };

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

  handleLimitChange(limit) {
    this.setState({limit, page: 1});
  }

  renderHeader() {
    return (
      <tr>
        <th>Исполнитель</th>
        <th>Песня</th>
        <th>Жанр</th>
        <th>Год</th>
      </tr>
    );
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
    const {page, limit} = this.state;
    const limitValues = [10, 25, 50, 100];
    const total = songs.length;
    const paginatedSongs = songs.slice((page - 1) * limit, page * limit);
    const rows = paginatedSongs.map(this.renderRow);

    const header = this.renderHeader();

    return (
      <div>

        <Table striped bordered condensed hover>
          <thead>
          {header}
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
