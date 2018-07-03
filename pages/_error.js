/**
 * 404 or 500 errors are handled both client and server side by this component. I
 */
import React from "react";

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <h1 style={{ textAlign: "center", paddingTop: "5rem" }}>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : "An error occurred on client"}
      </h1>
    );
  }
}
