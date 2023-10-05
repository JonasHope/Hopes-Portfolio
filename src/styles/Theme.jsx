import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    c1: "#E0C251",
    c2: "#111111;",
    c3: "#f2f2f2;",
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
    s15: "1.5rem;",
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
