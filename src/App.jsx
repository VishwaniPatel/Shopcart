import React from "react";
import Master from "./core/Master";
import { MantineProvider } from "@mantine/core";
import Routing from "./routing/Routing";

const App = () => {
  return (
    <MantineProvider>
      <Routing />
    </MantineProvider>
  );
};

export default App;
