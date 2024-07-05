import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Provider } from "react-redux";

import { Auth0Provider } from "@auth0/auth0-react";
import { DOMAIN_ID, CLIENT_ID } from "./environments/environment.ts";
import AppRoutes from "./AppRoutes.tsx";
import { resolver, theme } from "./core/utility/constants/core.constants.ts";
import store from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      <Auth0Provider
        cacheLocation="localstorage"
        domain={DOMAIN_ID}
        clientId={CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </Auth0Provider>
    </MantineProvider>
  </React.StrictMode>
);
