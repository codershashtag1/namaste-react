import { useRouteError } from "react-router";

const ErrorComponent = () => {
  const error = useRouteError();
  return (
    <div className="error-container">
      <h1>Ooopss !!!</h1>
      <h3>Something went wrong ....</h3>
      <h3>{error.status + ' : ' + error?.error?.message}</h3>
    </div>
  )
}

export default ErrorComponent;