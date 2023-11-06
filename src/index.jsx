import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Auth0Provider } from "@auth0/auth0-react";
const container = document.getElementById("app");
const queryClient = new QueryClient();
const root = createRoot(container);
root.render(
  <Auth0Provider
    domain="dev-um5zqe2yn5gstf2k.us.auth0.com"
    clientId="FmImEH87mQYn28t4d6IJK06AcZEHkbPp"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </Auth0Provider>
);
