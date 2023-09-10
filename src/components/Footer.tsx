import { FA_IR } from '../Language'
import { Menu_Data } from '../mock'

export const Footer = () => {
  return (
    <footer className="flex-col items-center justify-center bg-slate-300 h-20">
      <ul className="flex justify-center items-center">
        {Menu_Data.map((item) => (
          <li className="hover:text-teal-600 font-bold p-3" key={item.title}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
      <p className="text-center text-sm mt-3">
        <span>{FA_IR.MadeWithLove}</span>
        <i className="fa-solid fa-heart"></i>
      </p>
    </footer>
  )
}
