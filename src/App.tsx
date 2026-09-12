import Header from './components/Header'
import Hero from './components/Hero'
import Steps from './components/Steps'
import Dashboard from './components/Dashboard'
import Tools from './components/Tools'
import Story from './components/Story'
import Pitch from './components/Pitch'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Steps />
        <Dashboard />
        <Tools />
        <Story />
        <Pitch />
      </main>
      <Footer />
    </>
  )
}
