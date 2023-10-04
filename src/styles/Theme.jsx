import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    c1: "#684073;",
    c2: "#28594B;",
    c3: "#594A1D;",
    c4: "#73612C;",
    c5: "#F2F2F2;",
  },
  media: {
    mobile: `@media (max-width: 768px)`,
    tablet: `@media (max-width: 992px)`,
    desktop: `@media (max-width: 1220px)`,
    desktopxl: `@media (min-width: 1221px)`,
  },
  fontsize: {
    s1: "1rem;",
    s2: "2rem;",
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
