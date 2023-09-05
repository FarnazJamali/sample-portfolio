import { useState } from 'react'
import { FA_IR } from '../Language'

export const Header = () => {
    const [active, setActive] = useState(false)
    console.log('Active:', active); // Add this for debugging
  return (
    <header className="md:flex md:justify-center">
          {/* hamburger menu starts */}
          {/* //TODO React Icon */}
      <ul className="md:hidden w-10 z-50" onClick={() => setActive(!active)}>
        {active ? (
        <i className="fa-solid fa-xmark"></i>
      ) : (
        <i className="fa-solid fa-bars"></i>
      )}
      </ul>
      

      {/* hamburger menu ends */}
      <ul className="w-max rounded-b-lg hidden md:flex p-3 shadow-lg bg-white">
        <li className='hover:text-teal-600 font-bold'>
          <a href="#about" className="p-2">
            {FA_IR.About}
          </a>
        </li>
        <li className='hover:text-teal-600 font-bold'>
          <a href="#experience" className="p-2">
            {FA_IR.Experience}
          </a>
        </li>
        <li className='hover:text-teal-600 font-bold'>
          <a href="#projects">{FA_IR.Projects}</a>
        </li>
        <li className='hover:text-teal-600 font-bold'>
          <a href="#education" className="p-2">
            {FA_IR.Education}
          </a>
        </li>
        <li className='hover:text-teal-600 font-bold'>
          <a href="#skills" className="p-2">
            {FA_IR.Skills}
          </a>
        </li>
        <li className='hover:text-teal-600 font-bold'>
          <a href="#contact" className="p-2">
            {FA_IR.Contact}
          </a>
        </li>
      </ul>
    </header>
  )
}


