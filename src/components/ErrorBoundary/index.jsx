import React, { Component } from 'react';

import { Container, Error, ErrorDetails } from './styled';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });

    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Error>{this.state.error.toString()}</Error>
          <ErrorDetails>{this.state.errorInfo.componentStack}</ErrorDetails>
        </Container>
      );
    }
    return this.props.children;
  }
}
