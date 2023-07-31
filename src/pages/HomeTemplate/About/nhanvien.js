import React from 'react'

export default function NhanVien() {
    return (
        <>
            <div className="form-group">
                <label>Mã nhân viên</label>
                <input type="text" className="form-control" aria-describedby="helpId" />
            </div>

            <div className="form-group">
                <label>Tên nhân viên</label>
                <input type="text" className="form-control" aria-describedby="helpId" />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" aria-describedby="helpId" />
            </div>
        </>
    )
}
