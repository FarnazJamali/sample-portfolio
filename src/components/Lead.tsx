import { FA_IR } from '../Language'

export const Lead = () => {
  return (
    <div className="relative flex items-center justify-center bg-cyan-500/40 -mt-[73px] -z-10">
      <div className="absolute">
        <h1 className="mb-5 ">{FA_IR.Name}</h1>
        <h4>{FA_IR.Specialty}</h4>
        <h4 className='mt-3'>{FA_IR.Specialty2}</h4>
      </div>
      <div
        className="h-screen w-full"
        style={{
          backgroundImage: 'url(/image/leadBackground.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: 0.2,
        }}
      ></div>
    </div>
  )
}
