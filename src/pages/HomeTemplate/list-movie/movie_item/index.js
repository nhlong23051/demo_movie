import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MovieItem extends Component {
    render() {
        let { item } = this.props
        return (
            <div className='col-md-3'>
                <div className="card" style={{ width: '100%' }}>
                    <img className="card-img-top" src={item.hinhAnh} alt="Card image" style={{ width: '100%', maxHeight: '300px' }} />
                    <div className="card-body">
                        <h4 className="card-title">{item.tenPhim}</h4>
                        <Link to={`/detail/${item.maPhim}`} className='btn btn-info mr-2'>Detail</Link>
                        <a className="btn btn-primary">Đặt vé</a>
                    </div>
                </div>
            </div>
        )
    }
}