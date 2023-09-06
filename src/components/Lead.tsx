import { FA_IR } from '../Language'

export const Lead = () => {
  return (
    <div className="h-screen bg-teal-500/50 -mt-20 flex items-center justify-center">
      <div className=''>
        <h1 className='mb-5 '>{FA_IR.Name}</h1>
        <h4>{FA_IR.Specialty}</h4>
      </div>
    </div>
  )
}
