import { useEffect, useState } from 'react'

function Box() {
    const [num,changeNum] = useState("");
    useEffect(()=>{
        console.log(num)
    },[num])
    return (
        <>
            <input
            className="p-4 w-20 h-20 text-black text-center font-bold text-4xl border border-gray-400 rounded"
            type="text"
            maxLength={1}
            value={num}
            onChange={e => changeNum(e.target.value.replace(/[^1-9]/, ""))}
            />
        </>
    )
}

export default Box
