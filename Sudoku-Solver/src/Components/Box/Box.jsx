
export default function Box({ value, onChange }) {
  return (
    <input
      className='w-20 h-20 text-center text-4xl border border-gray-400 rounded'
      type='text'
      maxLength={1}
      value={value}
      onChange={e => {
        const v = e.target.value.replace(/[^1-9]/g, '')
        console.log(v);
        onChange(v)
      }}
    />
  )
}
