import { useState } from 'react'
import { Menu_Data } from '../mock'
import { FaXmark,FaBars } from 'react-icons/fa6'

export const Header = () => {
  const [active, setActive] = useState(false)
  console.log('Active:', active) // Add this for debugging
  return (
    <header className="flex justify-center">
      {/* hamburger menu starts */}
      {/* //TODO React Icon */}
      <ul className="md:hidden w-10 z-50" onClick={() => setActive(!active)}>
        {active ? (
          <p > <FaXmark /></p>
        ) : (
          <p><FaBars/></p>
        )}
      </ul>

      {/* hamburger menu ends */}
      {/*  */}
      <ul className="md:w-fit hidden md:flex rounded-b-lg p-3 shadow-lg bg-white">
        {Menu_Data.map((item) => (
          <li className="hover:text-teal-600 font-bold p-3" key={item.title}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </header>
  )
}
