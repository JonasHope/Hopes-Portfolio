import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    c1: "#0F1626",
    c2: "#E9EEF2;",
    c3: "#93A6BF;",
    c4: "#59D9C1;",
    c5: "#122B39",
    c6: "#1f2941",
  },
  media: {
    mobile: `@media (max-width: 768px)`,
    tablet: `@media (max-width: 992px)`,
    desktop: `@media (max-width: 1220px)`,
    desktopxl: `@media (min-width: 1221px)`,
  },
  fontsize: {
    s08: "0.8rem;",
    s09: "0.9rem;",
    s1: "1rem;",
    s15: "1.5rem;",
    s2: "2rem;",
    s25: "2.5rem;",
    s3: "3rem;",
    s4: "4rem;",
  },
  headersize: {
    h1: "4rem;",
    h2: "3rem;",
    h3: "2rem;",
    h4: "1.5rem;",
    h5: "1rem;",
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
