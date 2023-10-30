import { ToastContainer } from 'react-toastify'
import {
  About,
  Articles,
  Contact,
  Education,
  Experience,
  Footer,
  Header,
  Lead,
  Skills,
} from './components'

function App() {
  return (
    <div>
      <Header />
      <Lead />
      <About />
      <Experience />
      <Articles />
      <Education />
      <Skills />
      <Contact />
      <ToastContainer rtl/>
      <Footer />
    </div>
  )
}

export default App
