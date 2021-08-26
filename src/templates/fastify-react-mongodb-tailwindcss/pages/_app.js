import 'tailwindcss/tailwind.css'
import PropTypes from 'prop-types'

function App ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}

export default App
