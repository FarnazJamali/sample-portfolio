import { FA_IR } from '../Language'

export const Experience = () => {
  return (
    <div id="experience" className="py-16 px-8 w-full bg-slate-100">
      <h4 className="font-medium text-center mb-5">{FA_IR.Experience}</h4>
      <div className="relative blue-line">
        <div className="flex">
          <div className="hidden md:block md:w-1/4">
            <span>{FA_IR.JobDuration1}</span>
            <i className="fa-solid fa-location-pin text-3xl text-[#3498db]"></i>
          </div>
          <div className="w-8 md:hidden">
            <i className="absolute -right-6 fa-solid fa-location-pin text-3xl text-[#3498db]"></i>
          </div>

          <div className="w-[calc(100%-30px)] md:w-3/4">
            <p className="md:hidden mb-3">{FA_IR.JobDuration1}</p>
            <div className="bg-white rounded-md p-5">
              <h4>{FA_IR.Experience1}</h4>
              <h6 className="mb-4">{FA_IR.JobDef1}</h6>
              <p className=" text-justify">{FA_IR.ExperienceDescription1}</p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="hidden md:block md:w-1/4">
            <span>{FA_IR.JobDuration2}</span>
            <i className="fa-solid fa-location-pin text-3xl text-[#3498db]"></i>
          </div>
          <div className="w-8 md:hidden">
            <i className="absolute -right-6 fa-solid fa-location-pin text-3xl text-[#3498db]"></i>
          </div>

          <div className="w-[calc(100%-30px)] md:w-3/4">
            <p className="md:hidden mb-3">{FA_IR.JobDuration2}</p>
            <div className="bg-white rounded-md p-5">
              <h4>{FA_IR.Experience2}</h4>
              <h6 className="mb-4">{FA_IR.JobDef2}</h6>
              <p className=" text-justify">{FA_IR.ExperienceDescription2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
