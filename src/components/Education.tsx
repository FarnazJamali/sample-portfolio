import { FA_IR } from '../Language'
import { Education_Data } from '../mock'

export const Education = () => {
  return (
    <div id="education" className="bg-slate-100 pt-14 pb-5 py-4">
      <h3 className="font-medium text-center mb-10">{FA_IR.Education}</h3>
      {Education_Data.map((item) => (
        <div className="lg:w-[700px] p-10 border border-dashed border-slate-500 mb-8 mx-10 lg:mx-auto rounded-md bg-white" key={item.title}>
          <h4 className='mb-2'>{item.uniName}</h4>
          <p className='text-sm text-slate-700'>{item.year}</p>
          <p className='text-sm mb-5 text-slate-700'>{item.title}</p>
          <p className='text-justify'>{item.description}</p>
        </div>
      ))}
    </div>
  )
}
