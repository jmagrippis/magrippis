import Router from 'next/router'

import './app.css'
import { App } from '../components/App'
import { trackPageView } from '../lib/gtag'

Router.events.on('routeChangeComplete', trackPageView)

export default App
