import Features from './Features'
import Home from './Home'
import Navigation from './Navigation'
import Portfolio from './Portfolio'
import Service from './Service'
import Team from './Team'
import Testimonials from './Testimonials'

function Agency() {
  return (
    <div>
        <Navigation/>
        <Home/>
        <Service/>
        <Features/>
        <Portfolio/>
        <Testimonials/>
        <Team/>
    </div>
  )
}

export default Agency