import { FA_IR } from '../Language'
import { Menu_Data } from '../mock'
import { FaHeart } from 'react-icons/fa6'

export const Footer = () => {
  return (
    <footer className="flex-col items-center justify-center bg-slate-300 h-fit">
      <ul className="flex flex-col md:flex-row justify-center items-center">
        {Menu_Data.map((item) => (
          <li className="hover:text-teal-600 md:font-bold p-3" key={item.title}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
      <p className="text-center text-sm py-3">
        <a href="https://www.linkedin.com/in/farnaz-jamali/">
          <span className="">{FA_IR.MadeWithLove} </span>
          <span className="inline-block">
            <FaHeart />
          </span>
        </a>
      </p>
    </footer>
  )
}
