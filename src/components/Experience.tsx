import { FA_IR } from '../Language'
import { Experience_Data } from '../mock'
import { FaLocationPin } from 'react-icons/fa6'

export const Experience = () => {
  return (
    <div id="experience" className="py-16 px-8 w-full bg-slate-100">
      <h3 className="font-medium text-center mb-10">{FA_IR.Experience}</h3>
      <div className="relative blue-line w-full">
        <div className="hidden md:block">
          <span className="absolute right-[77px] text-3xl text-[#3498db]">
            <FaLocationPin />
          </span>
        </div>

        <div className="w-8 md:hidden">
          <span className="absolute -right-6 text-3xl text-[#3498db]">
            <FaLocationPin />
          </span>
        </div>

        <h4 className="m-5 md:text-center">{FA_IR.CompanyName}</h4>

        {Experience_Data.map((item) => (
          <div
            className="flex justify-end md:justify-center mb-6"
            key={item.projectTitle}
          >
            <div className="w-[calc(100%-30px)] md:w-3/4">
              <div className="bg-white rounded-md p-5 shadow-lg ">
                <p className="mb-4 font-semibold">{item.projectTitle}</p>
                <p className=" text-justify">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
