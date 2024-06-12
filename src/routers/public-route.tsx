import {Navigate} from "react-router-dom";

/**
 * The `PublicRoute` function checks if a user is authenticated based on the
 * presence of an "authToken" in localStorage and renders the provided element if
 * not authenticated, otherwise it navigates to the home page.
 * @param  - The `PublicRoute` function is a custom React component that takes an
 * `element` prop, which is expected to be a JSX element. Within the function, it
 * checks if a user is authenticated based on the presence of an "authToken" in the
 * localStorage. If the user is not authenticated,
 * @returns If the user is not authenticated (based on the example auth check using
 * localStorage), the JSX element passed as the `element` prop will be returned.
 * Otherwise, a `<Navigate>` component redirecting to the "/" route will be
 * returned.
 */
export default function PublicRoute({element}: {element: JSX.Element}) {
  const isAuthenticated = !!localStorage.getItem("accessToken"); // Example auth check
  return !isAuthenticated ? element : <Navigate to="/" />;
}
