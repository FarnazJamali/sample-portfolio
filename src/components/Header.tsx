import { useState } from 'react'
import { Menu_Data } from '../mock'
import { FaXmark, FaBars } from 'react-icons/fa6'

export const Header = () => {
  const [active, setActive] = useState(false)

  return (
    <header
      className={
        'flex justify-center ' +
        (active ? 'fixed z-50 top-0 w-screen h-screen bg-white mb-20' : '')
      }
    >
      {/* hamburger menu starts */}
      <ul
        className="md:hidden w-full p-5 z-50 relative flex-col items-center "
        onClick={() => setActive(!active)}
      >
        {active ? (
          <p className="text-4xl border-b  text-teal-500 mb-10">
            <FaXmark />
          </p>
        ) : (
          <p className="text-4xl mx-auto p-3 m-3 fixed bg-white shadow-lg rounded-md">
            <FaBars />
          </p>
        )}
        {active
          ? Menu_Data.map((item) => (
              <li
                className="hover:text-teal-600 font-bold p-5 w-1/3 mx-auto"
                key={item.title}
              >
                <a href={item.url}>{item.title}</a>
              </li>
            ))
          : ''}
      </ul>
      {/* hamburger menu ends */}
      {/* Site Header for desktop */}
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
