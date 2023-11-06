import React from "react";
import Master from "./core/Master";
import { MantineProvider } from "@mantine/core";
import Routing from "./routing/Routing";
import ContextProvider from "./context/CartProvider";

const App = () => {
  return (
    <ContextProvider>
      <MantineProvider
        theme={{
          colorScheme: "light",
          colors: {
            brand: [
              "#e7fef6",
              "#b6fbe5",
              "#85f9d3",
              "#55f7c2",
              "#24f4b0",
              "#0bdb97",
              "#08aa75",
              "#067a54",
              "#044932",
              "#033d2a",
            ],
          },
          primaryColor: "brand",

          shadows: {
            md: "1px 1px 3px rgba(0, 0, 0, .25)",
            xl: "5px 5px 3px rgba(0, 0, 0, .25)",
          },

          headings: {
            fontFamily: "Roboto, sans-serif",
            sizes: {
              h1: { fontSize: "2rem" },
            },
          },
        }}
      >
        <Routing />
      </MantineProvider>
    </ContextProvider>
  );
};

export default App;
