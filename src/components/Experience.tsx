import { FA_IR } from '../Language'
import { Experience_Data } from '../mock'
import { FaLocationPin } from 'react-icons/fa6'

export const Experience = () => {
  return (
    <div id="experience" className="py-16 px-8 w-full bg-slate-100">
      <h3 className="font-medium text-center mb-10">{FA_IR.Experience}</h3>
      <div className="relative blue-line">
        {Experience_Data.map((item) => (
          <div className="flex" key={item.experienceTitle}>
            <div className="hidden md:block md:w-1/4">
              <span>{item.duration}</span>
              <span className='absolute right-[157px] text-3xl text-[#3498db]'><FaLocationPin /></span>            
            </div>
            
            <div className="w-8 md:hidden">
              <span className='absolute -right-6 text-3xl text-[#3498db]'><FaLocationPin /></span>
            </div>

            <div className="w-[calc(100%-30px)] md:w-3/4">
              <p className="md:hidden my-3">{item.duration}</p>
              <div className="bg-white rounded-md p-5">
                <h4>{item.experienceTitle}</h4>
                <h6 className="mb-4">{item.jobDef}</h6>
                <p className=" text-justify">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
