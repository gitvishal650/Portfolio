import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import Stack from './components/Stack'
import Process from './components/Process'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <div className="ruler-top"></div>
      <Hero />
      <Work />
      <Stack />
      <Process />
      <Education />
      <Contact />
      <div className="ruler-bottom"></div>
      <Footer />
    </>
  )
}
