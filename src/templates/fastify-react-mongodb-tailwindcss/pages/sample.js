import Header from '../src/components/Header'
import PropTypes from 'prop-types'

const Sample = ({ msg }) => {
  return (
    <div className = 'bg-gray-900 min-h-screen flex items-center justify-center'>
      <Header />
      <div className = 'flex flex-col'>
        <span className = 'text-bold text-white text-7xl m-6'>
          { msg }
        </span>
        <div className = 'flex flex-row justify-center'>
          <span className = 'text-bold text-gray-800 bg-white py-1 px-2 rounded'>
            v0.0.1
          </span>
        </div>
      </div>
    </div>
  )
}

Sample.propTypes = {
  msg: PropTypes.string
}

Sample.getInitialProps = ({ query: { msg } }) => {
  return { msg }
}

export default Sample
