import { useState } from 'react'
import Box from '../Box/Box'

function BigBox() {
  return (
    <div className='flex flex-col border-3'>
        <div className='flex'>
            <Box />
            <Box />
            <Box />
        </div>
        <div className='flex'>
            <Box />
            <Box />
            <Box />
        </div>
        <div className='flex'>
            <Box />
            <Box />
            <Box />
        </div>
    </div>
  )
}

export default BigBox
