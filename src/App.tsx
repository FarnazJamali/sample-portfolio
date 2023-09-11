import { ToastContainer } from 'react-toastify'
import {
  About,
  Contact,
  Education,
  Experience,
  Footer,
  Header,
  Lead,
  Projects,
  Skills,
} from './components'

function App() {
  return (
    <div>
      <Header />
      <Lead />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Contact />
      <ToastContainer rtl/>
      <Footer />
    </div>
  )
}

export default App
