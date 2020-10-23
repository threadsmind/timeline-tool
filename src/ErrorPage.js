import React from "react";

const ErrorPage = (props) => {
  console.log(`unknown route: ${props.page}`);

  return <div>Oh no... Something broke...</div>;
};

export default ErrorPage;
