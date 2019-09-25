import PropTypes from 'prop-types'

import { withTranslation } from '../i18n'

class ErrorPage extends React.Component {
  static propTypes () {
    return {
      errorCode: React.PropTypes.number.isRequired,
      url: React.PropTypes.string.isRequired
    }
  }

  static getInitialProps ({ res, xhr }) {
    const errorCode = res ? res.statusCode : xhr ? xhr.status : null
    return { errorCode, namespacesRequired: ['common'] }
  }

  render () {
    var response
    switch (this.props.errorCode) {
      case 200: // Also display a 404 if someone requests /_error explicitly
      case 404:
        response = (
          <div>
            <h1>Page Not Found</h1>
            <p>The page does not exist.</p>
          </div>
        )
        break
      case 500:
        response = (
          <div>
            <h1>Internal Server Error</h1>
            <p>An internal server error occurred.</p>
          </div>
        )
        break
      default:
        response = (
          <div>
            <h1>HTTP {this.props.errorCode} Error</h1>
            <p>
              An <strong>HTTP {this.props.errorCode}</strong> error occurred
              while trying to access this page.
            </p>
          </div>
        )
    }

    return response
  }
}

ErrorPage.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(ErrorPage)
