import { useState } from 'react'
import Box from '../Box/Box'
import Grid from '../Grid/Grid'

function Form() {
  return (
    <div className='flex flex-col items-center rounded-xl shadow-lg'>
        <form className='flex flex-col items-center w-full' onSubmit={(e)=>{
            e.preventDefault();
        }}>
            <Grid />
            <div className="-mt-10 mb-10">
              <button className="px-8 py-4 bg-blue-700 text-white font-bold rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:bg-blue-800 transition w-64 text-xl cursor-pointer">
                Evaluate
              </button>
            </div>
        </form>
    </div>
  )
}

export default Form
