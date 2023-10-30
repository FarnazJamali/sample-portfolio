import { FA_IR } from '../Language'

export const About = () => {
  return (
    <div id="about" className="py-16 px-8 md:flex w-full">
      <h4 className="font-medium text-center mb-5 md:w-1/4">{FA_IR.About}</h4>
      <p className='md:w-3/4 text-justify lg:pl-5'>{FA_IR.AboutDescription}</p>
    </div>
  )
}
