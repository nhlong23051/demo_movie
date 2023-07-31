import React, { useState, useEffect, useMemo } from 'react'
import CustomHooks from './Custom-hooks';

export default function HooksPage() {
    const [number, setNumber] = useState(0)

    useEffect(() => {
        // console.log('useEffect = componentDidMount - chạy 1 lần nếu đối số thứ 2 là mảng rỗng');
    }, [])

    useEffect(() => {
        // console.log('useEffect = componentDidUpdate - chạy nhiều lần nếu đối số thứ 2 có tham số thay đổi');
    }, [number])

    const countUp = () => {
        let i = 0;
        while (i < 1000) {
            i++
        }
        return i
    }

    const countUpMemo = useMemo(() => countUp(), [])

    return (
        <>
            <div>
                <h3>Number: {number}</h3>
                <h3>Count up: {countUpMemo}</h3>
                <button className='btn1' onClick={() => {
                    setNumber(number + 1)
                }}>Click</button>
            </div>
            <hr />
            <CustomHooks />
            <d />
        </>
    )
}
