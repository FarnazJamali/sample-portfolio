import { FA_IR } from '../Language'
import { Projects_data } from '../mock'

export const Projects = () => {
  return (
    <div id="projects" className="py-14">
      <h3 className="font-medium text-center mb-5 ">{FA_IR.Projects}</h3>
      <div className="px-4 mx-5 md:mx-auto md:w-[700px] lg:w-[940px]">
        {Projects_data.map((item) => (
          <div className="flex bg-slate-50 my-10 shadow-xl rounded-md">
            <img className="hidden md:block" src={item.img} />
            <div className='p-4'>
              <h5 className='font-bold mb-3'>{item.title}</h5>
              <p className='text-justify'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
