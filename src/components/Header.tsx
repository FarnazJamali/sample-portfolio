import { useState } from 'react'
import { Menu_Data } from '../mock'
import { FaXmark, FaBars } from 'react-icons/fa6'

export const Header = () => {
  const [active, setActive] = useState(false)
  console.log('Active:', active) // Add this for debugging
  return (
    <header className={"flex justify-center " + (active ? 'h-screen bg-white' : "")}>
      {/* hamburger menu starts */}
      <ul
        className="md:hidden w-full p-5 z-50 relative flex-col items-center justify-center"
        onClick={() => setActive(!active)}
      >
        {active ? (
          <p className="text-4xl mx-auto text-center w-1/3">
            <FaXmark />
          </p>
        ) : (
          <p className="text-4xl mx-auto p-3 m-3 fixed bg-white rounded-md">
            <FaBars />
          </p>
        )}
        {active
          ? Menu_Data.map((item) => (
              <li
                className="hover:text-teal-600 font-bold p-3 w-1/3 mx-auto"
                key={item.title}
              >
                <a href={item.url}>{item.title}</a>
              </li>
            ))
          : ''}
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
