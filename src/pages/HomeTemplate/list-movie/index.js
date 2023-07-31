import React, { Component } from 'react'
import axios from 'axios'
import MovieItem from './movie_item';
import { connect } from 'react-redux'
import * as action from './duck/action'

class ListMovie extends Component {

  componentDidMount() {
    this.props.actFetchList()
  }
  render() {
    let { data, loading } = this.props
    if (loading) return <div>Loading ...</div>

    let listMovie = data?.map((item) => {
      return <MovieItem item={item} key={item.maPhim} />
    })
    return (
      <>
        <div className='container'>
          <h3 className='text-center'>Danh Sách Phim</h3>
          <div className='row'>
            {listMovie}
          </div>
        </div>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.listMovieReducer.data,
    loading: state.listMovieReducer.loading
  }
}

const mapDispathToProp = (dispath) => {
  return {
    actFetchList: () => {
      dispath(action.actFetchListMovie())
    }
  }
}

export default connect(mapStateToProps, mapDispathToProp)(ListMovie)