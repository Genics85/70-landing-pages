import Features from './Features'
import Home from './Home'
import Navigation from './Navigation'
import Portfolio from './Portfolio'
import Service from './Service'

function Agency() {
  return (
    <div>
        <Navigation/>
        <Home/>
        <Service/>
        <Features/>
        <Portfolio/>
    </div>
  )
}

export default Agency