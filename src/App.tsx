import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";

function App() {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect();
    }
  }, [isLoading]);
  return <Outlet />;
}
export default App;
