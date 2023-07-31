import React  from 'react'
import './style.css'
import { useMagicColor } from './magic-color'

export default function Circle() {
    let color = useMagicColor()

    return (
        <div className='circle' style={{ backgroundColor: color }}>Circle</div>
    )
}
