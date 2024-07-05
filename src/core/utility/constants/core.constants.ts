import { CSSVariablesResolver, createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "primary",
  primaryShade: 9,
  colors: {
    primary: [
      "#ebfff8",
      "#d6fdf0",
      "#a7fde0",
      "#76fdce",
      "#56fdc0",
      "#46fdb7",
      "#3dfdb2",
      "#31e29c",
      "#24c889",
      "#003d29",
    ],
  },
  cursorType: "pointer",
});

export const resolver: CSSVariablesResolver = () => ({
  variables: {
    "--mantine-color-secondary": "#031837 ",
    "--mantine-color-grey": "#95A1B5",
    "--mantine-container-width": "80%",
    "--mantine-header-height": "80px",
    "--mantine-body-bg": " #F3F4F8",
    "--loader-color": "var(--mantine-color-primary)",
    "--mantine-border-color": "#D3D8E2",
  },
  dark: {},
  light: {},
});
