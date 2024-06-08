import {Navigate} from "react-router-dom";

/**
 * The PrivateRoute function checks if the user is authenticated based on the
 * presence of an "authToken" in localStorage and renders the provided element if
 * authenticated, otherwise redirects to the login page.
 * @param  - The `PrivateRoute` function is a React component that acts as a custom
 * route component for handling private routes in a React application. It takes an
 * `element` prop, which is expected to be a JSX element representing the content
 * to be rendered for the private route.
 * @returns The PrivateRoute function returns the JSX element passed as a prop if
 * the user is authenticated (based on the presence of an "authToken" in
 * localStorage). If the user is not authenticated, it returns a Navigate component
 * that redirects the user to the "/auth/login" route.
 */
export default function PrivateRoute({element}: {element: JSX.Element}) {
  const isAuthenticated = !!localStorage.getItem("accessToken"); // Example auth check
  return isAuthenticated ? element : <Navigate to="/auth/login" />;
}
