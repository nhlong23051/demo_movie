import React from 'react'

export default function SanPham() {
    return (
        <>
            <div className="form-group">
                <label>Mã sản phẩm</label>
                <input type="text" className="form-control" aria-describedby="helpId" />
            </div>

            <div className="form-group">
                <label>Tên sản phẩm</label>
                <input type="text" className="form-control" aria-describedby="helpId" />
            </div>
        </>
    )
}
