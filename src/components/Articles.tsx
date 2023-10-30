import { FA_IR } from '../Language'
import { PiPencilLineLight } from 'react-icons/pi'
import { Articles_data } from '../mock'

export const Articles = () => {
  return (
    <div id="projects" className="py-14">
      <h3 className="font-medium text-center mb-5 ">{FA_IR.Articles}</h3>
      <div className="px-4 mx-5 md:mx-auto md:w-[700px] lg:w-[940px]">
        {Articles_data.map((item) => (
          <div
            className="flex bg-slate-50 my-10 shadow-xl rounded-md"
            key={item.title}
          >
            <div className="p-4 flex gap-3">
              <div className="flex justify-center items-center rounded-full bg-teal-200 w-8 h-8">
                <p className='text-xl'><PiPencilLineLight /></p>
              </div>
              <div>
                <h5 className="font-bold mb-3">{item.title} </h5>
                <p className="text-justify">{item.conf}</p>
                <span className='text-sm'>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
