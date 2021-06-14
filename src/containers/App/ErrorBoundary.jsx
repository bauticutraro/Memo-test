/**
 * Archivo para el handler de errores
 * @module ErrorBoundary
 */
import { Component } from 'react';
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }

  render() {
    const { hasError, error } = this.state;
    if (hasError) {
      console.log(error);
      return <h2>Ocurrió un error!</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
