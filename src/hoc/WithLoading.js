import React from 'react';

const WithLoading = (WrappedComponent) => {
  return class WithLoadingComponent extends React.Component {
    render() {
      const { isLoading, ...props } = this.props;

      if (isLoading) {
        return <div>Loading...</div>;
      }

      return <WrappedComponent {...props} />;
    }
  };
};

export default WithLoading;
