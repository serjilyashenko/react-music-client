import React, {Component} from 'react';
import SongsList from './SongsList';
import FilterSet from '../components/filter-set/FilterSet';
import SelectFilter from '../components/filter-set/filters/SelectFilter';
import {Grid, Col, Row} from 'react-bootstrap';
import {uniqBy, map as mapBy} from 'lodash';

import songs from '../fixtures/songs';

function getOptions(list, property) {
  const mappedList = mapBy(list, property);
  return uniqBy(mappedList).filter(it => it);
}

const filters = [
  {
    Component: SelectFilter,
    property: 'artist',
    props: {
      title: 'Исполнитель',
      options: getOptions(songs, 'artist'),
      value: undefined
    }
  },
  {
    Component: SelectFilter,
    property: 'genre',
    props: {
      title: 'Жанр',
      options: getOptions(songs, 'genre'),
      value: undefined
    }
  },
  {
    Component: SelectFilter,
    property: 'year',
    props: {
      title: 'Год',
      options: getOptions(songs, 'year'),
      value: undefined
    }
  }
];

class PlaylistPage extends Component {

  constructor() {
    super();

    this.state = {
      filters,
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  filterSongs(songs) {
    return songs.filter(song => {
      return filters.every(({property, props: {value}}) => {
        if (!value) {
          return true;
        }

        const propertyValue = song[property] || '';
        return propertyValue.indexOf(value) !== -1;
      });
    });
  }

  handleFilterChange(property, value) {
    this.setState((previousState) => {
      const filters = previousState.filters.slice();
      const changedFilter = filters.find(filter => filter.property === property);
      changedFilter.props.value = value;

      return {filters}
    });
  }

  render() {
    const {filters} = this.state;
    const filteredSongs = this.filterSongs(songs);

    return (
      <Grid>
        <Row className='show-grid'>
          <Col xs={9} md={9}>
            <h2>
              <small>Плейлист</small>
            </h2>
            <SongsList songs={filteredSongs}/>
          </Col>
          <Col xs={3} md={3}>
            <h2>
              <small>Фильтр</small>
            </h2>
            <FilterSet
              filters={filters}
              onChange={this.handleFilterChange}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default PlaylistPage;
