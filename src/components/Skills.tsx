import { FA_IR } from '../Language'
import { Skills_Data } from '../mock'

export const Skills = () => {
  return (
    <div id="skills" className="pt-14 pb-5 py-4">
      <h3 className="font-medium text-center mb-10">{FA_IR.Skills}</h3>
      {Skills_Data.map((item) => (
        <ul className="mx-auto lg:w-[700px] px-4 ">
          <li className="bg-teal-100 my-4 p-3 rounded-sm hover:bg-teal-300 hover:cursor-pointer">{item.name}</li>
        </ul>
      ))}
    </div>
  )
}
