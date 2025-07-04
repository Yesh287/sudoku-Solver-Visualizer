import { useState } from 'react'
import BigBox from '../BigBox/BigBox'

function Grid() {
  return (
    <div className='flex justify-center align-center m-50 bg-white'>
        <div className='flex flex-col border-6'>
            <div className='flex'>
                <BigBox />
                <BigBox />
                <BigBox />
            </div>
            <div className='flex'>
                <BigBox />
                <BigBox />
                <BigBox />
            </div>
            <div className='flex'>
                <BigBox />
                <BigBox />
                <BigBox />
            </div>
        </div>
    </div>
  )
}

export default Grid
