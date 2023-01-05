import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...props }) {
  return props.userLoggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to="/sign-in" />
  );
}
