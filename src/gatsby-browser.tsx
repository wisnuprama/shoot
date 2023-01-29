import { ThemeProvider } from "@emotion/react";
import type { GatsbyBrowser } from "gatsby";

export const wrapRootElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => (
  <>
    <ThemeProvider theme={{}}>{element}</ThemeProvider>
  </>
);
