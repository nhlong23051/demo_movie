import React, { useState, useEffect } from 'react'
import './style.css'
import { useMagicColor } from './magic-color'

export default function Square() {
    let color = useMagicColor()


    return (
        <div className='square' style={{ backgroundColor: color }}>Square</div>
    )
}
