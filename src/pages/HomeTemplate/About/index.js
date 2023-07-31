import React from 'react'
import NhanVien from './nhanvien'
import SanPham from './sanpham'
import Withcard from './withcard'
import RenderCalender from './calendar'

// const WrapperCard = Withcard(NhanVien);


export default function About() {
  return (
    <div>
      <RenderCalender />;
    </div>
  )
  // WrapperCard()
}
